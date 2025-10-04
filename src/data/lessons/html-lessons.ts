import type { Lesson } from '../curriculum';

export const htmlLessons: Lesson[] = [
  {
    id: 'html-1',
    title: 'Introduction to HTML',
    description: 'What is HTML and why is it important for web development?',
    difficulty: 'beginner',
    estimatedTime: 30,
    content: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of a web page using a series of elements.

## What You'll Learn
- What HTML is and why it's essential
- The basic structure of an HTML document
- How browsers interpret HTML
- The relationship between HTML, CSS, and JavaScript

## Key Concepts
1. **Markup Language**: HTML uses tags to mark up content
2. **Elements**: The building blocks of HTML documents
3. **Attributes**: Additional information about elements
4. **Semantic Meaning**: HTML should describe the meaning of content, not just appearance

## Why HTML Matters
- It's the foundation of all web content
- Provides structure and meaning to content
- Enables accessibility for screen readers and other assistive technologies
- Forms the base upon which CSS and JavaScript operate
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first HTML document.</p>
</body>
</html>`,
    language: 'html',
    exercises: [
      {
        id: 'html-1-ex1',
        title: 'Create Your First HTML Document',
        description: 'Create a basic HTML document with a title and a paragraph.',
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><!-- Add your title here --></title>
</head>
<body>
    <!-- Add your content here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Learning Journey</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>I'm learning HTML and this is my first webpage!</p>
</body>
</html>`,
        language: 'html',
        hints: [
          'The title goes between the <title> tags in the head section',
          'Use <h1> for the main heading',
          'Use <p> for paragraphs of text'
        ]
      }
    ]
  },
  {
    id: 'html-2',
    title: 'HTML Document Structure',
    description: 'Understanding the anatomy of an HTML document and essential tags.',
    difficulty: 'beginner',
    estimatedTime: 45,
    content: `
# HTML Document Structure

Every HTML document follows a specific structure that browsers expect. Let's break down each part:

## The DOCTYPE Declaration
\`<!DOCTYPE html>\` tells the browser this is an HTML5 document.

## The HTML Element
The \`<html>\` element is the root element that contains all other elements.

## The Head Section
The \`<head>\` contains metadata about the document:
- \`<meta>\` tags for character encoding and viewport settings
- \`<title>\` for the page title (shown in browser tabs)
- Links to CSS files and other resources

## The Body Section
The \`<body>\` contains all the visible content of the webpage.

## Essential Meta Tags
- \`charset="UTF-8"\`: Ensures proper character encoding
- \`viewport\`: Makes your site mobile-friendly
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta information -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A comprehensive HTML learning resource">
    
    <!-- Page title -->
    <title>HTML Document Structure</title>
</head>
<body>
    <!-- All visible content goes here -->
    <h1>Understanding HTML Structure</h1>
    <p>This is the body of the document where all visible content lives.</p>
</body>
</html>`,
    language: 'html'
  },
  {
    id: 'html-3',
    title: 'HTML Elements and Tags',
    description: 'Learn about the most important HTML elements and how to use them.',
    difficulty: 'beginner',
    estimatedTime: 45,
    content: `
# HTML Elements and Tags

HTML elements are the building blocks of web pages. Each element serves a specific purpose and provides structure or meaning to content.

## Text Elements
- \`<h1>\` to \`<h6>\`: Headings in order of importance
- \`<p>\`: Paragraphs of text
- \`<span>\`: Inline text container
- \`<strong>\`: Important text (bold)
- \`<em>\`: Emphasized text (italic)
- \`<br>\`: Line break
- \`<hr>\`: Horizontal rule/divider

## List Elements
- \`<ul>\`: Unordered (bulleted) lists
- \`<ol>\`: Ordered (numbered) lists
- \`<li>\`: List items
- \`<dl>\`: Description list
- \`<dt>\`: Description term
- \`<dd>\`: Description definition

## Link Elements
- \`<a>\`: Anchors/links to other pages or sections
- \`href\` attribute specifies the destination
- \`target\` attribute controls how link opens

## Image Elements
- \`<img>\`: Displays images
- \`src\` attribute specifies the image source
- \`alt\` attribute provides alternative text

## Container Elements
- \`<div>\`: Block-level container
- \`<section>\`: Thematic grouping of content
- \`<article>\`: Standalone piece of content
- \`<header>\`: Header section
- \`<footer>\`: Footer section
- \`<nav>\`: Navigation links
- \`<aside>\`: Side content
- \`<main>\`: Main content area
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Elements Example</title>
</head>
<body>
    <!-- Headings -->
    <h1>Main Heading</h1>
    <h2>Subheading</h2>
    <h3>Sub-subheading</h3>
    
    <!-- Paragraph -->
    <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
    
    <!-- Line break and horizontal rule -->
    <p>First line<br>Second line</p>
    <hr>
    
    <!-- Lists -->
    <h3>Unordered List:</h3>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>
    
    <h3>Ordered List:</h3>
    <ol>
        <li>Step one</li>
        <li>Step two</li>
        <li>Step three</li>
    </ol>
    
    <!-- Link -->
    <p>Visit <a href="https://www.example.com" target="_blank">this link</a> for more information.</p>
    
    <!-- Image -->
    <img src="https://via.placeholder.com/300x200" alt="Placeholder image" width="300" height="200">
    
    <!-- Semantic containers -->
    <article>
        <header>
            <h2>Article Title</h2>
        </header>
        <p>This is article content.</p>
        <footer>
            <p>Written by Author Name</p>
        </footer>
    </article>
</body>
</html>`,
    language: 'html',
    exercises: [
      {
        id: 'html-3-ex1',
        title: 'Create a Personal Bio Page',
        description: 'Create an HTML page with your personal information using various elements.',
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><!-- Your name here --></title>
</head>
<body>
    <!-- Create your bio here -->
    
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alex Johnson - Developer</title>
</head>
<body>
    <header>
        <h1>Alex Johnson</h1>
        <h2>Full Stack Developer</h2>
    </header>
    
    <main>
        <section>
            <h3>About Me</h3>
            <p>Hello! I'm a passionate developer with <strong>5 years of experience</strong> 
            in web development. I love creating <em>user-friendly</em> applications.</p>
        </section>
        
        <section>
            <h3>Skills:</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
            </ul>
        </section>
        
        <section>
            <h3>Projects:</h3>
            <ol>
                <li>E-commerce Platform</li>
                <li>Social Media Dashboard</li>
                <li>Task Management App</li>
            </ol>
        </section>
    </main>
    
    <footer>
        <h3>Contact:</h3>
        <p>Email: <a href="mailto:alex@example.com">alex@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/alexjohnson" target="_blank">Alex Johnson</a></p>
    </footer>
</body>
</html>`,
        language: 'html',
        hints: [
          'Use semantic elements like <header>, <main>, <section>, and <footer>',
          'Use <h1> for your name as the main heading',
          'Use <ul> and <li> for listing your skills',
          'Use <a> tags with href attributes for email and social links'
        ]
      }
    ]
  },
  {
    id: 'html-4',
    title: 'Forms and Input Elements',
    description: 'Learn how to create interactive forms to collect user input.',
    difficulty: 'beginner',
    estimatedTime: 50,
    content: `
# Forms and Input Elements

HTML forms allow users to input data and interact with web pages. Forms are essential for user registration, contact forms, surveys, and more.

## The Form Element
The \`<form>\` element contains all form controls and defines how the form data should be processed.

### Form Attributes
- \`action\`: URL where form data is sent
- \`method\`: HTTP method (GET or POST)
- \`enctype\`: How form data is encoded

## Input Types
- \`<input type="text">\`: Single-line text input
- \`<input type="email">\`: Email address input with validation
- \`<input type="password">\`: Password input (hidden text)
- \`<input type="number">\`: Numeric input with controls
- \`<input type="tel">\`: Telephone number
- \`<input type="url">\`: URL input with validation
- \`<input type="date">\`: Date picker
- \`<input type="time">\`: Time picker
- \`<input type="checkbox">\`: Checkbox for multiple selections
- \`<input type="radio">\`: Radio button for single selection
- \`<input type="file">\`: File upload
- \`<input type="submit">\`: Submit button
- \`<input type="reset">\`: Reset button

## Other Form Elements
- \`<textarea>\`: Multi-line text input
- \`<select>\` and \`<option>\`: Dropdown menus
- \`<label>\`: Labels for form controls (improves accessibility)
- \`<button>\`: Interactive buttons
- \`<fieldset>\`: Groups related form fields
- \`<legend>\`: Caption for fieldset

## Input Attributes
- \`name\`: Identifies the input when form is submitted
- \`id\`: Unique identifier for the element
- \`value\`: Default or current value
- \`required\`: Makes the field mandatory
- \`placeholder\`: Hint text shown in empty fields
- \`disabled\`: Disables the input
- \`readonly\`: Makes input read-only
- \`min\`/\`max\`: Min/max values for numbers and dates
- \`pattern\`: Regular expression for validation
- \`autocomplete\`: Browser autocomplete behavior
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form Example</title>
</head>
<body>
    <h1>Contact Us</h1>
    
    <form action="/submit" method="POST">
        <!-- Text inputs -->
        <fieldset>
            <legend>Personal Information</legend>
            
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required placeholder="Enter your full name">
            <br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="your.email@example.com">
            <br><br>
            
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890">
            <br><br>
        </fieldset>
        
        <br>
        
        <!-- Textarea -->
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="50" 
                  placeholder="Type your message here..." required></textarea>
        <br><br>
        
        <!-- Radio buttons -->
        <fieldset>
            <legend>How did you hear about us?</legend>
            <input type="radio" id="search" name="source" value="search" checked>
            <label for="search">Search Engine</label><br>
            
            <input type="radio" id="social" name="source" value="social">
            <label for="social">Social Media</label><br>
            
            <input type="radio" id="friend" name="source" value="friend">
            <label for="friend">Friend Referral</label>
        </fieldset>
        <br>
        
        <!-- Checkbox -->
        <input type="checkbox" id="newsletter" name="newsletter" value="yes">
        <label for="newsletter">Subscribe to our newsletter</label><br><br>
        
        <!-- Submit and reset buttons -->
        <button type="submit">Send Message</button>
        <button type="reset">Clear Form</button>
    </form>
</body>
</html>`,
    language: 'html',
    exercises: [
      {
        id: 'html-4-ex1',
        title: 'Build a Registration Form',
        description: 'Create a user registration form with various input types and validation.',
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Registration</title>
</head>
<body>
    <h1>Create Account</h1>
    
    <form>
        <!-- Add form fields here -->
        
    </form>
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Registration</title>
</head>
<body>
    <h1>Create Account</h1>
    
    <form action="/register" method="POST">
        <fieldset>
            <legend>Account Information</legend>
            
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required minlength="3" maxlength="20">
            <br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br><br>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required minlength="8">
            <br><br>
            
            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required minlength="8">
            <br><br>
        </fieldset>
        
        <br>
        
        <fieldset>
            <legend>Personal Details</legend>
            
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="13" max="120">
            <br><br>
            
            <label for="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday">
            <br><br>
            
            <label for="country">Country:</label>
            <select id="country" name="country" required>
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="other">Other</option>
            </select>
            <br><br>
        </fieldset>
        
        <br>
        
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">I agree to the <a href="/terms">terms and conditions</a></label>
        <br><br>
        
        <button type="submit">Register</button>
        <button type="reset">Clear</button>
    </form>
</body>
</html>`,
        language: 'html',
        hints: [
          'Use appropriate input types for different data (email, password, number, date)',
          'Add labels for accessibility using <label> with matching "for" attribute',
          'Use the required attribute for mandatory fields',
          'Use fieldset and legend to group related fields',
          'Add min/max length validation for inputs'
        ]
      }
    ]
  },
  {
    id: 'html-5',
    title: 'Semantic HTML5 Elements',
    description: 'Master semantic HTML for better structure, SEO, and accessibility.',
    difficulty: 'beginner',
    estimatedTime: 40,
    content: `
# Semantic HTML5 Elements

Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. This improves accessibility, SEO, and code maintainability.

## Why Semantic HTML?
- **Better Accessibility**: Screen readers can navigate content more effectively
- **Improved SEO**: Search engines better understand your content
- **Easier Maintenance**: Code is more readable and maintainable
- **Future-proof**: Semantic markup is more resilient to changes

## Document Structure Elements

### \`<header>\`
Contains introductory content or navigation aids
- Usually contains logo, site title, navigation
- Can be used multiple times (page header, article header, etc.)

### \`<nav>\`
Contains navigation links
- Main site navigation
- Table of contents
- Breadcrumbs

### \`<main>\`
Contains the main content of the document
- Only one \`<main>\` per page
- Should not include repeated content (sidebars, navigation)

### \`<article>\`
Independent, self-contained content
- Blog posts
- News articles
- Forum posts
- Product cards

### \`<section>\`
Thematic grouping of content
- Chapters
- Tabbed content
- Numbered sections

### \`<aside>\`
Content tangentially related to main content
- Sidebars
- Pull quotes
- Advertising
- Related links

### \`<footer>\`
Footer for nearest ancestor sectioning content
- Copyright information
- Author info
- Contact details
- Site map links

## Text-Level Semantics

### \`<mark>\`
Highlighted or marked text for reference

### \`<time>\`
Represents dates and times
- Use datetime attribute for machine-readable format

### \`<abbr>\`
Abbreviations or acronyms
- Use title attribute for full text

### \`<code>\`
Inline code snippets

### \`<pre>\`
Preformatted text (preserves whitespace)

### \`<kbd>\`
Keyboard input

### \`<samp>\`
Sample output from a program

### \`<var>\`
Variables in programming or math

## Media Elements

### \`<figure>\`
Self-contained content with optional caption
- Images
- Diagrams
- Code listings

### \`<figcaption>\`
Caption for a \`<figure>\`
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML Example</title>
</head>
<body>
    <!-- Page Header -->
    <header>
        <h1>My Tech Blog</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#articles">Articles</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main Content -->
    <main>
        <!-- Blog Post Article -->
        <article>
            <header>
                <h2>Understanding Semantic HTML</h2>
                <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
                <p>By John Doe</p>
            </header>
            
            <section>
                <h3>What is Semantic HTML?</h3>
                <p>Semantic HTML uses elements that clearly describe their meaning in a 
                <mark>human and machine readable</mark> way.</p>
                
                <figure>
                    <img src="semantic-html-diagram.png" alt="Semantic HTML structure diagram" width="500">
                    <figcaption>Figure 1: Semantic HTML Document Structure</figcaption>
                </figure>
            </section>
            
            <section>
                <h3>Code Example</h3>
                <p>Here's how to use the <code>&lt;article&gt;</code> element:</p>
                <pre><code>&lt;article&gt;
  &lt;h2&gt;Article Title&lt;/h2&gt;
  &lt;p&gt;Content goes here...&lt;/p&gt;
&lt;/article&gt;</code></pre>
            </section>
            
            <footer>
                <p>Tags: <abbr title="HyperText Markup Language">HTML</abbr>, Web Development</p>
            </footer>
        </article>
        
        <!-- Sidebar -->
        <aside>
            <h3>Related Articles</h3>
            <ul>
                <li><a href="#">HTML Best Practices</a></li>
                <li><a href="#">Accessibility in Web Development</a></li>
                <li><a href="#">SEO Fundamentals</a></li>
            </ul>
        </aside>
    </main>
    
    <!-- Page Footer -->
    <footer>
        <p>&copy; 2024 My Tech Blog. All rights reserved.</p>
        <p>Contact: <a href="mailto:info@example.com">info@example.com</a></p>
    </footer>
</body>
</html>`,
    language: 'html',
    exercises: [
      {
        id: 'html-5-ex1',
        title: 'Build a Blog Post Page',
        description: 'Create a complete blog post page using semantic HTML5 elements.',
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blog Post</title>
</head>
<body>
    <!-- Create a semantic blog post structure here -->
    
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>How to Learn Web Development - Tech Blog</title>
</head>
<body>
    <header>
        <h1>Tech Learning Hub</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/tutorials">Tutorials</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h2>How to Learn Web Development in 2024</h2>
                <p>Published on <time datetime="2024-01-20">January 20, 2024</time></p>
                <p>By Sarah Smith</p>
            </header>
            
            <section>
                <h3>Introduction</h3>
                <p>Web development is an exciting field that combines <mark>creativity and logic</mark>. 
                This guide will help you start your journey.</p>
            </section>
            
            <section>
                <h3>Step 1: Learn HTML</h3>
                <p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of web development.</p>
                
                <figure>
                    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
                    <figcaption>Example: Basic HTML structure</figcaption>
                </figure>
            </section>
            
            <section>
                <h3>Step 2: Learn CSS</h3>
                <p>After mastering HTML, move on to <abbr title="Cascading Style Sheets">CSS</abbr> 
                for styling your pages.</p>
            </section>
            
            <section>
                <h3>Resources</h3>
                <ul>
                    <li><a href="https://developer.mozilla.org">MDN Web Docs</a></li>
                    <li><a href="https://www.freecodecamp.org">freeCodeCamp</a></li>
                    <li><a href="https://www.codecademy.com">Codecademy</a></li>
                </ul>
            </section>
            
            <footer>
                <p>Category: Web Development | Tags: HTML, CSS, Tutorial</p>
            </footer>
        </article>
        
        <aside>
            <h3>About the Author</h3>
            <p>Sarah Smith is a senior web developer with 10 years of experience.</p>
            
            <h3>Related Posts</h3>
            <ul>
                <li><a href="#">JavaScript Basics</a></li>
                <li><a href="#">Responsive Design Tips</a></li>
                <li><a href="#">Git for Beginners</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Tech Learning Hub. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>`,
        language: 'html',
        hints: [
          'Use <article> for the blog post content',
          'Use <header> for both page and article headers',
          'Use <section> to divide the article into logical parts',
          'Use <aside> for related content or sidebar',
          'Use <time> with datetime attribute for the publication date',
          'Use <figure> and <figcaption> for code examples'
        ]
      }
    ]
  }
];

export default htmlLessons;