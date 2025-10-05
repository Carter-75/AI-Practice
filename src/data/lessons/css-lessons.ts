import type { Lesson } from '../curriculum';

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'Introduction to CSS',
    description: 'Learn what CSS is and how it styles web pages.',
    difficulty: 'beginner',
    estimatedTime: 30,
    content: `
# Introduction to CSS

CSS (Cascading Style Sheets) is the language used to style HTML documents. While HTML provides structure and content, CSS controls the presentation, layout, and visual appearance.

## What CSS Does
- Controls colors, fonts, and text styling
- Manages layout and positioning
- Handles responsive design for different screen sizes
- Creates animations and transitions
- Controls spacing, borders, and backgrounds

## CSS Syntax
CSS uses selectors to target HTML elements and applies styles using properties and values.

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

## The Three Ways to Add CSS
1. **Inline CSS**: Directly in HTML elements (not recommended)
2. **Internal CSS**: In the \`<style>\` tag within the HTML document
3. **External CSS**: In separate .css files (recommended)

## Why CSS Matters
- Separates content from presentation
- Enables consistent styling across multiple pages
- Makes websites responsive and accessible
- Improves user experience through better design
- Reduces code duplication

## CSS Box Model Preview
Every HTML element is a box with:
- Content
- Padding
- Border
- Margin
    `,
    codeExample: `/* CSS Syntax */
selector {
    property: value;
}

/* Example: Styling a heading */
h1 {
    color: #333;
    font-size: 2em;
    text-align: center;
}

/* Example: Styling a paragraph */
p {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #666;
}

/* Example: Styling a class */
.highlight {
    background-color: yellow;
    padding: 10px;
}

/* Example: Styling an ID */
#header {
    background-color: #f0f0f0;
    border-bottom: 2px solid #333;
}`,
    language: 'css',
    exercises: [
      {
        id: 'css-1-ex1',
        title: 'Your First CSS Styles',
        description: 'Add basic styles to an HTML document.',
        starterCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Add your CSS here */
    </style>
</head>
<body>
    <h1>Welcome to CSS</h1>
    <p class="intro">This paragraph needs some styling!</p>
    <p>This is another paragraph.</p>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Style the heading */
        h1 {
            color: #2c5aa0;
            text-align: center;
            font-family: 'Arial', sans-serif;
        }
        
        /* Style the intro paragraph */
        .intro {
            color: #333;
            font-size: 18px;
            font-weight: bold;
            background-color: #f0f0f0;
            padding: 10px;
        }
        
        /* Style all paragraphs */
        p {
            color: #666;
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Welcome to CSS</h1>
    <p class="intro">This paragraph needs some styling!</p>
    <p>This is another paragraph.</p>
</body>
</html>`,
        language: 'html'
      }
    ]
  },
  {
    id: 'css-2',
    title: 'CSS Selectors - Basic',
    description: 'Master element, class, ID, and attribute selectors.',
    difficulty: 'beginner',
    estimatedTime: 40,
    content: `
# CSS Selectors - Basic

Selectors are patterns used to select the HTML elements you want to style.

## Element Selectors
Target all elements of a specific type:
\`\`\`css
p { color: blue; }
h1 { font-size: 2em; }
\`\`\`

## Class Selectors
Target elements with a specific class attribute:
\`\`\`css
.classname { color: red; }
.error { background: pink; }
\`\`\`

In HTML: \`<p class="error">Error message</p>\`

## ID Selectors
Target a unique element with a specific ID:
\`\`\`css
#header { background: gray; }
#main-content { padding: 20px; }
\`\`\`

In HTML: \`<div id="header">Header</div>\`

## Universal Selector
Targets all elements:
\`\`\`css
* { margin: 0; padding: 0; }
\`\`\`

## Grouping Selectors
Apply the same styles to multiple selectors:
\`\`\`css
h1, h2, h3 { font-family: Arial; }
\`\`\`

## Descendant Selector
Target elements inside other elements:
\`\`\`css
div p { color: blue; } /* All p inside div */
\`\`\`

## Child Selector
Target direct children only:
\`\`\`css
div > p { color: blue; } /* Direct p children of div */
\`\`\`

## Attribute Selectors
Target elements based on attributes:
\`\`\`css
[type="text"] { border: 1px solid gray; }
a[target="_blank"] { color: red; }
\`\`\`

## Selector Specificity
More specific selectors override less specific ones:
1. Inline styles (highest)
2. IDs
3. Classes, attributes, pseudo-classes
4. Elements (lowest)
    `,
    codeExample: `/* Element selector */
p {
    color: #333;
    font-size: 16px;
}

/* Class selector */
.highlight {
    background-color: yellow;
    padding: 5px;
}

/* ID selector */
#header {
    background-color: #f0f0f0;
    padding: 20px;
}

/* Multiple selectors */
h1, h2, h3 {
    font-family: 'Georgia', serif;
    color: #2c3e50;
}

/* Descendant selector */
nav a {
    text-decoration: none;
    color: white;
}

/* Child selector */
ul > li {
    list-style: square;
}

/* Attribute selector */
input[type="text"] {
    border: 1px solid #ccc;
    padding: 8px;
}

/* Attribute contains */
a[href*="example"] {
    color: orange;
}`,
    language: 'css',
    exercises: [
      {
        id: 'css-2-ex1',
        title: 'Practice CSS Selectors',
        description: 'Use different selectors to style various elements.',
        starterCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Add your CSS selectors here */
    </style>
</head>
<body>
    <header id="main-header">
        <h1>My Website</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="https://external.com" target="_blank">External</a>
        </nav>
    </header>
    
    <main>
        <article class="post">
            <h2>Article Title</h2>
            <p class="intro">Introduction paragraph</p>
            <p>Regular paragraph</p>
        </article>
        
        <ul>
            <li>Item 1</li>
            <li class="highlight">Item 2</li>
            <li>Item 3</li>
        </ul>
    </main>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* ID selector for header */
        #main-header {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        /* Element selector */
        h1 {
            margin: 0;
            font-size: 2.5em;
        }
        
        /* Descendant selector for nav links */
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
        }
        
        /* Attribute selector for external links */
        a[target="_blank"] {
            color: #3498db;
        }
        
        /* Class selector */
        .post {
            background: #f9f9f9;
            padding: 20px;
            margin: 20px 0;
        }
        
        .intro {
            font-weight: bold;
            font-size: 1.2em;
            color: #2c3e50;
        }
        
        /* Child selector */
        ul > li {
            padding: 5px;
            list-style-type: square;
        }
        
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <header id="main-header">
        <h1>My Website</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="https://external.com" target="_blank">External</a>
        </nav>
    </header>
    
    <main>
        <article class="post">
            <h2>Article Title</h2>
            <p class="intro">Introduction paragraph</p>
            <p>Regular paragraph</p>
        </article>
        
        <ul>
            <li>Item 1</li>
            <li class="highlight">Item 2</li>
            <li>Item 3</li>
        </ul>
    </main>
</body>
</html>`,
        language: 'html',
        hints: [
          'Use # for ID selectors',
          'Use . for class selectors',
          'Use element names directly for element selectors',
          'Use descendant selectors (space) to target nested elements',
          'Use attribute selectors with [attribute="value"]'
        ]
      }
    ]
  },
  {
    id: 'css-3',
    title: 'CSS Selectors - Advanced',
    description: 'Master pseudo-classes, pseudo-elements, and complex selectors.',
    difficulty: 'beginner',
    estimatedTime: 45,
    content: `
# CSS Selectors - Advanced

Advanced selectors provide powerful ways to target specific elements.

## Pseudo-Classes
Style elements based on their state:

### Link and Interaction States
\`\`\`css
a:link { color: blue; }        /* Unvisited link */
a:visited { color: purple; }   /* Visited link */
a:hover { color: red; }        /* Mouse over */
a:active { color: orange; }    /* Being clicked */
a:focus { outline: 2px solid; } /* Has focus */
\`\`\`

### Structural Pseudo-Classes
\`\`\`css
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(2) { color: red; }
li:nth-child(odd) { background: #f0f0f0; }
li:nth-child(even) { background: white; }
li:nth-child(3n) { color: blue; } /* Every 3rd */
p:only-child { margin: 0; }
\`\`\`

### Type-based Pseudo-Classes
\`\`\`css
p:first-of-type { font-size: 1.2em; }
p:last-of-type { margin-bottom: 0; }
p:nth-of-type(2) { color: blue; }
\`\`\`

### Form Pseudo-Classes
\`\`\`css
input:enabled { border: 1px solid green; }
input:disabled { background: #ccc; }
input:checked { outline: 2px solid blue; }
input:required { border-color: red; }
input:optional { border-color: gray; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
\`\`\`

### Other Useful Pseudo-Classes
\`\`\`css
:empty { display: none; } /* Empty elements */
:not(.special) { color: gray; } /* Negation */
:target { background: yellow; } /* URL target */
\`\`\`

## Pseudo-Elements
Style specific parts of elements:

### ::before and ::after
Insert content before or after elements:
\`\`\`css
p::before {
    content: "→ ";
    color: blue;
}

p::after {
    content: " ←";
    color: red;
}
\`\`\`

### Text Pseudo-Elements
\`\`\`css
p::first-line { font-weight: bold; }
p::first-letter { 
    font-size: 2em;
    float: left;
}
::selection { 
    background: yellow;
    color: black;
}
\`\`\`

## Combinator Selectors

### Adjacent Sibling (+)
Selects element immediately after another:
\`\`\`css
h2 + p { font-weight: bold; }
\`\`\`

### General Sibling (~)
Selects all siblings after an element:
\`\`\`css
h2 ~ p { color: gray; }
\`\`\`

## Complex Selector Examples
\`\`\`css
/* First paragraph after h2 */
h2 + p:first-of-type { font-size: 1.2em; }

/* All links in nav that are not active */
nav a:not(.active) { opacity: 0.7; }

/* Every odd row in table body */
tbody tr:nth-child(odd) { background: #f9f9f9; }
\`\`\`
    `,
    codeExample: `/* Pseudo-classes for links */
a:link { color: #0066cc; }
a:visited { color: #551a8b; }
a:hover { 
    color: #ff6600;
    text-decoration: underline;
}

/* Structural pseudo-classes */
li:first-child {
    font-weight: bold;
}

li:nth-child(even) {
    background-color: #f0f0f0;
}

/* Pseudo-elements */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
    color: #c00;
}

p::before {
    content: "📝 ";
}

/* Form pseudo-classes */
input:focus {
    border: 2px solid #0066cc;
    outline: none;
}

input:valid {
    border-color: green;
}

input:invalid {
    border-color: red;
}

/* Negation pseudo-class */
li:not(.special) {
    color: #666;
}

/* Adjacent sibling combinator */
h2 + p {
    font-weight: bold;
    color: #333;
}

/* General sibling combinator */
h2 ~ p {
    line-height: 1.6;
}

/* Selection pseudo-element */
::selection {
    background: #ffff00;
    color: #000;
}`,
    language: 'css'
  },
  {
    id: 'css-4',
    title: 'CSS Box Model',
    description: 'Understand the box model: content, padding, border, and margin.',
    difficulty: 'beginner',
    estimatedTime: 50,
    content: `
# CSS Box Model

Every HTML element is a rectangular box. The box model describes how these boxes are sized and spaced.

## Box Model Components

### 1. Content
The actual content of the element (text, images, etc.)
\`\`\`css
width: 300px;
height: 200px;
\`\`\`

### 2. Padding
Space between content and border (inside the element)
\`\`\`css
padding: 20px;              /* All sides */
padding: 10px 20px;         /* Top/bottom, left/right */
padding: 10px 20px 15px 25px; /* Top, right, bottom, left */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 25px;
\`\`\`

### 3. Border
Line around the element
\`\`\`css
border: 1px solid black;    /* width style color */
border-width: 2px;
border-style: solid;        /* solid, dashed, dotted, double */
border-color: #333;
border-radius: 5px;         /* Rounded corners */
\`\`\`

### 4. Margin
Space outside the border (between elements)
\`\`\`css
margin: 20px;               /* All sides */
margin: 10px 20px;          /* Top/bottom, left/right */
margin: auto;               /* Center horizontally */
margin-top: 10px;
\`\`\`

## Box-Sizing Property

### content-box (default)
Width and height apply to content only:
\`\`\`css
box-sizing: content-box;
width: 300px;
padding: 20px;
/* Total width: 300 + 20 + 20 = 340px */
\`\`\`

### border-box (recommended)
Width and height include padding and border:
\`\`\`css
box-sizing: border-box;
width: 300px;
padding: 20px;
/* Total width: 300px (includes padding) */
\`\`\`

Best practice: Apply to all elements:
\`\`\`css
* {
    box-sizing: border-box;
}
\`\`\`

## Margin Collapsing

Vertical margins between elements collapse:
\`\`\`css
.box1 { margin-bottom: 20px; }
.box2 { margin-top: 30px; }
/* Gap between boxes: 30px (not 50px) */
\`\`\`

## Display and Box Model

### Block Elements
- Take full width available
- Start on new line
- Respect all box model properties

### Inline Elements
- Only take up necessary width
- Don't start on new line
- Ignore width, height, top/bottom margins

### Inline-Block Elements
- Don't start on new line
- Respect all box model properties
\`\`\`css
display: inline-block;
\`\`\`

## Practical Tips

1. Use border-box for easier calculations
2. Use margin: auto to center block elements
3. Use padding for internal spacing
4. Use margin for external spacing
5. Remember vertical margin collapsing
    `,
    codeExample: `/* Reset for consistent box-sizing */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Box model example */
.box {
    /* Content dimensions */
    width: 300px;
    height: 200px;
    
    /* Padding (inside) */
    padding: 20px;
    
    /* Border */
    border: 2px solid #333;
    border-radius: 8px;
    
    /* Margin (outside) */
    margin: 20px auto;
    
    /* Background and content */
    background-color: #f0f0f0;
}

/* Different padding on each side */
.box-complex {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 15px;
    
    /* Or shorthand: */
    padding: 10px 20px 30px 15px;
}

/* Center a box */
.centered {
    width: 600px;
    margin: 0 auto;
}

/* Border variations */
.border-styles {
    border-top: 3px solid red;
    border-right: 2px dashed blue;
    border-bottom: 1px dotted green;
    border-left: 4px double purple;
}

/* Inline vs Block */
.block {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}

.inline-block {
    display: inline-block;
    width: 200px;
    padding: 10px;
    margin: 0 10px;
}`,
    language: 'css',
    exercises: [
      {
        id: 'css-4-ex1',
        title: 'Create Card Layout with Box Model',
        description: 'Design a card component using padding, border, and margin.',
        starterCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            box-sizing: border-box;
        }
        
        /* Style the card here */
        .card {
            /* Add your styles */
        }
    </style>
</head>
<body>
    <div class="card">
        <h3>Card Title</h3>
        <p>This is card content with proper spacing.</p>
        <button>Learn More</button>
    </div>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            background: #f5f5f5;
        }
        
        .card {
            /* Content width */
            width: 400px;
            max-width: 100%;
            
            /* Padding inside */
            padding: 30px;
            
            /* Border */
            border: 1px solid #ddd;
            border-radius: 12px;
            
            /* Margin outside */
            margin: 0 auto;
            
            /* Visual styling */
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .card h3 {
            margin-top: 0;
            margin-bottom: 15px;
            color: #333;
        }
        
        .card p {
            margin-bottom: 20px;
            line-height: 1.6;
            color: #666;
        }
        
        .card button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background: #0066cc;
            color: white;
            cursor: pointer;
        }
        
        .card button:hover {
            background: #0052a3;
        }
    </style>
</head>
<body>
    <div class="card">
        <h3>Card Title</h3>
        <p>This is card content with proper spacing using the box model properties.</p>
        <button>Learn More</button>
    </div>
</body>
</html>`,
        language: 'html',
        hints: [
          'Use width to set content size',
          'Use padding for space inside the card',
          'Use margin: auto to center the card',
          'Add border and border-radius for visual appeal',
          'Don\'t forget box-sizing: border-box'
        ]
      }
    ]
  },
  {
    id: 'css-5',
    title: 'CSS Typography and Fonts',
    description: 'Master text styling, web fonts, and typography best practices.',
    difficulty: 'beginner',
    estimatedTime: 45,
    content: `
# CSS Typography and Fonts

Typography is crucial for readability and design. CSS provides extensive control over text appearance.

## Font Properties

### font-family
Specifies the font to use:
\`\`\`css
font-family: Arial, Helvetica, sans-serif;
font-family: 'Times New Roman', serif;
font-family: 'Courier New', monospace;
\`\`\`

Font stack: List fonts in order of preference

### font-size
Sets the size of text:
\`\`\`css
font-size: 16px;      /* Pixels */
font-size: 1em;       /* Relative to parent */
font-size: 1rem;      /* Relative to root */
font-size: 100%;      /* Percentage */
font-size: larger;    /* Keyword */
\`\`\`

### font-weight
Controls text boldness:
\`\`\`css
font-weight: normal;  /* 400 */
font-weight: bold;    /* 700 */
font-weight: 100;     /* Thin to 900 Black */
\`\`\`

### font-style
Italic or normal text:
\`\`\`css
font-style: normal;
font-style: italic;
font-style: oblique;
\`\`\`

### font-variant
Small caps and other variants:
\`\`\`css
font-variant: small-caps;
\`\`\`

### font (shorthand)
\`\`\`css
font: italic bold 16px/1.5 Arial, sans-serif;
/*    style weight size/line-height family */
\`\`\`

## Text Properties

### color
Text color:
\`\`\`css
color: #333;
color: rgb(51, 51, 51);
color: rgba(51, 51, 51, 0.8);
color: hsl(0, 0%, 20%);
\`\`\`

### text-align
Horizontal alignment:
\`\`\`css
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
\`\`\`

### text-decoration
Underlines, overlines, etc.:
\`\`\`css
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
text-decoration: underline wavy red;
\`\`\`

### text-transform
Change case:
\`\`\`css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
\`\`\`

### text-indent
First line indentation:
\`\`\`css
text-indent: 20px;
text-indent: 2em;
\`\`\`

### line-height
Space between lines:
\`\`\`css
line-height: 1.5;    /* Recommended */
line-height: 24px;
line-height: 150%;
\`\`\`

### letter-spacing
Space between characters:
\`\`\`css
letter-spacing: 1px;
letter-spacing: 0.1em;
\`\`\`

### word-spacing
Space between words:
\`\`\`css
word-spacing: 5px;
\`\`\`

### text-shadow
Add shadows to text:
\`\`\`css
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
/*           x   y  blur color */
\`\`\`

## Web Fonts

### Google Fonts
\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
\`\`\`

\`\`\`css
body {
    font-family: 'Roboto', sans-serif;
}
\`\`\`

### @font-face
Custom fonts:
\`\`\`css
@font-face {
    font-family: 'MyCustomFont';
    src: url('font.woff2') format('woff2'),
         url('font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'MyCustomFont', sans-serif;
}
\`\`\`

## Typography Best Practices

1. **Font Size**: 16px minimum for body text
2. **Line Height**: 1.5-1.6 for body text
3. **Line Length**: 50-75 characters per line
4. **Font Pairing**: Max 2-3 fonts per site
5. **Hierarchy**: Use size and weight for importance
6. **Contrast**: Ensure readable contrast ratios
    `,
    codeExample: `/* Typography example */

/* Import web font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

/* Base typography */
body {
    font-family: 'Roboto', -apple-system, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

/* Headings */
h1, h2, h3 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
}

h1 {
    font-size: 2.5rem;
    color: #222;
}

h2 {
    font-size: 2rem;
    color: #333;
}

h3 {
    font-size: 1.5rem;
    color: #444;
}

/* Paragraph styling */
p {
    margin-bottom: 1em;
    max-width: 65ch; /* 65 characters wide */
}

/* Lead paragraph */
.lead {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.8;
    color: #666;
}

/* Links */
a {
    color: #0066cc;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Emphasis */
strong {
    font-weight: 700;
}

em {
    font-style: italic;
}

/* Quote styling */
blockquote {
    font-size: 1.25rem;
    font-style: italic;
    border-left: 4px solid #ddd;
    padding-left: 1em;
    margin: 2em 0;
    color: #666;
}

/* Code typography */
code {
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    background: #f5f5f5;
    padding: 2px 6px;
    border-radius: 3px;
}

/* Small text */
small {
    font-size: 0.875rem;
    color: #666;
}

/* Text utilities */
.text-center { text-align: center; }
.text-uppercase { text-transform: uppercase; }
.text-shadow { 
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1); 
}`,
    language: 'css'
  }
,
  {
    id: 'css-6',
    title: 'CSS Flexbox - Fundamentals',
    description: 'Master Flexbox for modern, flexible layouts.',
    difficulty: 'intermediate',
    estimatedTime: 60,
    content: `
# CSS Flexbox - Fundamentals

Flexbox (Flexible Box Layout) is a one-dimensional layout method for arranging items in rows or columns.

## Flex Container Properties

### display: flex
Activates flexbox:
\`\`\`css
.container {
    display: flex;
}
\`\`\`

### flex-direction
Direction of flex items:
\`\`\`css
flex-direction: row;         /* Default: left to right */
flex-direction: row-reverse; /* Right to left */
flex-direction: column;      /* Top to bottom */
flex-direction: column-reverse;
\`\`\`

### justify-content
Alignment along main axis:
\`\`\`css
justify-content: flex-start;   /* Default */
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
\`\`\`

### align-items
Alignment along cross axis:
\`\`\`css
align-items: stretch;      /* Default */
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
\`\`\`

### flex-wrap
Allow items to wrap:
\`\`\`css
flex-wrap: nowrap;    /* Default */
flex-wrap: wrap;
flex-wrap: wrap-reverse;
\`\`\`

### align-content
Align multiple rows:
\`\`\`css
align-content: stretch;
align-content: flex-start;
align-content: center;
align-content: space-between;
\`\`\`

### gap
Space between items:
\`\`\`css
gap: 20px;           /* Both row and column */
row-gap: 10px;
column-gap: 20px;
\`\`\`

## Flex Item Properties

### flex-grow
How much to grow:
\`\`\`css
flex-grow: 0;    /* Default: don't grow */
flex-grow: 1;    /* Grow equally */
flex-grow: 2;    /* Grow twice as much */
\`\`\`

### flex-shrink
How much to shrink:
\`\`\`css
flex-shrink: 1;    /* Default */
flex-shrink: 0;    /* Don't shrink */
\`\`\`

### flex-basis
Initial size:
\`\`\`css
flex-basis: auto;   /* Default */
flex-basis: 200px;
flex-basis: 50%;
\`\`\`

### flex (shorthand)
\`\`\`css
flex: 1;                    /* grow shrink basis */
flex: 0 1 auto;            /* Default */
flex: 1 1 200px;
\`\`\`

### align-self
Override align-items for one item:
\`\`\`css
align-self: auto;
align-self: flex-start;
align-self: center;
\`\`\`

### order
Change display order:
\`\`\`css
order: 0;      /* Default */
order: -1;     /* Display first */
order: 1;      /* Display last */
\`\`\`

## Common Patterns

### Center everything:
\`\`\`css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
\`\`\`

### Equal columns:
\`\`\`css
.container {
    display: flex;
}
.item {
    flex: 1;
}
\`\`\`

### Responsive navigation:
\`\`\`css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
\`\`\`
    `,
    codeExample: `/* Flex container */
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: #f0f0f0;
}

/* Flex items */
.item {
    flex: 1; /* Grow equally */
    padding: 20px;
    background: white;
    border-radius: 8px;
}

/* Specific item sizing */
.item-small {
    flex: 0 0 100px; /* Don't grow, don't shrink, 100px wide */
}

.item-large {
    flex: 2; /* Grow twice as much as others */
}

/* Center content */
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Navigation with flexbox */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
}

/* Responsive grid */
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.grid-item {
    flex: 1 1 300px; /* Grow, shrink, min 300px */
}

/* Column layout */
.sidebar-layout {
    display: flex;
    gap: 20px;
}

.sidebar {
    flex: 0 0 250px; /* Fixed sidebar */
}

.main-content {
    flex: 1; /* Take remaining space */
}`,
    language: 'css',
    exercises: [
      {
        id: 'css-6-ex1',
        title: 'Create a Flexbox Navigation',
        description: 'Build a responsive navigation bar using Flexbox.',
        starterCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        /* Add your flexbox styles here */
        nav {
            
        }
    </style>
</head>
<body>
    <nav>
        <div class="logo">My Site</div>
        <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button>Sign In</button>
    </nav>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background: #333;
            color: white;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .menu {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .menu a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s;
        }
        
        .menu a:hover {
            opacity: 0.7;
        }
        
        button {
            padding: 0.5rem 1.5rem;
            background: #0066cc;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        button:hover {
            background: #0052a3;
        }
    </style>
</head>
<body>
    <nav>
        <div class="logo">My Site</div>
        <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button>Sign In</button>
    </nav>
</body>
</html>`,
        language: 'html',
        hints: [
          'Use display: flex on the nav element',
          'Use justify-content: space-between to spread items',
          'Use align-items: center for vertical alignment',
          'Make the menu ul a flex container too',
          'Use gap for spacing between menu items'
        ]
      }
    ]
  },
  {
    id: 'css-7',
    title: 'CSS Grid - Fundamentals',
    description: 'Master CSS Grid for powerful two-dimensional layouts.',
    difficulty: 'intermediate',
    estimatedTime: 60,
    content: `
# CSS Grid - Fundamentals

CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns.

## Grid Container Properties

### display: grid
Activates grid:
\`\`\`css
.container {
    display: grid;
}
\`\`\`

### grid-template-columns
Define columns:
\`\`\`css
grid-template-columns: 200px 200px 200px;
grid-template-columns: 1fr 1fr 1fr;        /* Equal fractions */
grid-template-columns: 1fr 2fr 1fr;        /* Proportional */
grid-template-columns: repeat(3, 1fr);     /* Repeat */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
\`\`\`

### grid-template-rows
Define rows:
\`\`\`css
grid-template-rows: 100px auto 100px;
grid-template-rows: repeat(3, 1fr);
\`\`\`

### gap
Space between grid items:
\`\`\`css
gap: 20px;              /* Both row and column */
row-gap: 10px;
column-gap: 20px;
grid-gap: 20px;         /* Older syntax */
\`\`\`

### grid-template-areas
Named grid areas:
\`\`\`css
grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
\`\`\`

### justify-items
Align items horizontally:
\`\`\`css
justify-items: start;
justify-items: end;
justify-items: center;
justify-items: stretch;  /* Default */
\`\`\`

### align-items
Align items vertically:
\`\`\`css
align-items: start;
align-items: end;
align-items: center;
align-items: stretch;    /* Default */
\`\`\`

### justify-content
Align entire grid horizontally:
\`\`\`css
justify-content: start;
justify-content: end;
justify-content: center;
justify-content: space-between;
\`\`\`

### align-content
Align entire grid vertically:
\`\`\`css
align-content: start;
align-content: center;
align-content: space-between;
\`\`\`

## Grid Item Properties

### grid-column
Position item by column:
\`\`\`css
grid-column: 1 / 3;        /* Start / End */
grid-column: span 2;       /* Span 2 columns */
grid-column-start: 1;
grid-column-end: 3;
\`\`\`

### grid-row
Position item by row:
\`\`\`css
grid-row: 1 / 3;
grid-row: span 2;
\`\`\`

### grid-area
Named area or position:
\`\`\`css
grid-area: header;               /* Named area */
grid-area: 1 / 1 / 3 / 4;       /* row-start / col-start / row-end / col-end */
\`\`\`

### justify-self
Align individual item horizontally:
\`\`\`css
justify-self: start;
justify-self: center;
justify-self: end;
\`\`\`

### align-self
Align individual item vertically:
\`\`\`css
align-self: start;
align-self: center;
align-self: end;
\`\`\`

## Common Patterns

### Equal columns grid:
\`\`\`css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
\`\`\`

### Responsive grid:
\`\`\`css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
\`\`\`

### Layout with named areas:
\`\`\`css
.layout {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 250px 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`
    `,
    codeExample: `/* Basic grid */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.grid-item {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
}

/* Responsive grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Page layout with grid */
.page-layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    min-height: 100vh;
}

.header {
    grid-area: header;
    background: #333;
    color: white;
    padding: 1rem;
}

.sidebar {
    grid-area: sidebar;
    background: #f5f5f5;
    padding: 1rem;
}

.main {
    grid-area: main;
    padding: 1rem;
}

.footer {
    grid-area: footer;
    background: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

/* Spanning items */
.featured {
    grid-column: span 2;  /* Takes 2 columns */
    grid-row: span 2;     /* Takes 2 rows */
}

/* Image gallery grid */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}`,
    language: 'css'
  }
];

export default cssLessons;