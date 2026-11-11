# Personal Portfolio Website – HTML5 & CSS3

A beginner-friendly personal portfolio website built using **HTML5**, **CSS3**, and **Visual Studio Code**.

This single README documents the **HTML structure** (Part 1), the **CSS styling** (Part 2) and the **JavaScript contact form** (Part 3) used in the portfolio. It includes beginner-friendly explanations, examples, project setup, and practice exercises.

## Quick Project Structure

```text
My-Portfolio/
├── index.html   <- structure (HTML)
├── style.css    <- design (CSS)
├── script.js    <- behaviour (JavaScript)
├── images.jpg   <- profile picture
└── README.md    <- this file
```

---

# Part 1: HTML5

# Personal Portfolio Website – HTML5

A beginner-friendly personal portfolio website built using ****HTML5**** and ****Visual Studio Code****.

This project demonstrates how to create a structured portfolio containing personal information, projects, technical skills, education, and a contact form.

---

## 1. Project Overview

### Features

- Personal introduction and profile image

- About Me section

- Projects showcase

- Technical skills

- Education details in a table

- Contact form

- Quick navigation links

- Footer section

### Technologies Used

- HTML5

- Visual Studio Code

- Web Browser

---

## 2. Project Structure

```text

My-Portfolio/

│

├── index.html

└── README.md

```

- `index.html` – Contains the complete portfolio webpage.

- `README.md` – Explains the project and the HTML concepts used.

---

# 3. Complete HTML Tags Explanation

## A. HTML Document Structure

### 1. `<!DOCTYPE html>`

Declares that the document uses HTML5.

****Purpose:**** Helps the browser render the webpage using modern HTML standards.

It is a declaration, not an HTML tag.

### 2. `<html>`

The root element of an HTML document. All other HTML elements are placed inside it.

****Attribute:****

- `lang="en"` – Specifies that the page language is English.

### 3. `<head>`

Contains information about the webpage. Most of this information is not displayed inside the webpage.

### 4. `<meta>`

Provides metadata about the HTML document.

Important attributes used:

- `charset="utf-8"` – Supports a wide range of characters and symbols.

- `name="viewport"` – Identifies viewport settings.

- `content="width=device-width, initial-scale=1"` – Helps the webpage adapt to the device width.

- `name="description"` – Defines a description of the webpage.

- `name="author"` – Identifies the author.

`<meta>` is a void element and does not need a closing tag.

### 5. `<title>`

Defines the webpage title shown in the browser tab.

Example:

```html

<title>Syed Mufeez – AI Engineer Portfolio</title>

```

### 6. `<body>`

Contains the visible webpage content, such as headings, paragraphs, images, links, tables, and forms.

---

## B. Header and Navigation Tags

### 7. `<header>`

Defines the introductory section of a webpage or content section.

In this project, it contains the name, job title, profile image, contact information, and navigation.

### 8. `<h1>` to `<h6>`

Define headings with different levels of importance.

- `<h1>` – Main heading.

- `<h2>` – Major section heading.

- `<h3>` – Subsection heading.

- `<h4>` – Fourth-level heading.

- `<h5>` – Fifth-level heading.

- `<h6>` – Sixth-level heading.

Example:

```html

<h1>Syed Mufeez</h1>

<h2>AI Engineer</h2>

<h3>My Projects</h3>

```

### 9. `<p>`

Defines a paragraph of text.

### 10. `<q>`

Defines a short inline quotation. Browsers generally display quotation marks around the text.

### 11. `<img>`

Displays an image on a webpage.

Important attributes:

- `src` – Specifies the image location.

- `alt` – Provides alternative text if the image cannot load and supports screen readers.

- `width` – Sets image width.

- `height` – Sets image height.

Example:

```html

<img src="profile.jpg" alt="My Profile Picture" width="120" height="120">

```

`<img>` is a void element and does not need a closing tag.

### 12. `<address>`

Represents contact information for the author or owner of a webpage or article.

### 13. `<br>`

Creates a line break.

It is a void element and does not need a closing tag.

### 14. `<a>`

Creates a hyperlink.

Important attribute:

- `href` – Specifies the destination of the link.

Examples:

```html

<a href="https\://example.com">Visit Website</a>

<a href="mailto:example@gmail.com">Send Email</a>

<a href="tel:+911234567890">Call Me</a>

<a href="#about">About Me</a>

```

### 15. `<nav>`

Defines a section containing navigation links.

Attribute:

- `aria-label` – Provides an accessible name for the navigation section.

### 16. `<ul>`

Creates an unordered list, usually displayed with bullet points.

### 17. `<li>`

Defines an individual list item inside a list.

Example:

```html

<ul>

    <li>Python</li>

    <li>SQL</li>

    <li>HTML</li>

</ul>

```

---

## C. Text Formatting Tags

### 18. `<strong>`

Indicates that text has strong importance. Browsers usually display it in bold.

### 19. `<em>`

Adds emphasis to text. Browsers usually display it in italics.

### 20. `<mark>`

Highlights text, usually with a coloured background.

### 21. `<abbr>`

Defines an abbreviation or acronym.

Attribute:

- `title` – Provides the full meaning of the abbreviation.

Example:

```html

<abbr title="Artificial Intelligence">AI</abbr>

```

### 22. `<small>`

Displays fine print or supplementary information, usually in smaller text.

### 23. `<time>`

Represents a date or time in a machine-readable format.

Attribute:

- `datetime` – Specifies the machine-readable date or time.

Example:

```html

<time datetime="2026-11-06">6 November 2026</time>

```

### 24. `<b>`

Draws attention to text without adding strong importance. Usually displayed in bold.

### 25. `<i>`

Represents text in an alternate voice or mood, such as a technical term or title. Usually displayed in italics.

---

## D. Semantic and Content Organization Tags

### 26. `<main>`

Contains the main content of the webpage.

A page should normally have one `<main>` element.

### 27. `<section>`

Groups related content into a thematic section.

Example:

