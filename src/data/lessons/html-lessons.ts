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
  },
  {
    id: 'html-6',
    title: 'HTML Tables',
    description: 'Learn how to create and structure data tables in HTML.',
    difficulty: 'beginner',
    estimatedTime: 40,
    content: `
# HTML Tables

Tables are used to display data in rows and columns. They're essential for presenting structured information like schedules, price lists, and comparison charts.

## Table Structure

### Basic Elements
- \`<table>\`: Container for the entire table
- \`<tr>\`: Table row
- \`<td>\`: Table data cell
- \`<th>\`: Table header cell (bold and centered by default)

### Structural Elements
- \`<thead>\`: Groups header content
- \`<tbody>\`: Groups body content
- \`<tfoot>\`: Groups footer content
- \`<caption>\`: Table title or explanation

### Advanced Features
- \`colspan\`: Merge cells horizontally
- \`rowspan\`: Merge cells vertically
- \`scope\`: Associate headers with data cells (accessibility)

## Best Practices
1. Use tables for data, not layout
2. Always include proper headers
3. Use caption for context
4. Add scope attributes for accessibility
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Tables</title>
</head>
<body>
    <h1>Student Grade Report</h1>
    
    <!-- Basic table with semantic structure -->
    <table border="1">
        <caption>Final Grades - Fall 2024</caption>
        
        <thead>
            <tr>
                <th scope="col">Student Name</th>
                <th scope="col">Math</th>
                <th scope="col">Science</th>
                <th scope="col">English</th>
                <th scope="col">Average</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
                <th scope="row">Alice Johnson</th>
                <td>95</td>
                <td>92</td>
                <td>88</td>
                <td>91.7</td>
            </tr>
            <tr>
                <th scope="row">Bob Smith</th>
                <td>87</td>
                <td>90</td>
                <td>85</td>
                <td>87.3</td>
            </tr>
            <tr>
                <th scope="row">Carol White</th>
                <td>92</td>
                <td>88</td>
                <td>94</td>
                <td>91.3</td>
            </tr>
        </tbody>
        
        <tfoot>
            <tr>
                <th scope="row">Class Average</th>
                <td>91.3</td>
                <td>90.0</td>
                <td>89.0</td>
                <td>90.1</td>
            </tr>
        </tfoot>
    </table>
    
    <br><br>
    
    <!-- Table with colspan and rowspan -->
    <table border="1">
        <caption>Course Schedule</caption>
        <thead>
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>9:00 AM</td>
                <td colspan="2">Mathematics (Extended)</td>
                <td>Science</td>
            </tr>
            <tr>
                <td>10:30 AM</td>
                <td>English</td>
                <td>History</td>
                <td>English</td>
            </tr>
            <tr>
                <td>12:00 PM</td>
                <td colspan="3">Lunch Break</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`,
    language: 'html',
    exercises: [
      {
        id: 'html-6-ex1',
        title: 'Create a Product Comparison Table',
        description: 'Build a table comparing different product features.',
        starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product Comparison</title>
</head>
<body>
    <h1>Smartphone Comparison</h1>
    <!-- Create a comparison table here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product Comparison</title>
</head>
<body>
    <h1>Smartphone Comparison</h1>
    
    <table border="1">
        <caption>Compare Our Top 3 Smartphones</caption>
        
        <thead>
            <tr>
                <th scope="col">Feature</th>
                <th scope="col">Model A</th>
                <th scope="col">Model B</th>
                <th scope="col">Model C</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
                <th scope="row">Price</th>
                <td>$699</td>
                <td>$899</td>
                <td>$1099</td>
            </tr>
            <tr>
                <th scope="row">Screen Size</th>
                <td>6.1"</td>
                <td>6.5"</td>
                <td>6.7"</td>
            </tr>
            <tr>
                <th scope="row">Battery Life</th>
                <td>20 hours</td>
                <td>24 hours</td>
                <td>28 hours</td>
            </tr>
            <tr>
                <th scope="row">Camera</th>
                <td>12 MP</td>
                <td>48 MP</td>
                <td>108 MP</td>
            </tr>
            <tr>
                <th scope="row">5G Support</th>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
        </tbody>
        
        <tfoot>
            <tr>
                <th scope="row">Rating</th>
                <td>★★★★☆</td>
                <td>★★★★★</td>
                <td>★★★★★</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`,
        language: 'html',
        hints: [
          'Use <thead>, <tbody>, and <tfoot> for structure',
          'Use <th scope="row"> for row headers',
          'Use <th scope="col"> for column headers',
          'Add a <caption> to describe the table'
        ]
      }
    ]
  },
  {
    id: 'html-7',
    title: 'HTML Media Elements - Images',
    description: 'Master working with images including responsive images and image maps.',
    difficulty: 'intermediate',
    estimatedTime: 45,
    content: `
# HTML Media Elements - Images

Images are essential for modern web design. HTML provides powerful features for displaying and optimizing images.

## The img Element

### Basic Attributes
- \`src\`: Image source URL (required)
- \`alt\`: Alternative text (required for accessibility)
- \`width\` and \`height\`: Dimensions (optional but recommended)
- \`title\`: Tooltip text on hover
- \`loading\`: Lazy loading behavior ("lazy" or "eager")

## Responsive Images

### srcset Attribute
Provides different images for different screen resolutions:
\`\`\`html
<img src="small.jpg" 
     srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w"
     sizes="(max-width: 600px) 500px, 1000px"
     alt="Responsive image">
\`\`\`

### Picture Element
Provides art direction and format selection:
\`\`\`html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture>
\`\`\`

## Figure and Figcaption
Semantic grouping of images with captions:
\`\`\`html
<figure>
  <img src="photo.jpg" alt="Description">
  <figcaption>Photo caption goes here</figcaption>
</figure>
\`\`\`

## Image Maps
Create clickable areas within an image:
- \`<map>\`: Defines the map
- \`<area>\`: Defines clickable areas
- Shapes: rect, circle, poly

## Best Practices
1. Always provide alt text
2. Optimize file sizes
3. Use appropriate formats (JPEG, PNG, WebP, SVG)
4. Implement lazy loading for below-fold images
5. Provide responsive images for different devices
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Images</title>
</head>
<body>
    <h1>Working with Images</h1>
    
    <!-- Basic image -->
    <h2>Basic Image</h2>
    <img src="https://via.placeholder.com/400x300" 
         alt="A sample placeholder image"
         width="400" 
         height="300"
         title="Hover over me">
    
    <!-- Image with figure and caption -->
    <h2>Image with Caption</h2>
    <figure>
        <img src="https://via.placeholder.com/600x400" 
             alt="Beautiful landscape"
             width="600"
             height="400">
        <figcaption>Figure 1: A beautiful landscape photograph</figcaption>
    </figure>
    
    <!-- Responsive image with srcset -->
    <h2>Responsive Image</h2>
    <img src="https://via.placeholder.com/500"
         srcset="https://via.placeholder.com/500 500w,
                 https://via.placeholder.com/1000 1000w,
                 https://via.placeholder.com/1500 1500w"
         sizes="(max-width: 600px) 500px,
                (max-width: 1200px) 1000px,
                1500px"
         alt="Responsive image example">
    
    <!-- Picture element for art direction -->
    <h2>Art Direction</h2>
    <picture>
        <source media="(min-width: 800px)" 
                srcset="https://via.placeholder.com/1200x400">
        <source media="(min-width: 400px)" 
                srcset="https://via.placeholder.com/800x300">
        <img src="https://via.placeholder.com/400x200" 
             alt="Responsive image with art direction">
    </picture>
    
    <!-- Image map -->
    <h2>Image Map (Clickable Areas)</h2>
    <img src="https://via.placeholder.com/400x300" 
         alt="Map example" 
         usemap="#imagemap">
    
    <map name="imagemap">
        <area shape="rect" coords="0,0,200,150" 
              href="#section1" alt="Top Left">
        <area shape="rect" coords="200,0,400,150" 
              href="#section2" alt="Top Right">
        <area shape="rect" coords="0,150,200,300" 
              href="#section3" alt="Bottom Left">
        <area shape="rect" coords="200,150,400,300" 
              href="#section4" alt="Bottom Right">
    </map>
    
    <!-- Lazy loading -->
    <h2>Lazy Loaded Images</h2>
    <p>Scroll down to see lazy-loaded images...</p>
    <br><br><br><br><br><br>
    <img src="https://via.placeholder.com/600x400" 
         alt="Lazy loaded image"
         loading="lazy">
</body>
</html>`,
    language: 'html'
  },
  {
    id: 'html-8',
    title: 'HTML Media - Audio and Video',
    description: 'Learn to embed and control audio and video content.',
    difficulty: 'intermediate',
    estimatedTime: 50,
    content: `
# HTML Media - Audio and Video

HTML5 introduced native support for audio and video playback without plugins.

## Audio Element

### Basic Usage
\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
\`\`\`

### Audio Attributes
- \`controls\`: Show playback controls
- \`autoplay\`: Auto-play on load (discouraged)
- \`loop\`: Loop playback
- \`muted\`: Start muted
- \`preload\`: Hint for loading ("none", "metadata", "auto")

## Video Element

### Basic Usage
\`\`\`html
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video element.
</video>
\`\`\`

### Video Attributes
- \`poster\`: Image shown before playback
- \`width\` and \`height\`: Video dimensions
- All audio attributes also apply

## Tracks for Captions
\`\`\`html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="subtitles" src="subs-en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="subs-es.vtt" srclang="es" label="Spanish">
</video>
\`\`\`

### Track Kinds
- \`subtitles\`: Translations
- \`captions\`: Transcriptions with sound effects
- \`descriptions\`: Audio descriptions
- \`chapters\`: Chapter markers
- \`metadata\`: Metadata tracks

## Supported Formats

### Audio
- MP3: Widely supported
- WAV: Uncompressed, large files
- OGG: Open format, good compression

### Video
- MP4 (H.264): Most compatible
- WebM: Open format, good quality
- OGG Theora: Open format

## Best Practices
1. Provide multiple formats for compatibility
2. Include fallback text for unsupported browsers
3. Don't autoplay with sound (UX and accessibility)
4. Provide captions/subtitles for accessibility
5. Optimize file sizes
6. Use appropriate preload settings
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Media</title>
</head>
<body>
    <h1>Audio and Video in HTML</h1>
    
    <!-- Audio player -->
    <h2>Audio Player</h2>
    <audio controls preload="metadata">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                type="audio/mpeg">
        <p>Your browser doesn't support HTML5 audio. 
           <a href="audio.mp3">Download the audio</a> instead.</p>
    </audio>
    
    <!-- Audio with all features -->
    <h2>Audio with Autoplay and Loop</h2>
    <audio controls loop muted>
        <source src="background-music.mp3" type="audio/mpeg">
        <source src="background-music.ogg" type="audio/ogg">
        Your browser does not support the audio element.
    </audio>
    
    <br><br>
    
    <!-- Basic video -->
    <h2>Video Player</h2>
    <video controls width="640" height="360" preload="metadata">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" 
                type="video/mp4">
        <p>Your browser doesn't support HTML5 video. 
           <a href="video.mp4">Download the video</a> instead.</p>
    </video>
    
    <!-- Video with poster and subtitles -->
    <h2>Video with Poster and Captions</h2>
    <video controls 
           width="640" 
           height="360"
           poster="https://via.placeholder.com/640x360/0000FF/FFFFFF?text=Video+Poster">
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.webm" type="video/webm">
        
        <!-- Subtitle tracks -->
        <track kind="captions" 
               src="captions-en.vtt" 
               srclang="en" 
               label="English"
               default>
        <track kind="captions" 
               src="captions-es.vtt" 
               srclang="es" 
               label="Spanish">
        
        <p>Your browser doesn't support HTML5 video.</p>
    </video>
    
    <!-- Responsive video -->
    <h2>Responsive Video</h2>
    <div style="max-width: 100%; position: relative; padding-bottom: 56.25%;">
        <video controls 
               style="position: absolute; width: 100%; height: 100%;">
            <source src="responsive-video.mp4" type="video/mp4">
        </video>
    </div>
    
    <!-- Embedded iframe video (YouTube example) -->
    <h2>Embedded Video (YouTube)</h2>
    <iframe width="640" 
            height="360" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
    </iframe>
</body>
</html>`,
    language: 'html'
  },
  {
    id: 'html-9',
    title: 'HTML5 APIs and Advanced Features',
    description: 'Explore HTML5 APIs like Geolocation, Local Storage, and Canvas.',
    difficulty: 'advanced',
    estimatedTime: 60,
    content: `
# HTML5 APIs and Advanced Features

HTML5 introduced powerful APIs that enable rich web applications without plugins.

## Data Attributes

Custom data attributes for storing extra information:
\`\`\`html
<div data-user-id="123" data-role="admin">User Info</div>
\`\`\`

Access with JavaScript:
\`\`\`javascript
element.dataset.userId // "123"
element.dataset.role   // "admin"
\`\`\`

## Canvas Element

Draw graphics dynamically using JavaScript:
\`\`\`html
<canvas id="myCanvas" width="500" height="300"></canvas>
\`\`\`

## SVG (Scalable Vector Graphics)

Vector graphics embedded in HTML:
\`\`\`html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
\`\`\`

## Embedded Content

### iframe
Embed external content:
\`\`\`html
<iframe src="page.html" width="600" height="400"></iframe>
\`\`\`

### embed and object
Legacy embedding elements (use iframe instead)

## Web Storage API

### localStorage
Persistent storage (survives browser restart):
\`\`\`javascript
localStorage.setItem('name', 'John');
let name = localStorage.getItem('name');
\`\`\`

### sessionStorage
Session-only storage (cleared on tab close):
\`\`\`javascript
sessionStorage.setItem('temp', 'value');
\`\`\`

## Geolocation API

Access user's location (with permission):
\`\`\`javascript
navigator.geolocation.getCurrentPosition(success, error);
\`\`\`

## Drag and Drop API

Make elements draggable:
\`\`\`html
<div draggable="true">Drag me!</div>
\`\`\`

## Content Editable

Make elements editable:
\`\`\`html
<div contenteditable="true">Edit this text!</div>
\`\`\`

## Details and Summary

Collapsible content sections:
\`\`\`html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content here...</p>
</details>
\`\`\`

## Progress and Meter

Visual indicators:
\`\`\`html
<progress value="70" max="100">70%</progress>
<meter value="0.7" min="0" max="1">70%</meter>
\`\`\`

## Dialog Element

Native modal dialogs:
\`\`\`html
<dialog id="myDialog">
  <p>Dialog content</p>
  <button>Close</button>
</dialog>
\`\`\`
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Advanced Features</title>
    <style>
        .draggable {
            width: 100px;
            height: 100px;
            background: lightblue;
            margin: 10px;
            padding: 10px;
            cursor: move;
        }
        .dropzone {
            width: 300px;
            height: 200px;
            border: 2px dashed #ccc;
            padding: 20px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>HTML5 Advanced Features</h1>
    
    <!-- Data attributes -->
    <h2>Data Attributes</h2>
    <div data-product-id="12345" 
         data-product-name="Laptop" 
         data-product-price="999.99">
        Product: Laptop
        <button onclick="showProductInfo(this.parentElement)">Show Info</button>
    </div>
    
    <!-- Canvas -->
    <h2>Canvas Drawing</h2>
    <canvas id="myCanvas" width="400" height="200" style="border:1px solid #000;"></canvas>
    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        
        // Draw rectangle
        ctx.fillStyle = 'blue';
        ctx.fillRect(20, 20, 150, 100);
        
        // Draw circle
        ctx.beginPath();
        ctx.arc(300, 70, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    </script>
    
    <!-- SVG -->
    <h2>SVG Graphics</h2>
    <svg width="200" height="200">
        <circle cx="100" cy="100" r="80" fill="green" />
        <text x="100" y="105" text-anchor="middle" fill="white" font-size="20">
            SVG Circle
        </text>
    </svg>
    
    <!-- Progress and Meter -->
    <h2>Progress Indicators</h2>
    <p>Download Progress:</p>
    <progress value="65" max="100">65%</progress>
    <p>Disk Usage:</p>
    <meter value="0.75" min="0" max="1" low="0.3" high="0.7" optimum="0.2">75%</meter>
    
    <!-- Details and Summary -->
    <h2>Collapsible Content</h2>
    <details>
        <summary>Click to show more information</summary>
        <p>This content is hidden by default and only shown when expanded.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </details>
    
    <!-- Content Editable -->
    <h2>Editable Content</h2>
    <div contenteditable="true" style="border: 1px solid #ccc; padding: 10px; min-height: 100px;">
        This text is editable! Click and start typing...
    </div>
    
    <!-- Drag and Drop -->
    <h2>Drag and Drop</h2>
    <div class="draggable" draggable="true" ondragstart="drag(event)">
        Drag me!
    </div>
    <div class="dropzone" ondrop="drop(event)" ondragover="allowDrop(event)">
        Drop here
    </div>
    
    <!-- Local Storage Example -->
    <h2>Local Storage</h2>
    <input type="text" id="nameInput" placeholder="Enter your name">
    <button onclick="saveName()">Save to Local Storage</button>
    <button onclick="loadName()">Load from Local Storage</button>
    <p id="savedName"></p>
    
    <script>
        // Data attributes
        function showProductInfo(element) {
            const id = element.dataset.productId;
            const name = element.dataset.productName;
            const price = element.dataset.productPrice;
            alert(\`Product: \${name}\\nID: \${id}\\nPrice: $\${price}\`);
        }
        
        // Drag and Drop
        function allowDrop(ev) {
            ev.preventDefault();
        }
        
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.textContent);
        }
        
        function drop(ev) {
            ev.preventDefault();
            const data = ev.dataTransfer.getData("text");
            ev.target.textContent = "Dropped: " + data;
            ev.target.style.background = "lightgreen";
        }
        
        // Local Storage
        function saveName() {
            const name = document.getElementById('nameInput').value;
            localStorage.setItem('userName', name);
            alert('Name saved to local storage!');
        }
        
        function loadName() {
            const name = localStorage.getItem('userName');
            document.getElementById('savedName').textContent = 
                name ? 'Saved name: ' + name : 'No name saved yet.';
        }
    </script>
</body>
</html>`,
    language: 'html'
  },
  {
    id: 'html-10',
    title: 'HTML Accessibility (A11y)',
    description: 'Master web accessibility for inclusive web applications.',
    difficulty: 'intermediate',
    estimatedTime: 55,
    content: `
# HTML Accessibility (A11y)

Accessibility ensures your website can be used by everyone, including people with disabilities.

## Why Accessibility Matters
- **Legal requirement** in many countries
- **Larger audience** - 15% of world population has disabilities
- **Better SEO** - accessible sites rank better
- **Better UX** for everyone
- **Future-proof** your content

## Semantic HTML

Use the right element for the right purpose:
- \`<button>\` for clickable actions (not \`<div onclick>\`)
- \`<a>\` for navigation (not \`<span onclick>\`)
- Proper heading hierarchy (\`<h1>\` to \`<h6>\`)
- \`<nav>\`, \`<main>\`, \`<article>\`, etc.

## ARIA (Accessible Rich Internet Applications)

### ARIA Roles
Define the purpose of an element:
\`\`\`html
<div role="navigation">...</div>
<div role="alert">Important message!</div>
<div role="button" tabindex="0">Click me</div>
\`\`\`

### ARIA States and Properties
- \`aria-label\`: Accessible name
- \`aria-labelledby\`: References label element
- \`aria-describedby\`: Additional description
- \`aria-hidden\`: Hide from screen readers
- \`aria-live\`: Announce dynamic content
- \`aria-expanded\`: Expandable element state
- \`aria-selected\`: Selection state
- \`aria-disabled\`: Disabled state

## Keyboard Navigation

Make everything keyboard accessible:
- Use \`tabindex\` appropriately
  - \`tabindex="0"\`: Normal tab order
  - \`tabindex="-1"\`: Programmatically focusable
  - Avoid positive tabindex values
- Handle keyboard events (Enter, Space, Arrow keys)
- Provide visible focus indicators

## Alternative Text

### Images
\`\`\`html
<!-- Informative image -->
<img src="chart.png" alt="Sales increased 50% in Q4">

<!-- Decorative image -->
<img src="decoration.png" alt="">

<!-- Complex image -->
<img src="diagram.png" alt="Network diagram" longdesc="diagram-description.html">
\`\`\`

### Form Controls
Always label form inputs:
\`\`\`html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required>
\`\`\`

## Focus Management

Manage focus for dynamic content:
\`\`\`javascript
element.focus();
element.setAttribute('tabindex', '0');
\`\`\`

## Color Contrast

Ensure sufficient contrast:
- Normal text: 4.5:1 ratio minimum
- Large text: 3:1 ratio minimum
- Don't rely on color alone for information

## Skip Links

Allow users to skip navigation:
\`\`\`html
<a href="#main" class="skip-link">Skip to main content</a>
<nav>...</nav>
<main id="main">...</main>
\`\`\`

## Testing Accessibility

Tools to test:
- Screen readers (NVDA, JAWS, VoiceOver)
- Browser DevTools accessibility features
- Lighthouse accessibility audit
- axe DevTools extension
- WAVE Web Accessibility Evaluation Tool
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible HTML Example</title>
    <style>
        /* Skip link (hidden until focused) */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: #fff;
            padding: 8px;
            z-index: 100;
        }
        .skip-link:focus {
            top: 0;
        }
        
        /* Visible focus indicator */
        *:focus {
            outline: 3px solid #4A90E2;
            outline-offset: 2px;
        }
        
        /* Visually hidden but screen-reader accessible */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            white-space: nowrap;
            border: 0;
        }
    </style>
</head>
<body>
    <!-- Skip link for keyboard users -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Page header with proper semantic structure -->
    <header role="banner">
        <h1>Accessible Website Example</h1>
        
        <!-- Navigation with proper labeling -->
        <nav role="navigation" aria-label="Main navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Main content area -->
    <main id="main-content" role="main">
        <h2>Welcome to Our Accessible Site</h2>
        
        <!-- Article with proper structure -->
        <article>
            <h3>Understanding Web Accessibility</h3>
            <p>Web accessibility means that websites, tools, and technologies are designed 
            so that people with disabilities can use them.</p>
            
            <!-- Image with descriptive alt text -->
            <figure>
                <img src="accessibility-icon.png" 
                     alt="Universal accessibility symbol showing a person in a wheelchair" 
                     width="200" 
                     height="200">
                <figcaption>The international symbol of accessibility</figcaption>
            </figure>
        </article>
        
        <!-- Accessible form -->
        <section aria-labelledby="contact-heading">
            <h3 id="contact-heading">Contact Form</h3>
            
            <form action="/submit" method="POST">
                <!-- Proper label association -->
                <div>
                    <label for="name">Full Name: <span aria-label="required">*</span></label>
                    <input type="text" 
                           id="name" 
                           name="name" 
                           required
                           aria-required="true"
                           aria-describedby="name-help">
                    <span id="name-help" class="sr-only">Enter your first and last name</span>
                </div>
                
                <div>
                    <label for="email">Email Address: <span aria-label="required">*</span></label>
                    <input type="email" 
                           id="email" 
                           name="email" 
                           required
                           aria-required="true"
                           aria-invalid="false">
                </div>
                
                <!-- Fieldset for radio buttons -->
                <fieldset>
                    <legend>Preferred Contact Method:</legend>
                    <div>
                        <input type="radio" id="contact-email" name="contact" value="email" checked>
                        <label for="contact-email">Email</label>
                    </div>
                    <div>
                        <input type="radio" id="contact-phone" name="contact" value="phone">
                        <label for="contact-phone">Phone</label>
                    </div>
                </fieldset>
                
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" 
                              name="message" 
                              rows="4" 
                              aria-describedby="message-limit"></textarea>
                    <span id="message-limit" class="sr-only">Maximum 500 characters</span>
                </div>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
        
        <!-- Custom widget with ARIA -->
        <section aria-labelledby="accordion-heading">
            <h3 id="accordion-heading">Frequently Asked Questions</h3>
            
            <div class="accordion">
                <!-- Accordion item -->
                <h4>
                    <button aria-expanded="false" 
                            aria-controls="faq1-content" 
                            id="faq1-button">
                        What is web accessibility?
                    </button>
                </h4>
                <div id="faq1-content" 
                     role="region" 
                     aria-labelledby="faq1-button" 
                     hidden>
                    <p>Web accessibility is the practice of making websites usable by people with disabilities.</p>
                </div>
                
                <h4>
                    <button aria-expanded="false" 
                            aria-controls="faq2-content" 
                            id="faq2-button">
                        Why is it important?
                    </button>
                </h4>
                <div id="faq2-content" 
                     role="region" 
                     aria-labelledby="faq2-button" 
                     hidden>
                    <p>It ensures equal access and equal opportunity to people with diverse abilities.</p>
                </div>
            </div>
        </section>
        
        <!-- Live region for dynamic updates -->
        <div aria-live="polite" aria-atomic="true" class="sr-only" id="status-message"></div>
    </main>
    
    <!-- Aside with proper labeling -->
    <aside role="complementary" aria-label="Related resources">
        <h3>Accessibility Resources</h3>
        <ul>
            <li><a href="https://www.w3.org/WAI/">W3C Web Accessibility Initiative</a></li>
            <li><a href="https://webaim.org/">WebAIM</a></li>
            <li><a href="https://www.a11yproject.com/">The A11Y Project</a></li>
        </ul>
    </aside>
    
    <!-- Footer -->
    <footer role="contentinfo">
        <p>&copy; 2024 Accessible Website. All rights reserved.</p>
        <p>
            <a href="#top">Back to top</a> | 
            <a href="/accessibility-statement">Accessibility Statement</a>
        </p>
    </footer>
    
    <script>
        // Accordion functionality with keyboard support
        document.querySelectorAll('[aria-expanded]').forEach(button => {
            button.addEventListener('click', function() {
                const expanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !expanded);
                const content = document.getElementById(this.getAttribute('aria-controls'));
                content.hidden = expanded;
            });
            
            // Handle keyboard navigation
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
        
        // Announce dynamic content changes
        function announceStatus(message) {
            document.getElementById('status-message').textContent = message;
        }
    </script>
</body>
</html>`,
    language: 'html'
  }
];

export default htmlLessons;