/* ==========================================================
   script.js  -  sends the contact form WITHOUT opening email
   ----------------------------------------------------------
   How it works (the big picture):
   1. User clicks "Send Message"
   2. JavaScript stops the normal form submit (no page reload)
   3. JavaScript collects the form values
   4. fetch() sends them to Web3Forms (a free mail service)
   5. Web3Forms emails the message to YOU
   6. We show "Sent!" or an error on the page
   ========================================================== */

// STEP 0: your Web3Forms access key.
// Get it free at https://web3forms.com -> enter your email -> they send you a key.
// It is safe to keep in front-end code; it can only send mail to YOUR email.
const ACCESS_KEY = "2a2de5d9-0d69-46b0-bde5-246210f35c9a";

// STEP 1: grab the HTML elements we need, using their id.
const form = document.getElementById("contact-form");
const statusBox = document.getElementById("form-status");
const submitBtn = form.querySelector('button[type="submit"]');

// A small helper so we don't repeat ourselves.
// type is "success" or "error" -> matches the CSS classes.
function showStatus(message, type) {
    statusBox.textContent = message;
    statusBox.className = type; // sets class="success" or class="error"
}

// STEP 2: listen for the form's "submit" event.
// "async" lets us use "await" inside (waiting for the network).
form.addEventListener("submit", async function (event) {

    // Stop the browser's default behaviour (reloading the page).
    event.preventDefault();

    // Don't try without a key - helps while you are learning.
    if (ACCESS_KEY === "PASTE_YOUR_ACCESS_KEY_HERE") {
        showStatus("Add your Web3Forms access key in script.js first.", "error");
        return;
    }

    // STEP 3: collect the form data.
    // FormData reads every field that has a name="..." attribute.
    // Object.fromEntries turns it into { name: "...", email: "...", ... }
    const data = Object.fromEntries(new FormData(form));

    // Add the extra things Web3Forms needs.
    data.access_key = ACCESS_KEY;
    data.subject = "New portfolio message: " + data.topic;
    data.from_name = "Portfolio Website";

    // STEP 4: give the user feedback while we wait.
    submitBtn.disabled = true;           // stop double-clicking
    submitBtn.textContent = "Sending...";
    showStatus("", "");                  // clear the old message

    // STEP 5: send it. try/catch handles errors (e.g. no internet).
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)   // JS object -> JSON text
        });

        const result = await response.json(); // JSON text -> JS object

        if (response.ok && result.success) {
            showStatus("Thank you! Your message has been sent.", "success");
            form.reset();                // clear the fields
        } else {
            // The server answered, but said no.
            showStatus(result.message || "Something went wrong. Please try again.", "error");
        }

    } catch (error) {
        // The request never reached the server.
        console.error(error);            // visible in DevTools (F12) for debugging
        showStatus("Network error. Check your connection and try again.", "error");

    } finally {
        // Runs whether it worked or failed: put the button back.
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
    }
});