```html

<section id="about">

    <h2>About Me</h2>

    <p>Welcome to my portfolio.</p>

</section>

```

Attribute:

- `id` – Gives an element a unique identifier.

### 28. `<article>`

Represents independent, self-contained content, such as a project description or blog post.

### 29. `<aside>`

Contains related or supplementary information that is not part of the main content.

### 30. `<footer>`

Defines the footer of a webpage or section. It often contains copyright information and related links.

### 31. `<hr>`

Creates a thematic break between sections. Browsers usually display it as a horizontal line.

---

## E. Details and Code Display Tags

### 32. `<details>`

Creates an expandable section that users can open and close.

### 33. `<summary>`

Defines the visible heading of a `<details>` element.

Example:

```html

<details>

    <summary>See sample output</summary>

    <p>This is the hidden content.</p>

</details>

```

### 34. `<figure>`

Groups self-contained content, such as an image, diagram, or code example.

### 35. `<figcaption>`

Provides a caption or description for content inside a `<figure>`.

### 36. `<pre>`

Displays preformatted text. It preserves spaces and line breaks.

### 37. `<code>`

Identifies a piece of computer code.

Example:

```html

<pre><code>print("Hello World")</code></pre>

```

---

## F. List Tags

### 38. `<dl>`

Creates a description list containing terms and their descriptions.

### 39. `<dt>`

Defines a term or name in a description list.

### 40. `<dd>`

Provides the description of a term inside a description list.

Example:

```html

<dl>

    <dt>Programming</dt>

    <dd>Python and SQL</dd>

</dl>

```

### 41. `<ol>`

Creates an ordered list, usually numbered.

Example:

```html

<ol>

    <li>Python</li>

    <li>SQL</li>

    <li>HTML</li>

</ol>

```

---

## G. Table Tags

### 42. `<table>`

Creates a table to display data in rows and columns.

### 43. `<caption>`

Provides a title or description for the table.

### 44. `<thead>`

Groups the heading rows of a table.

### 45. `<tbody>`

Groups the main data rows of a table.

### 46. `<tfoot>`

Groups footer rows containing summary or additional information.

### 47. `<tr>`

Defines a table row.

### 48. `<th>`

Defines a header cell in a table.

Attribute:

- `scope="col"` – Identifies the header as applying to a column.

### 49. `<td>`

Defines a standard data cell in a table.

Attribute:

- `colspan="4"` – Makes a cell span across four columns.

Example:

```html

<table *border*="1" cellpadding="8">

    <caption>Education Details</caption>

    <thead>

        <tr>

            <th scope="col">Year</th>

            <th scope="col">Qualification</th>

        </tr>

    </thead>

    <tbody>

        <tr>

            <td>2021–2025</td>

            <td>B.Tech</td>

        </tr>

    </tbody>

</table>

```

Additional table attributes:

- `border` – Specifies a table border in this example.

- `cellpadding` – Specifies space between cell content and its border.

Note: CSS is the modern recommended way to style table borders and spacing.

---

## H. Progress and Label Tags

### 50. `<meter>`

Displays a scalar measurement within a known range, such as a CGPA out of 10.

Important attributes:

- `min` – Minimum value.

- `max` – Maximum value.

- `value` – Current value.

Example:

```html

<meter min="0" max="10" value="8.11">

    8.11 out of 10

</meter>

```

### 51. `<label>`

Provides a descriptive label for a form control.

Attribute:

- `for` – Connects the label to an element with the matching `id`.

Example:

```html

<label for="name">Name:</label>

<input type="text" id="name">

```

---

## I. Form Tags

### 52. `<form>`

Creates a form to collect information from users.

Important attributes:

- `action` – Specifies where form data should be sent.

- `method` – Specifies the HTTP method used to submit data.

- `enctype` – Specifies how form data is encoded.

The form now uses `id="contact-form"` and has **no** `action` attribute. JavaScript (see Part 3) sends the data, so the visitor never leaves the page or opens an email app. (The old version used `action="mailto:..."`, which only opened the email app.)

### 53. `<fieldset>`

Groups related form controls together.

### 54. `<legend>`

Provides a title for a `<fieldset>`.

### 55. `<input>`

Creates an input field.

Input types used in this project:

- `type="text"` – Accepts ordinary text.

- `type="email"` – Accepts an email address and provides basic email validation.

- `type="tel"` – Accepts a telephone number.

- `type="radio"` – Allows one selection from a group.

- `type="checkbox"` – Allows a user to select or deselect an option.

Important attributes:

- `id` – Gives the input a unique identifier.

- `name` – Identifies the field when form data is submitted.

- `value` – Specifies the field's submitted value.

- `placeholder` – Displays a hint inside an empty field.

- `required` – Makes the field mandatory.

- `checked` – Selects a radio button or checkbox by default.

- `list` – Connects a text input to a `<datalist>`.

### 56. `<datalist>`

Provides predefined suggestions for an input field.

### 57. `<option>`

Defines an individual choice inside a `<select>` or a suggestion inside a `<datalist>`.

### 58. `<select>`

Creates a dropdown list.

### 59. `<textarea>`

Creates a multiline text input field.

Attributes:

- `rows` – Specifies the visible number of text lines.

- `cols` – Specifies the visible width in characters.

### 60. `<button>`

Creates a clickable button.

Button types used:

- `type="submit"` – Submits the form.

- `type="reset"` – Resets form controls to their initial values.

---

## 4. Additional HTML Tags Referenced in Comments

These tags are mentioned as learning references. They are not used as active elements in the displayed webpage.

| Tag | Explanation |

|---|---|

| `<blockquote>` | Represents a longer quotation. |

| `<cite>` | Identifies the title of a creative work or cited source. |

| `<sub>` | Displays subscript text, such as H₂O. |

| `<sup>` | Displays superscript text, such as 10². |

| `<kbd>` | Represents keyboard input, such as Ctrl. |

| `<del>` | Represents deleted text. |

| `<ins>` | Represents inserted text. |

Other elements:

