//making a validation from the contact form
const form=document.getElementById("contact-form");
const statusMessage=document.getElementById("form-status");
form.noValidate =true;
form.addEventListener("submit",function(event) {
    event.preventDefault();
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let topic=document.getElementById("topic").value;
    let message=document.getElementById("message").value.trim();
    let replymethod=document.querySelector('input[name="reply"]:checked').value;
//name validation
if (name.length<3){
    showError("Name Must contain at least 3 characters");
    return;
}
let emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)) {
    showError("Please enter a valid email address")
    return;
}

//phone validation
if(phone !==""&&!/^[6-9]\d{9}$/.test(phone)){
    showError("Enter a valid 10-digit Indian mobile number");
    return;
}
if(replymethod==="phone" && phone===""){
    showError("Enter your phone number for a phone reply");
    return;
}
if(!topic){
    showError("Please select a topic");
    return;
}

//10.Message Validation
if (message.length<10){
    showError("Message Must contain at least 10 characters");
    return;
}

statusMessage.style.color="green";
statusMessage.textContent="Thank you! Your Form is Valid.";
});
function showError(message){
    statusMessage.style.color="red";
    statusMessage.textContent=message;
}