- `<link>` – Connects an external resource, commonly a CSS stylesheet.

- `<script>` – Embeds or references JavaScript code. It is used at the bottom of `index.html` as `<script src="script.js"></script>`.

`<link>` and `<script>` are both active in the final project.

---

## 5. Important HTML Entities

HTML entities display special characters.

| Entity | Output | Meaning |

|---|---|---|

| `&copy;` | © | Copyright symbol |

| `&amp;` | & | Ampersand |

| `&lt;` | < | Less-than symbol |

| `&gt;` | > | Greater-than symbol |

| `&quot;` | " | Double quotation mark |

Example:

```html

<p>&copy; 2026 Syed Mufeez</p>

```

---

## 6. Important HTML Attributes Summary

| Attribute | Purpose |

|---|---|

| `id` | Uniquely identifies an element |

| `class` | Groups elements for CSS or JavaScript |

| `href` | Specifies a link destination |

| `src` | Specifies an image or resource location |

| `alt` | Provides alternative image text |

| `width` | Sets width |

| `height` | Sets height |

| `title` | Provides additional descriptive information |

| `name` | Identifies form data |

| `value` | Specifies a value |

| `type` | Defines an input or button type |

| `for` | Connects a label to a form control |

| `required` | Makes a form field mandatory |

| `placeholder` | Displays an input hint |

| `target` | Specifies where to open a linked document |

| `rel` | Describes the relationship to the linked resource |

| `datetime` | Provides a machine-readable date or time |

| `colspan` | Makes a table cell span multiple columns |

| `rowspan` | Makes a table cell span multiple rows |

| `aria-label` | Provides an accessible name |

| `min` | Defines the minimum value |

| `max` | Defines the maximum value |

| `checked` | Sets a radio button or checkbox as selected |

| `rows` | Sets the visible number of textarea rows |

| `cols` | Sets the visible width of a textarea |

| `action` | Specifies the form submission destination |

| `method` | Specifies the form submission method |

| `enctype` | Specifies form-data encoding |

---

## 7. How to Run the Project

1\. Open Visual Studio Code.

2\. Open the project folder.

3\. Open `index.html`.

4\. Right-click and choose ****Open with Live Server****, if installed.

5\. Otherwise, open `index.html` directly in your web browser.

---

## 8. Learning Outcomes

After completing this project, I practised:

- HTML5 document structure

- Semantic HTML

- Headings and paragraphs

- Text formatting

- Images and hyperlinks

- Ordered and unordered lists

- Description lists

- Tables

- Forms and input controls

- HTML entities

- Accessibility-related attributes

- Organizing webpage content

---

## 9. Author

****Syed Mufeez****

B.Tech – Computer Science (Artificial Intelligence and Data Science)

## 10. License

This project is created for educational and learning purposes.

---

# Part 2: CSS3

This README explains the CSS concepts, selectors, properties, effects, layout rules, and responsive design used in the portfolio's `style.css` file. Explanations are written in simple English with Telugu support for beginners.

---

## 1. Project Overview

### Purpose

CSS (Cascading Style Sheets) controls how an HTML webpage looks. It adds colours, fonts, spacing, borders, layouts, animations, and responsive behaviour.

**Simple comparison:**

- HTML – Creates the webpage structure.
- CSS – Styles and designs the webpage.
- JavaScript – Adds behaviour and interaction.

### Features styled in this project

- Google Font (Inter)
- Dark page background and gradient effects
- Reusable CSS colour variables
- Header and profile image
- Navigation menu
- Section and project cards
- Text formatting
- Skills and lists
- Education table
- Contact form and buttons
- Footer
- Mobile responsive layout

### Technologies Used

- HTML5
- CSS3
- Visual Studio Code
- Web Browser
- Google Fonts

---

## 2. Project Structure

```text
My-Portfolio/
│
├── index.html
├── style.css
└── README.md
```

- `index.html` – Contains the webpage structure and content.
- `style.css` – Controls the appearance and layout of the webpage.
- `README.md` – Explains the project and the CSS concepts used.

To connect the CSS file to HTML, add this inside the HTML `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

---

## 3. CSS Syntax and Basic Concepts

A CSS rule normally contains a selector and a declaration block.

```css
selector {
    property: value;
}
```

| Part | Meaning | Telugu explanation |
|---|---|---|
| Selector | Chooses an HTML element | ఏ HTML element ని select చేయాలో చెబుతుంది |
| Property | Chooses what to change | ఏది మార్చాలో చెబుతుంది |
| Value | Sets the required style | ఎలా మార్చాలో చెబుతుంది |
| `{ }` | Wraps the declarations | CSS rules ప్రారంభం, ముగింపు |
| `:` | Separates property and value | Property, value మధ్య ఉంటుంది |
| `;` | Ends a declaration | ఒక CSS instruction ముగింపు |

Example:

```css
h1 {
    color: red;
    font-size: 40px;
}
```

- `h1` – Selector.
- `color` – Property.
- `red` – Value.
- `font-size` – Property.
- `40px` – Value.

**Telugu:** `h1` అనే heading ని select చేసి, దాని text colour ని red గా, size ని 40 pixels గా మార్చుతున్నాం.

### CSS Comments

```css
/* This is a CSS comment */
```

Comments explain code and are not displayed on the webpage.

**Telugu:** Code ఎందుకు రాశామో మనకు గుర్తుండడానికి comments ఉపయోగిస్తాం. Browser వీటిని design లో చూపించదు.

---

## 4. Google Fonts

Original CSS:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");
```

`@import` loads an external stylesheet.

- `fonts.googleapis.com` – Google Fonts service.
- `family=Inter` – Requests the Inter font family.
- `wght@400;500;600;700;800` – Requests different font weights.
- `display=swap` – Allows a fallback font to appear while the web font loads.

### Font weights

| Weight | Common meaning |
|---|---|
| 400 | Regular |
| 500 | Medium |
| 600 | Semi-bold |
| 700 | Bold |
| 800 | Extra bold |

**Telugu:** Website text కి professional font look ఇవ్వడానికి Google Fonts నుంచి Inter font load చేస్తున్నాం.

---

## 5. CSS Variables – Reusable Colours

Original CSS:

```css
:root {
    --bg: #070a17;
    --card: #0f1428;
    --border: #232a4d;
    --text: #e7eaf6;
    --muted: #8d96b8;
    --cyan: #22d3ee;
    --violet: #8b5cf6;
    --gradient: linear-gradient(90deg, #8b5cf6, #22d3ee);
}
```

`:root` selects the document's root element. Variables declared here can be reused throughout the stylesheet.

A CSS custom property begins with `--` and is used with `var()`.

| Variable | Purpose |
|---|---|
| `--bg` | Main page background |
| `--card` | Card background |
| `--border` | Border colour |
| `--text` | Main text colour |
| `--muted` | Secondary text colour |
| `--cyan` | Cyan highlight colour |
| `--violet` | Violet highlight colour |
| `--gradient` | Violet-to-cyan gradient |

Example:

```css
h1 {
    color: var(--cyan);
}
```

**Telugu:** ఒక colour ని `:root` లో ఒకసారి store చేసి, website లో అవసరమైన చోట `var(--cyan)` లాగా మళ్లీ ఉపయోగించవచ్చు. Colour మార్చాలంటే variable value ఒక్కసారి మార్చితే సరిపోతుంది.

---

## 6. Universal Selector and Box Sizing

Original CSS:

```css
* {
    box-sizing: border-box;
}
```

- `*` – Universal selector; selects all elements.
- `box-sizing: border-box` – Includes padding and border in the element's declared width and height.

**Telugu:** `*` అంటే webpage లోని అన్ని elements. `border-box` వల్ల width, height calculations సులభంగా అర్థమవుతాయి.

---

## 7. Smooth Scrolling

```css
html {
    scroll-behavior: smooth;
}
```

- `html` – Selects the root HTML element.
- `scroll-behavior` – Controls scrolling behaviour.
- `smooth` – Makes supported in-page scrolling move smoothly.

**Telugu:** Navigation link click చేసినప్పుడు target section దగ్గరకు smooth గా scroll అవుతుంది.

---

## 8. Body Styling – Main Page Design

Original CSS:

```css
body {
    margin: 0;
    font-family: "Inter", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: var(--text);
    background-color: var(--bg);
    background-image: radial-gradient(circle at 50% 0%, #1b1647 0%, transparent 55%);
    background-repeat: no-repeat;
}
```

| Property | Explanation |
|---|---|
| `margin: 0` | Removes the browser's default body margin |
| `font-family` | Sets the preferred font and fallback fonts |
| `font-size` | Sets the base text size |
| `line-height` | Controls the height of each line of text |
| `color` | Sets the default text colour |
| `background-color` | Sets the page background |
| `background-image` | Adds a background image or gradient |
| `radial-gradient()` | Creates a circular/radial colour transition |
| `background-repeat` | Controls whether the background image repeats |

**Telugu:** `body` అనేది webpage లోని ప్రధాన content area. ఇక్కడ page మొత్తం font, text colour, background, spacing set చేస్తున్నాం.

---

## 9. Links and Hover Effects

Original CSS:

```css
a {
    color: var(--cyan);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

- `a` – Selects hyperlink elements.
- `text-decoration: none` – Removes the default underline.
- `:hover` – Applies styles while the pointer is over the element.
- `underline` – Adds an underline.

**Telugu:** Link మీద mouse pointer పెట్టినప్పుడు underline కనిపిస్తుంది.

---

## 10. Headings and Text Selection

### Headings

```css
h1, h2, h3 {
    margin-top: 0;
    line-height: 1.25;
}
```

The comma groups multiple selectors. These rules apply to `h1`, `h2`, and `h3`.

### Selected text

```css
::selection {
    background-color: var(--violet);
    color: #ffffff;
}
```

`::selection` styles the part of text selected by the user.

**Telugu:** Mouse తో text select చేసినప్పుడు selection background violet గా, text white గా కనిపిస్తుంది.

---

## 11. Page Width and Alignment

Original CSS:

```css
header,
main,
aside,
footer {
    max-width: 900px;
    margin: 24px auto;
    padding: 0 16px;
}
```

- `header, main, aside, footer` – Selects these four elements.
- `max-width: 900px` – Limits their maximum width.
- `margin: 24px auto` – Adds 24px top/bottom margin and automatic left/right margins.
- `padding: 0 16px` – Adds 16px left/right inner spacing and no top/bottom padding.

**Telugu:** Page content చాలా వెడల్పుగా కాకుండా మధ్యలో ఉండేలా ఈ rules సహాయపడతాయి.

---

## 12. Header Design

Original CSS:

```css
header {
    text-align: center;
    padding: 40px 24px 28px;
    background-color: var(--card);
    border: 1px solid var(--border);
    border-radius: 25px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}
```

| Property | Explanation |
|---|---|
| `text-align: center` | Aligns inline content and text to the centre |
| `padding` | Adds space inside the header |
| `background-color` | Sets the header background |
| `border` | Adds a border |
| `border-radius` | Rounds the corners |
| `box-shadow` | Adds a shadow around the box |

### Understanding `rgba()`

`rgba(red, green, blue, alpha)` defines a colour with transparency.

```css
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
```

- `0` – Horizontal shadow offset.
- `20px` – Vertical shadow offset.
- `50px` – Blur radius.
- `0.5` – 50% opacity.

### Header main heading

```css
header h1 {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 4px;
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

- `header h1` – Selects an `h1` inside the header.
- `font-size` – Sets heading size.
- `font-weight` – Sets text thickness.
- `margin-bottom` – Adds space below the heading.
- `background` – Applies the gradient.
- `background-clip: text` – Clips the background to the text shape.
- `-webkit-text-fill-color: transparent` – Makes the text fill transparent so the gradient can show through in supporting browsers.

**Code correction:** The original stylesheet used `-webkit-text-fill-color: text`. `text` is not a valid colour value here. Use `transparent` for the intended gradient text effect.

### Header subtitle

```css
header h2 {
    font-size: 20px;
    font-weight: 500;
    color: var(--cyan);
}
```

Styles the subtitle inside the header.

### Quote

```css
q {
    color: var(--muted);
    font-style: italic;
    quotes: none;
}
```

- `font-style: italic` – Makes text italic.
- `quotes: none` – Disables automatically generated quotation marks.

### Profile image

```css
header img {
    border-radius: 50%;
    border: 3px solid var(--violet);
    object-fit: cover;
    margin: 18px 0;
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
}
```

- `border-radius: 50%` – Makes a square image circular.
- `border` – Adds a violet outline.
- `object-fit: cover` – Fills the image box while preserving its aspect ratio; some cropping may occur.
- `margin` – Adds outside spacing.
- `box-shadow` – Adds a violet glow.

### Address

```css
address {
    font-style: normal;
    color: var(--text);
}
```

Removes the default italic styling and sets the text colour.

---

## 13. Navigation Menu – Flexbox

Original CSS:

```css
nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    list-style: none;
    margin: 24px 0 0;
    padding: 20px 0 0;
    border-top: 1px solid var(--border);
}
```

| Property | Explanation |
|---|---|
| `display: flex` | Creates a flex layout |
| `flex-wrap: wrap` | Allows items to move onto another line |
| `justify-content: center` | Centres items along the main axis |
| `gap` | Adds space between flex items |
| `list-style: none` | Removes list markers |
| `margin` | Adds outside spacing |
| `padding` | Adds inside spacing |
| `border-top` | Adds a top border |

**Telugu:** Navigation links ని ఒక row లో arrange చేయడానికి Flexbox ఉపయోగిస్తున్నాం. Space సరిపోకపోతే `flex-wrap` వల్ల next line కి వెళ్తాయి.

### Navigation links

```css
nav a {
    display: block;
    padding: 8px 18px;
    color: var(--text);
    background-color: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border);
    border-radius: 10px;
    transition: all 0.25s ease;
}
```

- `display: block` – Makes the link behave as a block-level box.
- `padding` – Adds inner spacing.
- `transition` – Makes supported property changes happen smoothly over 0.25 seconds.

### Navigation hover

```css
nav a:hover {
    background-color: var(--bg);
    border-color: var(--violet);
    text-decoration: none;
    transform: translateY(-3px);
}
```

- `transform` – Changes an element's visual position or shape.
- `translateY(-3px)` – Moves the link upward by 3px.
- `border-color` – Changes the border colour.

---

## 14. CSS Box Model

Every element is represented by a rectangular box.

The four parts are:

1. **Content** – Text, image, or other actual content.
2. **Padding** – Space between content and border.
3. **Border** – Line around the padding and content.
4. **Margin** – Space outside the border.

```text
+-----------------------------+
|           MARGIN            |
|  +-----------------------+  |
|  |        BORDER         |  |
|  |  +-----------------+  |  |
|  |  |     PADDING     |  |  |
|  |  |  +-----------+  |  |  |
|  |  |  |  CONTENT  |  |  |  |
|  |  |  +-----------+  |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
```

**Telugu example:** Gift box అనుకోండి.

- Content – Gift.
- Padding – Gift చుట్టూ లోపలి space.
- Border – Box అంచు.
- Margin – ఇతర boxes కి మధ్య gap.

---

## 15. Section Cards and Hover

Original CSS:

```css
section {
    background-color: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-bottom: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    transition: border-color 0.3s ease;
}

section:hover {
    border-color: var(--violet);
}
```

Each section gets a card-like appearance.

- `background-color` – Card background.
- `border` – Card outline.
- `border-radius` – Rounded corners.
- `padding` – Inner space.
- `margin-bottom` – Space below each section.
- `box-shadow` – Shadow behind the card.
- `transition` – Smooth border colour change.
- `section:hover` – Changes the border when the pointer is over the section.

### Section heading

```css
section > h2 {
    display: inline-block;
    font-size: 26px;
    padding-bottom: 6px;
    margin-bottom: 18px;
    border-bottom: 3px solid var(--cyan);
    border-image: var(--gradient) 1;
}
```

- `>` – Direct-child combinator; selects an `h2` that is a direct child of a section.
- `inline-block` – Behaves inline while allowing box dimensions and spacing.
- `border-bottom` – Adds a bottom border.
- `border-image` – Uses an image or gradient as the border source.

### Horizontal rule

```css
hr {
    display: none;
}
```

`display: none` removes the element from the page layout.

---

## 16. Text Effects

Original CSS:

```css
strong {
    color: #ffffff;
}

em {
    color: #06afec;
    font-style: normal;
}

mark {
    background-color: rgba(10, 229, 237, 0.45);
    color: #ffffff;
    padding: 2px 8px;
    border-radius: 6px;
}

small {
    color: var(--muted);
}

time {
    color: var(--cyan);
}
```

| Selector | Purpose |
|---|---|
| `strong` | Styles important text |
| `em` | Styles emphasized text |
| `mark` | Styles highlighted text |
| `small` | Styles supplementary small text |
| `time` | Styles date/time content |

### Abbreviation

```css
abbr[title] {
    text-decoration: underline dotted var(--violet);
    cursor: help;
}
```

- `abbr[title]` – Attribute selector; selects abbreviation elements that have a `title` attribute.
- `underline dotted` – Creates a dotted underline.
- `cursor: help` – Displays a help cursor.

---

## 17. Project Cards

Original CSS:

```css
article {
    background-color: var(--bg);
    border: 1px solid var(--border);
    border-left: 4px solid var(--violet);
    border-radius: 12px;
    padding: 22px;
    margin-bottom: 18px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

- `article` – Styles each independent project content block.
- `border-left` – Adds a thicker violet line on the left.
- `transition` – Smoothly animates transform and shadow changes.

### Project hover

```css
article:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 40px rgba(139, 92, 246, 0.25);
}
```

Moves the project card upward by 5px and adds a violet shadow on hover.

### Project heading and list

```css
article h3 {
    color: #ffffff;
    font-size: 20px;
}

article li {
    margin-bottom: 6px;
}
```

Styles project headings and adds spacing below list items.

---

## 18. Expandable Details and Code Blocks

### Details and summary

```css
details {
    margin-top: 16px;
    padding: 10px 16px;
    border: 1px dashed var(--border);
    border-radius: 10px;
}

summary {
    cursor: pointer;
    color: var(--cyan);
    font-weight: 600;
}
```

- `details` – Styles the expandable content container.
- `summary` – Styles its visible heading.
- `cursor: pointer` – Shows a hand cursor.
- `border: 1px dashed` – Creates a dashed border.

**Note:** HTML `<details>` and `<summary>` provide the expand/collapse behaviour. CSS only styles their appearance.

### Preformatted code

```css
pre {
    margin: 12px 0 0;
    padding: 16px;
    overflow-x: auto;
    background-color: #000000;
    border-radius: 10px;
}

code {
    font-family: Consolas, "Courier New", monospace;
    color: #7eee78;
}
```

- `pre` – Styles preformatted text blocks.
- `overflow-x: auto` – Allows horizontal scrolling if content is too wide.
- `code` – Styles code text.
- `monospace` – Uses a fixed-width font.

**Code correction:** The original stylesheet contained `#7eee787`, which is not a valid 3-, 4-, 6-, or 8-digit hexadecimal colour. This README uses `#7eee78` as a valid six-digit example.

---

## 19. Skills and Description Lists

Original CSS:

```css
dt {
    margin-top: 14px;
    color: var(--cyan);
    font-weight: 700;
}

dd {
    margin-left: 0;
    color: var(--text);
}
```

- `dt` – Styles a term in a description list.
- `dd` – Styles the description of that term.
- `margin-left: 0` – Removes the browser's default left indentation.

---

## 20. Ordered Lists as Pills

Original CSS:

```css
ol {
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
}

ol li {
    padding: 4px 18px;
    border: 1px solid var(--violet);
    border-radius: 999px;
    background-color: rgba(139, 92, 246, 0.12);
}
```

- `ol` – Selects ordered lists.
- `display: flex` – Places list items in a flex layout.
- `gap` – Adds space between items.
- `list-style: none` – Removes numbering markers.
- `border-radius: 999px` – Creates pill-shaped corners.
- `background-color` – Adds a light violet background.

---

## 21. Education Table

### Table

```css
table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
}
```

- `width: 100%` – Uses the available width.
- `border-collapse: collapse` – Combines adjacent table borders.
- `border: 0` – Removes the table's own border.

### Table cells

```css
th, td {
    padding: 12px;
    text-align: left;
    border: 0;
    border-bottom: 1px solid var(--border);
}
```

- `th` – Table header cell.
- `td` – Table data cell.
- `padding` – Adds space inside cells.
- `text-align` – Aligns text.
- `border-bottom` – Adds a line below cells.

### Table headings

```css
th {
    color: var(--cyan);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

- `text-transform: uppercase` – Displays letters in uppercase.
- `letter-spacing` – Controls space between characters.

### Row hover

Intended row-hover rule:

```css
tbody tr:hover {
    background-color: rgba(3, 3, 3, 0.934);
}
```

**Code correction:** The original selector was `tbody tr :hover`, with a space before `:hover`. That selects hovered descendants inside a row. `tbody tr:hover` selects the row itself.

### Caption and table footer

```css
caption {
    text-align: left;
    color: var(--muted);
    padding-bottom: 10px;
}

tfoot td {
    text-align: center;
    color: #34d399;
}
```

- `caption` – Styles the table caption.
- `tfoot td` – Styles data cells inside the table footer.

### Meter

```css
meter {
    width: 220px;
    height: 14px;
    vertical-align: middle;
}
```

- `width` – Sets meter width.
- `height` – Sets meter height.
- `vertical-align: middle` – Aligns the meter vertically with surrounding inline content.

---

## 22. Contact Form Styling

### Fieldset

```css
fieldset {
    margin-bottom: 18px;
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 12px;
}
```

`fieldset` groups related form controls.

### Legend

```css
legend {
    padding: 0 10px;
    color: #c4b5fd;
    font-weight: 600;
}
```

`legend` styles the title of a fieldset.

### Label

```css
label {
    color: var(--muted);
    font-weight: 600;
}
```

Styles form labels.

### Input fields and dropdowns

```css
input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
    width: 100%;
    padding: 11px 14px;
    font-family: inherit;
    font-size: 15px;
    color: var(--text);
    background-color: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    transition: all 0.2s ease;
}
```

| Selector | Purpose |
|---|---|
| `input[type="text"]` | Text input |
| `input[type="email"]` | Email input |
| `input[type="tel"]` | Telephone input |
| `select` | Dropdown |
| `textarea` | Multi-line text input |

- `width: 100%` – Uses the full available width.
- `font-family: inherit` – Uses the inherited font.
- `transition` – Smoothly changes supported styles.

### Focus effect

```css
input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: var(--cyan);
    box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.15);
}
```

`:focus` applies when an input or control receives keyboard focus or is activated.

- `outline: none` – Removes the browser's default outline.
- `border-color` – Changes the border to cyan.
- `box-shadow` – Adds a soft cyan ring.

**Accessibility note:** If the default outline is removed, provide a clear visible focus indicator. The cyan border and shadow in this rule serve that purpose.

---

## 23. Buttons

### Normal button

```css
button {
    padding: 12px 26px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    background-color: transparent;
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
}
```

- `background-color: transparent` – Makes the background transparent.
- `cursor: pointer` – Shows a hand cursor.
- `transition` – Smooths supported style changes.

### Button hover

```css
button:hover {
    transform: translateY(-2px);
}
```

Moves the button upward by 2px when hovered.

### Submit button

```css
button[type="submit"] {
    color: #ffffff;
    background: var(--gradient);
    border: none;
}

button[type="submit"]:hover {
    box-shadow: 0 10px 25px rgba(34, 211, 238, 0.35);
}
```

Gives submit buttons a gradient background and a cyan shadow on hover.

---

## 24. Aside and Footer

### Aside

```css
aside {
    padding: 22px 26px;
    background-color: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
}

aside h3 {
    color: #c4b5fd;
}
```

Styles supplementary content and its heading.

### Aside list

```css
aside ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 24px;
    margin: 0;
    padding: 0;
    list-style: none;
}
```

- `gap: 8px 24px` – Uses 8px row gap and 24px column gap.
- `flex-wrap: wrap` – Allows list items to wrap.
- `list-style: none` – Removes bullets.

### Footer

```css
footer {
    text-align: center;
    padding-bottom: 40px;
    color: var(--muted);
    font-size: 14px;
}
```

Styles the bottom section of the webpage.

---

## 25. Responsive Design – Media Queries

Original CSS:

```css
@media (max-width: 600px) {
    header h1 {
        font-size: 34px;
    }

    section {
        padding: 18px;
    }

    meter {
        width: 140px;
    }

    table {
        display: block;
        overflow-x: auto;
    }
}
```

`@media` applies CSS rules when the specified media conditions match.

- `max-width: 600px` – Applies these rules when the viewport is 600px wide or narrower.
- `header h1` – Reduces the heading size.
- `section` – Reduces card padding.
- `meter` – Reduces meter width.
- `table` – Allows horizontal scrolling when the table is wider than its available space.

**Telugu:** Desktop screen పెద్దగా ఉంటుంది; mobile screen చిన్నగా ఉంటుంది. Screen size కి తగ్గట్టు design adjust చేయడానికి media queries ఉపయోగిస్తాం.

---

## 26. Important CSS Selectors Summary

| Selector | Meaning |
|---|---|
| `*` | Universal selector; all elements |
| `body` | Body element |
| `h1` | All h1 headings |
| `header h1` | h1 inside header |
| `nav ul` | ul inside nav |
| `nav a:hover` | Hovered links inside nav |
| `section > h2` | Direct-child h2 inside section |
| `input[type="email"]` | Email input |
| `abbr[title]` | Abbreviation with title attribute |
| `::selection` | Selected text |
| `:focus` | Focused control |
| `:hover` | Element under the pointer |

---

## 27. Important CSS Properties Summary

| Property | Purpose |
|---|---|
| `color` | Text colour |
| `background-color` | Background colour |
| `background-image` | Background image or gradient |
| `font-family` | Font family |
| `font-size` | Text size |
| `font-weight` | Text thickness |
| `font-style` | Normal or italic text |
| `line-height` | Line spacing |
| `text-align` | Text alignment |
| `text-decoration` | Underline and other text decoration |
| `text-transform` | Uppercase/lowercase transformation |
| `letter-spacing` | Space between characters |
| `margin` | Outside spacing |
| `padding` | Inside spacing |
| `border` | Border around an element |
| `border-radius` | Rounded corners |
| `box-shadow` | Shadow effect |
| `box-sizing` | Box size calculation |
| `width` | Element width |
| `max-width` | Maximum element width |
| `display` | Display and layout behaviour |
| `flex-wrap` | Flex item wrapping |
| `justify-content` | Alignment along flex main axis |
| `gap` | Space between layout items |
| `list-style` | List marker style |
| `overflow-x` | Horizontal overflow behaviour |
| `object-fit` | How replaced content fits its box |
| `cursor` | Mouse pointer appearance |
| `transition` | Smooth property changes |
| `transform` | Visual movement or transformation |
| `vertical-align` | Inline-level vertical alignment |

---

## 28. CSS Units Used in This Project

| Unit | Meaning | Example |
|---|---|---|
| `px` | Pixels | `font-size: 16px;` |
| `%` | Percentage | `width: 100%;` |
| `rem` | Relative to root font size | `padding: 1rem;` |
| `deg` | Degrees for angles | `90deg` |
| Unitless number | Depends on property | `line-height: 1.7;` |

---

## 29. How to Run the Portfolio

1. Open Visual Studio Code.
2. Open the portfolio project folder.
3. Confirm that `index.html` and `style.css` are in the correct locations.
4. Confirm that the HTML `<head>` contains:

   ```html
   <link rel="stylesheet" href="style.css">
   ```

5. Open `index.html`.
6. Right-click and choose **Open with Live Server**, if the extension is installed.
7. Otherwise, open `index.html` in a web browser.
8. Edit `style.css`, save with `Ctrl + S`, and check the browser.

---

## 30. Beginner Practice Exercises

Try these changes yourself in `style.css`.

1. Change the page background colour using `--bg`.
2. Change the main text colour using `--text`.
3. Change the main heading size from `48px` to `56px`.
4. Change the header corner radius from `25px` to `15px`.
5. Change section padding from `28px` to `20px`.
6. Change navigation hover movement from `-3px` to `-5px`.
7. Change the project card left border from `4px` to `6px`.
8. Change the button border radius from `10px` to `20px`.
9. Change the mobile breakpoint from `600px` to `768px`.
10. Add a new CSS rule for paragraph text.

### Sample exercise

Task: Make all paragraph text cyan.

```css
p {
    color: var(--cyan);
}
```

Try changing `--cyan` to `--muted` and observe the result.

---

## 31. Learning Outcomes

After studying this stylesheet, I should understand:

- CSS syntax and declarations
- CSS comments
- Google Fonts
- CSS variables and `var()`
- Universal and element selectors
- Class, attribute, descendant, and child selector concepts
- Colours and gradients
- Font properties
- Margin, padding, and the Box Model
- Borders and shadows
- Flexbox basics
- Hover and focus states
- Transitions and transforms
- Styling images, cards, lists, and tables
- Styling form fields and buttons
- Responsive design and media queries
- How to connect CSS to HTML
- How to test CSS changes in a browser

---

## 32. Author

**Syed Mufeez**

B.Tech – Computer Science (Artificial Intelligence and Data Science)

---

## 33. License

This project is created for educational and learning purposes.


---

# Part 3: JavaScript

HTML = structure, CSS = design, **JavaScript = behaviour**. In this portfolio JavaScript has one job: send the contact form **directly to my email without redirecting** to the email app.

## 1. The Big Idea

A browser cannot send email by itself (it has no mail server). So the flow is:

```text
Visitor clicks "Send Message"
        ↓
script.js stops the normal submit (no page reload)
        ↓
script.js collects the form values
        ↓
fetch() sends them to Web3Forms (free mail service)
        ↓
Web3Forms emails the message to me
        ↓
script.js shows "Thank you!" or an error on the page
```

## 2. Setup (one time)

1. Go to https://web3forms.com and enter your email.
2. Create a form (name: `Portfolio Contact Form`, domain: `localhost` while testing).
3. Copy the **access key** you receive.
4. In `script.js`, replace `PASTE_YOUR_ACCESS_KEY_HERE` with your key.
5. Open the site with **Live Server**, send a test message, and check your inbox **and spam folder**.
6. After publishing, change the form's domain in Web3Forms settings to your real site address.

> The access key is safe in front-end code because it can only send mail to your own email.

## 3. How the HTML Connects to JavaScript

| In `index.html` | Used by `script.js` for |
|---|---|
| `<form id="contact-form">` | Finding the form |
| `<p id="form-status">` | Showing success / error messages |
| `name="..."` on every input | `FormData` reads fields by their `name` |
| `<input name="botcheck" style="display:none">` | Hidden spam trap for bots |
| `<script src="script.js"></script>` (bottom of body) | Loading the JavaScript |

The script tag is at the **bottom** so the form exists before JavaScript looks for it.

## 4. JavaScript Concepts Used

### 4.1 Variables: `const`

```js
const ACCESS_KEY = "abc123";
```

`const` stores a value that will not be reassigned. Use `let` if the value will change.

### 4.2 Finding elements: `document.getElementById`

```js
const form = document.getElementById("contact-form");
```

Finds the HTML element with that `id` so JavaScript can control it. `form.querySelector('button[type="submit"]')` finds an element using a CSS-style selector.

### 4.3 Functions

```js
function showStatus(message, type) {
    statusBox.textContent = message;
    statusBox.className = type;
}
```

A reusable block of code. `message` and `type` are parameters. `textContent` changes the visible text; `className` sets the CSS class (`success` = green, `error` = red).

### 4.4 Events: `addEventListener`

```js
form.addEventListener("submit", function (event) { ... });
```

"When the form is submitted, run this function." `event` holds details about what happened.

### 4.5 `event.preventDefault()`

Stops the browser's default action (reloading the page). Without it, the page would refresh and the message would never be sent by JavaScript.

### 4.6 `FormData` and objects

```js
const data = Object.fromEntries(new FormData(form));
// { name: "Ravi", email: "ravi@x.com", message: "Hi" }
```

`FormData` reads all fields that have a `name`. `Object.fromEntries` turns them into a JavaScript object. You can then add extra properties: `data.access_key = ACCESS_KEY;`

### 4.7 `if / else`

```js
if (response.ok && result.success) { ... } else { ... }
```

Runs different code depending on a condition. `&&` means AND.

### 4.8 `fetch`, `async` and `await`

```js
const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
});
```

- `fetch` sends a request over the internet.
- `POST` means "I am sending data".
- `headers` describe the data (`application/json` = JSON text).
- `JSON.stringify` turns a JS object into JSON text; `response.json()` turns JSON text back into an object.
- `await` waits for the reply **without freezing the page**. It works only inside an `async` function.

### 4.9 `try / catch / finally`

```js
try      { /* normal path */ }
catch    { /* runs if something fails, e.g. no internet */ }
finally  { /* always runs: put the button back to normal */ }
```

### 4.10 Button feedback

```js
submitBtn.disabled = true;           // stop double-clicks
submitBtn.textContent = "Sending...";
```

Always tell the user something is happening.

## 5. Debugging Tips

1. Press **F12** and open the **Console** tab to see errors in red.
2. Add `console.log(data);` to see what is being sent.
3. Open the **Network** tab, send the form, and click the `submit` request to see the server's reply.
4. Common problems:

| Problem | Likely cause |
|---|---|
| "Add your access key" message | Key not pasted in `script.js` |
| Nothing happens, console error `null` | `id` in HTML does not match `script.js` |
| Network error | No internet, or ad-blocker blocking the request |
| No email arrives | Check spam; check the domain in Web3Forms settings |
| Page reloads on submit | `script.js` not loaded or has an error |

## 6. Practice Exercises

1. Change the success message text.
2. Change the button text from "Sending..." to "Please wait...".
3. Add `console.log(data)` and look at it in the Console.
4. Add a character counter under the message box.
5. Before sending, check the message has at least 10 characters and show an error if not.
6. Hide the form after a successful send and show a big "Thank you" message.
7. Add a "phone" validation: only digits, 10 characters.

## 7. Files and Their Jobs

| File | Language | Job |
|---|---|---|
| `index.html` | HTML | Content and structure |
| `style.css` | CSS | Colours, layout, responsiveness |
| `script.js` | JavaScript | Sends the contact form |

## 8. Learning Outcomes (JavaScript)

- Variables, functions, conditions
- Selecting and changing HTML elements (DOM)
- Events and `preventDefault`
- Objects and JSON
- `fetch`, `async`, `await`
- Error handling with `try / catch / finally`
- Debugging with the browser Console and Network tab

## 9. Publishing Later

Free options: **GitHub Pages**, **Netlify**, **Vercel**. Upload all files (`index.html`, `style.css`, `script.js`, `images.jpg`). After you get your site link, update the domain in Web3Forms.

## 10. Author

**Syed Mufeez**

B.Tech – Computer Science (Artificial Intelligence and Data Science)

## 11. License

This project is created for educational and learning purposes.