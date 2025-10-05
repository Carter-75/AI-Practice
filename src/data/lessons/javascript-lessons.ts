import type { Lesson } from '../curriculum';

export const javascriptLessons: Lesson[] = [
  {
    id: 'js-1',
    title: 'Introduction to JavaScript',
    description: 'Understanding JavaScript and its role in web development.',
    difficulty: 'beginner',
    estimatedTime: 30,
    content: `
# Introduction to JavaScript

JavaScript is a powerful programming language that brings interactivity and dynamic behavior to web pages. Originally created for browsers, JavaScript now runs everywhere.

## What JavaScript Does
- Makes web pages interactive and responsive
- Handles user events (clicks, form submissions, etc.)
- Manipulates HTML and CSS dynamically
- Communicates with servers to fetch data
- Creates animations and visual effects
- Powers full applications (frontend and backend)

## JavaScript in Web Development
- **Frontend**: Runs in the browser
- **Backend**: Node.js for server-side
- **Mobile**: React Native, Ionic
- **Desktop**: Electron

## Key Characteristics
- **Interpreted**: Runs directly without compilation
- **Dynamic**: Variables can change types
- **Event-driven**: Responds to user actions
- **Single-threaded**: Executes one thing at a time
- **Asynchronous**: Can handle multiple operations

## Where JavaScript Code Lives
\`\`\`html
<!-- Inline (not recommended) -->
<button onclick="alert('Hello!')">Click</button>

<!-- Internal script -->
<script>
  console.log('Hello!');
</script>

<!-- External file (recommended) -->
<script src="script.js"></script>
\`\`\`

## Your First JavaScript
\`\`\`javascript
// Output to console
console.log("Hello, World!");

// Show alert box
alert("Welcome to JavaScript!");

// Change HTML content
document.getElementById('demo').textContent = "Changed!";
\`\`\`
    `,
    codeExample: `// Your first JavaScript code
console.log("Hello, JavaScript!");

// Variables
let message = "Welcome to programming!";
const year = 2024;

// Function
function greet(name) {
    return "Hello, " + name + "!";
}

// Using the function
let greeting = greet("World");
console.log(greeting);

// Interacting with HTML
// document.querySelector('h1').textContent = greeting;`,
    language: 'javascript',
    exercises: [
      {
        id: 'js-1-ex1',
        title: 'Your First JavaScript Program',
        description: 'Write JavaScript to display a greeting message.',
        starterCode: `// Create a variable with your name
// Create a function that returns a greeting
// Log the greeting to the console

`,
        solution: `// Create a variable with your name
let myName = "Alex";

// Create a function that returns a greeting
function createGreeting(name) {
    return "Hello, " + name + "! Welcome to JavaScript programming.";
}

// Call the function and log the result
let greeting = createGreeting(myName);
console.log(greeting);

// Or log directly
console.log(createGreeting("World"));`,
        language: 'javascript',
        hints: [
          'Use let or const to create variables',
          'Use function keyword to create a function',
          'Use console.log() to output messages',
          'Return values from functions using the return keyword'
        ]
      }
    ]
  },
  {
    id: 'js-2',
    title: 'JavaScript Variables and Data Types',
    description: 'Master variables (let, const, var) and data types in JavaScript.',
    difficulty: 'beginner',
    estimatedTime: 40,
    content: `
# JavaScript Variables and Data Types

Variables store data values. JavaScript has three ways to declare variables and several data types.

## Variable Declarations

### let (Block-scoped, Reassignable)
\`\`\`javascript
let age = 25;
age = 26;  // Can reassign
let name;  // Can declare without value
\`\`\`

### const (Block-scoped, Not Reassignable)
\`\`\`javascript
const PI = 3.14159;
// PI = 3;  // Error: Cannot reassign
const person = { name: "John" };
person.name = "Jane";  // OK: Can modify object properties
\`\`\`

### var (Function-scoped, Avoid Using)
\`\`\`javascript
var oldWay = "Don't use var";
// Use let or const instead
\`\`\`

## Primitive Data Types

### 1. Number
All numbers (integers and decimals):
\`\`\`javascript
let integer = 42;
let decimal = 3.14;
let negative = -10;
let scientific = 2.5e6;  // 2,500,000
\`\`\`

### 2. String
Text data:
\`\`\`javascript
let single = 'Hello';
let double = "World";
let backticks = \`Template literal\`;
let concat = "Hello" + " " + "World";
\`\`\`

### 3. Boolean
True or false values:
\`\`\`javascript
let isActive = true;
let isComplete = false;
\`\`\`

### 4. Undefined
Variable declared but not assigned:
\`\`\`javascript
let notAssigned;
console.log(notAssigned);  // undefined
\`\`\`

### 5. Null
Intentional absence of value:
\`\`\`javascript
let empty = null;
\`\`\`

### 6. BigInt
Very large integers:
\`\`\`javascript
let bigNumber = 1234567890123456789012345n;
\`\`\`

### 7. Symbol
Unique identifiers:
\`\`\`javascript
let sym = Symbol('description');
\`\`\`

## Complex Data Types

### Object
Collection of key-value pairs:
\`\`\`javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
\`\`\`

### Array
Ordered list of values:
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];
\`\`\`

## Checking Types

### typeof Operator
\`\`\`javascript
typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (known quirk)
typeof {};          // "object"
typeof [];          // "object"
typeof function(){};// "function"
\`\`\`

## Variable Naming Rules

1. Must start with letter, $, or _
2. Can contain letters, numbers, $, _
3. Case-sensitive (age vs Age)
4. Cannot use reserved keywords
5. Use camelCase convention

\`\`\`javascript
// Good names
let firstName = "John";
let userAge = 25;
let isActive = true;
let $element = document.querySelector('#myId');
let _private = "hidden";

// Bad names
// let 1name = "John";     // Can't start with number
// let first-name = "John"; // Can't use hyphens
// let let = "John";        // Can't use keywords
\`\`\`

## Type Conversion

### Explicit Conversion
\`\`\`javascript
String(123);      // "123"
Number("456");    // 456
Boolean(1);       // true
parseInt("10");   // 10
parseFloat("3.14"); // 3.14
\`\`\`

### Implicit Conversion (Coercion)
\`\`\`javascript
"5" + 3;      // "53" (string)
"5" - 3;      // 2 (number)
"5" * "2";    // 10 (number)
\`\`\`
    `,
    codeExample: `// Variable declarations
let mutableVariable = 10;
mutableVariable = 20;  // Can change

const CONSTANT = 100;
// CONSTANT = 200;  // Error!

// Primitive types
let age = 25;              // Number
let name = "Alice";        // String
let isStudent = true;      // Boolean
let notDefined;            // Undefined
let empty = null;          // Null

// Complex types
let person = {             // Object
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let colors = ["red", "green", "blue"];  // Array

// Type checking
console.log(typeof age);          // "number"
console.log(typeof name);         // "string"
console.log(typeof isStudent);    // "boolean"
console.log(typeof person);       // "object"
console.log(typeof colors);       // "object"

// Type conversion
let numStr = "123";
let num = Number(numStr);
console.log(num);                 // 123
console.log(typeof num);          // "number"

let str = String(456);
console.log(str);                 // "456"
console.log(typeof str);          // "string"`,
    language: 'javascript',
    exercises: [
      {
        id: 'js-2-ex1',
        title: 'Working with Variables and Types',
        description: 'Practice declaring variables and working with different data types.',
        starterCode: `// 1. Declare variables for a person's information
// Use const for name, let for age

// 2. Create an object with person details

// 3. Create an array of hobbies

// 4. Check types using typeof

// 5. Convert a string to a number

`,
        solution: `// 1. Declare variables for a person's information
const personName = "Sarah Johnson";
let personAge = 28;

// 2. Create an object with person details
const person = {
    name: "Sarah Johnson",
    age: 28,
    city: "San Francisco",
    isEmployed: true
};

// 3. Create an array of hobbies
const hobbies = ["reading", "hiking", "photography", "coding"];

// 4. Check types using typeof
console.log("Name type:", typeof personName);        // string
console.log("Age type:", typeof personAge);          // number
console.log("Person type:", typeof person);          // object
console.log("Hobbies type:", typeof hobbies);        // object

// 5. Convert a string to a number
const stringNumber = "42";
const actualNumber = Number(stringNumber);
console.log("String:", stringNumber, typeof stringNumber);
console.log("Number:", actualNumber, typeof actualNumber);

// Bonus: Check if conversion was successful
console.log("Is actualNumber a number?", typeof actualNumber === 'number');`,
        language: 'javascript',
        hints: [
          'Use const for values that won\'t change',
          'Use let for values that will change',
          'Objects use curly braces {}',
          'Arrays use square brackets []',
          'typeof returns a string'
        ]
      }
    ]
  },
  {
    id: 'js-3',
    title: 'JavaScript Operators',
    description: 'Master arithmetic, comparison, logical, and assignment operators.',
    difficulty: 'beginner',
    estimatedTime: 45,
    content: `
# JavaScript Operators

Operators perform operations on values and variables.

## Arithmetic Operators

### Basic Math Operations
\`\`\`javascript
let a = 10, b = 3;

console.log(a + b);  // 13  Addition
console.log(a - b);  // 7   Subtraction
console.log(a * b);  // 30  Multiplication
console.log(a / b);  // 3.333... Division
console.log(a % b);  // 1   Modulus (remainder)
console.log(a ** b); // 1000 Exponentiation (10^3)
\`\`\`

### Increment and Decrement
\`\`\`javascript
let count = 5;

count++;     // 6  Post-increment
++count;     // 7  Pre-increment
count--;     // 6  Post-decrement
--count;     // 5  Pre-decrement

// Difference between pre and post
let x = 5;
let y = x++;  // y = 5, x = 6 (assigns then increments)
let z = ++x;  // z = 7, x = 7 (increments then assigns)
\`\`\`

## Assignment Operators

\`\`\`javascript
let x = 10;

x += 5;   // x = x + 5;  (15)
x -= 3;   // x = x - 3;  (12)
x *= 2;   // x = x * 2;  (24)
x /= 4;   // x = x / 4;  (6)
x %= 4;   // x = x % 4;  (2)
x **= 3;  // x = x ** 3; (8)
\`\`\`

## Comparison Operators

### Equality
\`\`\`javascript
5 == 5;       // true   (loose equality)
5 == "5";     // true   (type coercion)
5 === 5;      // true   (strict equality)
5 === "5";    // false  (different types)
5 != 6;       // true   (loose inequality)
5 !== "5";    // true   (strict inequality)
\`\`\`

**Always use === and !== for comparison!**

### Relational
\`\`\`javascript
10 > 5;       // true
10 < 5;       // false
10 >= 10;     // true
10 <= 9;      // false
\`\`\`

## Logical Operators

### AND (&&)
Both must be true:
\`\`\`javascript
true && true;    // true
true && false;   // false
false && true;   // false
false && false;  // false

// Short-circuit evaluation
let result = (5 > 3) && (10 < 20);  // true
\`\`\`

### OR (||)
At least one must be true:
\`\`\`javascript
true || true;    // true
true || false;   // true
false || true;   // true
false || false;  // false

// Default values
let name = userName || "Guest";  // Use userName if truthy
\`\`\`

### NOT (!)
Inverts boolean:
\`\`\`javascript
!true;   // false
!false;  // true

let isNotActive = !isActive;
\`\`\`

## String Operators

### Concatenation (+)
\`\`\`javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"

// With numbers (be careful!)
"5" + 3;    // "53" (string)
"Hello" + " " + "World";  // "Hello World"
\`\`\`

### Template Literals (Better way)
\`\`\`javascript
let name = "Alice";
let age = 25;
let message = \`My name is \${name} and I'm \${age} years old.\`;
\`\`\`

## Ternary Operator

Shorthand if-else:
\`\`\`javascript
condition ? valueIfTrue : valueIfFalse;

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";

// Nested ternary (use sparingly)
let result = score >= 90 ? "A" :
             score >= 80 ? "B" :
             score >= 70 ? "C" : "F";
\`\`\`

## Type Operators

### typeof
Returns type as string:
\`\`\`javascript
typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (quirk)
typeof {};          // "object"
typeof [];          // "object"
typeof function(){}; // "function"
\`\`\`

### instanceof
Checks if object is instance of class:
\`\`\`javascript
let arr = [1, 2, 3];
arr instanceof Array;   // true
arr instanceof Object;  // true
\`\`\`

## Nullish Coalescing (??)

Returns right side if left is null or undefined:
\`\`\`javascript
let value = null ?? "default";     // "default"
let value2 = undefined ?? "default"; // "default"
let value3 = 0 ?? "default";       // 0 (0 is not null/undefined)
let value4 = "" ?? "default";      // "" (empty string is not null/undefined)

// vs OR operator
let val1 = 0 || "default";         // "default" (0 is falsy)
let val2 = 0 ?? "default";         // 0 (0 is not null/undefined)
\`\`\`

## Optional Chaining (?.)

Safely access nested properties:
\`\`\`javascript
let user = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Without optional chaining
let city = user && user.address && user.address.city;

// With optional chaining
let city = user?.address?.city;  // "New York"
let country = user?.address?.country;  // undefined (no error)
\`\`\`

## Operator Precedence

1. Grouping: ()
2. Exponentiation: **
3. Multiplication/Division: *, /, %
4. Addition/Subtraction: +, -
5. Comparison: <, >, <=, >=
6. Equality: ==, ===, !=, !==
7. Logical AND: &&
8. Logical OR: ||
9. Ternary: ?:
10. Assignment: =, +=, -=, etc.

\`\`\`javascript
let result = 2 + 3 * 4;      // 14 (not 20)
let result2 = (2 + 3) * 4;   // 20 (grouping)
\`\`\`
    `,
    codeExample: `// Arithmetic operators
let a = 10, b = 3;
console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1
console.log("Exponent:", a ** 2);      // 100

// Comparison operators
console.log("Equal:", 5 == "5");       // true (loose)
console.log("Strict equal:", 5 === "5"); // false (strict)
console.log("Greater than:", 10 > 5);  // true
console.log("Less than:", 10 < 5);     // false

// Logical operators
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense;
console.log("Can drive:", canDrive);   // true

// Ternary operator
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);        // "Adult"

// Nullish coalescing
let name = null;
let displayName = name ?? "Guest";
console.log("Display name:", displayName); // "Guest"

// Optional chaining
let user = { name: "John", address: { city: "NYC" } };
console.log("City:", user?.address?.city);     // "NYC"
console.log("Country:", user?.address?.country); // undefined

// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);  // "John Doe"

// Template literal (better)
let greeting = \`Hello, \${firstName} \${lastName}!\`;
console.log(greeting);  // "Hello, John Doe!"`,
    language: 'javascript'
  },
  {
    id: 'js-4',
    title: 'JavaScript Strings and String Methods',
    description: 'Master string manipulation and all string methods.',
    difficulty: 'beginner',
    estimatedTime: 50,
    content: `
# JavaScript Strings and String Methods

Strings represent text in JavaScript. They have many built-in methods for manipulation.

## Creating Strings

\`\`\`javascript
let single = 'Single quotes';
let double = "Double quotes";
let backticks = \`Template literal\`;

// Multi-line strings
let multiLine = \`Line 1
Line 2
Line 3\`;

// Escape characters
let escaped = "He said \\"Hello\\"";
let newLine = "Line 1\\nLine 2";
let tab = "Column 1\\tColumn 2";
\`\`\`

## Template Literals

\`\`\`javascript
let name = "Alice";
let age = 25;

// Interpolation
let message = \`My name is \${name} and I'm \${age} years old.\`;

// Expressions
let result = \`The sum is \${10 + 20}\`;

// Multi-line
let html = \`
  <div>
    <h1>\${name}</h1>
    <p>Age: \${age}</p>
  </div>
\`;
\`\`\`

## String Properties

### length
\`\`\`javascript
let str = "Hello";
console.log(str.length);  // 5
\`\`\`

## String Methods

### Accessing Characters

\`\`\`javascript
let str = "Hello World";

str[0];              // "H"
str.charAt(0);       // "H"
str.charCodeAt(0);   // 72 (Unicode)
str.at(-1);          // "d" (last character)
\`\`\`

### Searching

\`\`\`javascript
let str = "Hello World";

str.indexOf("o");           // 4 (first occurrence)
str.lastIndexOf("o");       // 7 (last occurrence)
str.indexOf("o", 5);        // 7 (start from index 5)
str.indexOf("xyz");         // -1 (not found)

str.includes("World");      // true
str.startsWith("Hello");    // true
str.endsWith("World");      // true

str.search("World");        // 6 (like indexOf but accepts regex)
\`\`\`

### Extracting Parts

\`\`\`javascript
let str = "Hello World";

str.slice(0, 5);      // "Hello" (start, end)
str.slice(6);         // "World" (from index to end)
str.slice(-5);        // "World" (from end)

str.substring(0, 5);  // "Hello" (similar to slice)
str.substr(0, 5);     // "Hello" (deprecated)
\`\`\`

### Changing Case

\`\`\`javascript
let str = "Hello World";

str.toLowerCase();    // "hello world"
str.toUpperCase();    // "HELLO WORLD"
\`\`\`

### Trimming Whitespace

\`\`\`javascript
let str = "  Hello World  ";

str.trim();           // "Hello World"
str.trimStart();      // "Hello World  "
str.trimEnd();        // "  Hello World"
\`\`\`

### Replacing

\`\`\`javascript
let str = "Hello World";

str.replace("World", "JavaScript");   // "Hello JavaScript"
str.replaceAll("l", "L");             // "HeLLo WorLd"

// With regex
str.replace(/o/g, "0");               // "Hell0 W0rld"
\`\`\`

### Splitting and Joining

\`\`\`javascript
let str = "apple,banana,orange";
let arr = str.split(",");             // ["apple", "banana", "orange"]

let words = "Hello World".split(" "); // ["Hello", "World"]
let chars = "Hello".split("");        // ["H", "e", "l", "l", "o"]

// Join array back to string
arr.join(", ");                       // "apple, banana, orange"
\`\`\`

### Repeating

\`\`\`javascript
"Ha".repeat(3);       // "HaHaHa"
"*".repeat(5);        // "*****"
\`\`\`

### Padding

\`\`\`javascript
"5".padStart(3, "0");     // "005"
"5".padEnd(3, "0");       // "500"
"Hello".padStart(10);     // "     Hello"
\`\`\`

### Concatenation

\`\`\`javascript
let str1 = "Hello";
let str2 = "World";

str1.concat(" ", str2);   // "Hello World"
// Prefer: str1 + " " + str2 or template literals
\`\`\`

### Advanced String Operations

\`\`\`javascript
// Check if string contains only numbers
let isNumeric = "12345".match(/^\\d+$/);

// Extract numbers from string
let text = "I have 2 apples and 3 oranges";
let numbers = text.match(/\\d+/g);  // ["2", "3"]

// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse a string
function reverse(str) {
    return str.split("").reverse().join("");
}

// Check if palindrome
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
\`\`\`

## String Comparison

\`\`\`javascript
"a" < "b";        // true (lexicographical)
"apple" < "banana"; // true

// Case-sensitive
"A" < "a";        // true (uppercase < lowercase in Unicode)

// Locale-aware comparison
"ä".localeCompare("z");  // Depends on locale
\`\`\`

## Common String Patterns

\`\`\`javascript
// Title Case
function toTitleCase(str) {
    return str.replace(/\\w\\S*/g, txt => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

// Truncate with ellipsis
function truncate(str, maxLength) {
    return str.length > maxLength 
        ? str.slice(0, maxLength) + "..." 
        : str;
}

// Count occurrences
function countOccurrences(str, target) {
    return (str.match(new RegExp(target, "g")) || []).length;
}

// Remove HTML tags
function stripHTML(html) {
    return html.replace(/<[^>]*>/g, "");
}
\`\`\`
    `,
    codeExample: `// Creating strings
let name = "JavaScript";
let version = 'ES6';
let message = \`Learning \${name} \${version}\`;

console.log(message);  // "Learning JavaScript ES6"

// String properties
console.log(name.length);  // 10

// Accessing characters
console.log(name[0]);        // "J"
console.log(name.charAt(0)); // "J"
console.log(name.at(-1));    // "t"

// Searching
console.log(name.indexOf("Script"));     // 4
console.log(name.includes("Java"));      // true
console.log(name.startsWith("Java"));    // true

// Extracting
console.log(name.slice(0, 4));          // "Java"
console.log(name.slice(-6));            // "Script"

// Case conversion
console.log(name.toLowerCase());        // "javascript"
console.log(name.toUpperCase());        // "JAVASCRIPT"

// Replacing
let greeting = "Hello World";
console.log(greeting.replace("World", "JavaScript")); // "Hello JavaScript"

// Splitting
let words = "apple,banana,orange";
let fruits = words.split(",");
console.log(fruits);  // ["apple", "banana", "orange"]

// Trimming
let padded = "  Hello  ";
console.log(padded.trim());  // "Hello"

// Template literals for complex strings
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let bio = \`
Name: \${user.firstName} \${user.lastName}
Age: \${user.age}
Status: \${user.age >= 18 ? "Adult" : "Minor"}
\`;

console.log(bio);`,
    language: 'javascript'
  },
  {
    id: 'js-5',
    title: 'JavaScript Conditionals',
    description: 'Master if/else, switch, and ternary operators for decision-making.',
    difficulty: 'beginner',
    estimatedTime: 45,
    content: `
# JavaScript Conditionals

Conditionals allow your code to make decisions and execute different code based on conditions.

## If Statement

\`\`\`javascript
if (condition) {
    // Code executes if condition is true
}

let age = 18;
if (age >= 18) {
    console.log("You can vote");
}
\`\`\`

## If-Else Statement

\`\`\`javascript
if (condition) {
    // Code if true
} else {
    // Code if false
}

let temperature = 25;
if (temperature > 30) {
    console.log("It's hot");
} else {
    console.log("It's not hot");
}
\`\`\`

## If-Else If-Else

\`\`\`javascript
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else {
    // Code if all conditions are false
}

let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}
\`\`\`

## Truthy and Falsy Values

### Falsy Values (evaluate to false)
\`\`\`javascript
false
0
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN
\`\`\`

### Truthy Values (everything else)
\`\`\`javascript
true
any non-zero number
any non-empty string
{}  (empty object)
[]  (empty array)
function() {}
\`\`\`

### Examples
\`\`\`javascript
if (0) {
    console.log("Won't run");  // 0 is falsy
}

if ("") {
    console.log("Won't run");  // empty string is falsy
}

if ("hello") {
    console.log("Will run");   // non-empty string is truthy
}

if ([]) {
    console.log("Will run");   // empty array is truthy
}
\`\`\`

## Switch Statement

Better for multiple specific values:

\`\`\`javascript
switch (expression) {
    case value1:
        // Code
        break;
    case value2:
        // Code
        break;
    default:
        // Code if no match
}

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("End of work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek");
}
\`\`\`

**Important**: Always use \`break\` to prevent fall-through!

\`\`\`javascript
// Without break (fall-through)
let x = 1;
switch (x) {
    case 1:
        console.log("One");
        // No break! Falls through
    case 2:
        console.log("Two");
        break;
}
// Output: "One" then "Two"
\`\`\`

## Ternary Operator

Shorthand for simple if-else:

\`\`\`javascript
condition ? valueIfTrue : valueIfFalse;

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Multiple ternaries (use sparingly!)
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "F";
\`\`\`

## Logical Operators in Conditionals

### AND (&&)
\`\`\`javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");
}
\`\`\`

### OR (||)
\`\`\`javascript
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("Day off!");
}
\`\`\`

### NOT (!)
\`\`\`javascript
let isRaining = false;

if (!isRaining) {
    console.log("No umbrella needed");
}
\`\`\`

## Short-Circuit Evaluation

### AND (&&)
Stops at first falsy value:
\`\`\`javascript
let user = { name: "John" };
let name = user && user.name;  // "John"

let nothing = null && something;  // null (doesn't evaluate something)
\`\`\`

### OR (||)
Stops at first truthy value:
\`\`\`javascript
let userName = "";
let displayName = userName || "Guest";  // "Guest"

let firstName = "Alice";
let name = firstName || "Anonymous";  // "Alice"
\`\`\`

## Nullish Coalescing (??)

Only null/undefined are falsy:
\`\`\`javascript
let count = 0;

// With OR (wrong!)
let value1 = count || 10;  // 10 (0 is falsy)

// With ?? (correct!)
let value2 = count ?? 10;  // 0 (0 is not null/undefined)
\`\`\`

## Guard Clauses

Exit early for cleaner code:

\`\`\`javascript
// Without guard clause
function processUser(user) {
    if (user) {
        if (user.age >= 18) {
            if (user.verified) {
                // Process user
                console.log("Processing...");
            }
        }
    }
}

// With guard clauses (better!)
function processUser(user) {
    if (!user) return;
    if (user.age < 18) return;
    if (!user.verified) return;
    
    // Process user
    console.log("Processing...");
}
\`\`\`

## Common Patterns

\`\`\`javascript
// Range checking
let age = 25;
if (age >= 18 && age <= 65) {
    console.log("Working age");
}

// Multiple conditions
let role = "admin";
if (role === "admin" || role === "moderator" || role === "owner") {
    console.log("Has privileges");
}

// Better: use array
if (["admin", "moderator", "owner"].includes(role)) {
    console.log("Has privileges");
}

// Validating input
function greet(name) {
    if (!name || typeof name !== "string") {
        return "Invalid name";
    }
    return \`Hello, \${name}!\`;
}

// Default values
function createUser(name, age) {
    name = name || "Anonymous";
    age = age ?? 0;
    return { name, age };
}
\`\`\`
    `,
    codeExample: `// Basic if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
}

// if-else
let temperature = 25;
if (temperature > 30) {
    console.log("It's hot!");
} else {
    console.log("It's comfortable");
}

// if-else if-else
let score = 85;
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Grade:", grade);  // "B"

// Switch statement
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend";
}
console.log(dayName);  // "Wednesday"

// Ternary operator
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);  // "Yes"

// Logical operators
let hasTicket = true;
let hasID = true;
if (hasTicket && hasID) {
    console.log("Can enter venue");
}

// Truthy/Falsy
let userName = "";
let displayName = userName || "Guest";
console.log("Welcome,", displayName);  // "Welcome, Guest"

// Nullish coalescing
let count = 0;
let result = count ?? 10;
console.log(result);  // 0 (not 10)`,
    language: 'javascript'
  },
  {
    id: 'js-6',
    title: 'JavaScript Functions',
    description: 'Master function declarations, expressions, arrow functions, and parameters.',
    difficulty: 'beginner',
    estimatedTime: 55,
    content: `
# JavaScript Functions

Functions are reusable blocks of code that perform specific tasks. They're fundamental to JavaScript programming.

## Function Declaration

Traditional way to define functions:

\`\`\`javascript
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));  // "Hello, Alice"
\`\`\`

### Function Syntax
\`\`\`javascript
function functionName(parameter1, parameter2) {
    // Code to execute
    return value;  // Optional
}
\`\`\`

### Hoisting
Function declarations are hoisted (available before definition):
\`\`\`javascript
sayHello();  // Works!

function sayHello() {
    console.log("Hello!");
}
\`\`\`

## Function Expression

Assign function to a variable:

\`\`\`javascript
const greet = function(name) {
    return "Hello, " + name;
};

console.log(greet("Bob"));  // "Hello, Bob"
\`\`\`

### Not Hoisted
\`\`\`javascript
// sayHi();  // Error! Cannot access before initialization

const sayHi = function() {
    console.log("Hi!");
};
\`\`\`

## Arrow Functions

Modern, concise syntax:

\`\`\`javascript
// Basic syntax
const greet = (name) => {
    return "Hello, " + name;
};

// Single parameter (no parentheses needed)
const square = x => x * x;

// No parameters
const random = () => Math.random();

// Multiple parameters
const add = (a, b) => a + b;

// Multi-line with return
const complexCalc = (a, b) => {
    let sum = a + b;
    let product = a * b;
    return { sum, product };
};

// Implicit return (one expression)
const double = x => x * 2;

// Returning object (needs parentheses)
const makeUser = (name, age) => ({ name, age });
\`\`\`

### Arrow Function Differences
- No \`this\` binding (inherits from parent scope)
- Cannot be used as constructors
- No \`arguments\` object
- More concise syntax

## Function Parameters

### Basic Parameters
\`\`\`javascript
function greet(firstName, lastName) {
    return \`Hello, \${firstName} \${lastName}\`;
}

console.log(greet("John", "Doe"));  // "Hello, John Doe"
\`\`\`

### Default Parameters
\`\`\`javascript
function greet(name = "Guest", greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

console.log(greet());                    // "Hello, Guest!"
console.log(greet("Alice"));            // "Hello, Alice!"
console.log(greet("Bob", "Hi"));        // "Hi, Bob!"
\`\`\`

### Rest Parameters
Collect remaining arguments into array:
\`\`\`javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15

function introduce(firstName, lastName, ...hobbies) {
    console.log(\`\${firstName} \${lastName}\`);
    console.log("Hobbies:", hobbies.join(", "));
}

introduce("John", "Doe", "reading", "gaming", "hiking");
// John Doe
// Hobbies: reading, gaming, hiking
\`\`\`

## Return Values

### Basic Return
\`\`\`javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3);  // 8
\`\`\`

### Multiple Return Points
\`\`\`javascript
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}
\`\`\`

### Returning Objects
\`\`\`javascript
function createUser(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            return \`Hi, I'm \${this.name}\`;
        }
    };
}

let user = createUser("Alice", 25);
console.log(user.greet());  // "Hi, I'm Alice"
\`\`\`

### No Return (undefined)
\`\`\`javascript
function logMessage(message) {
    console.log(message);
    // No return statement
}

let result = logMessage("Hello");
console.log(result);  // undefined
\`\`\`

## Function Scope

### Local Variables
\`\`\`javascript
function myFunction() {
    let localVar = "I'm local";
    console.log(localVar);  // Works
}

myFunction();
// console.log(localVar);  // Error: not defined
\`\`\`

### Nested Functions
\`\`\`javascript
function outer() {
    let outerVar = "outer";
    
    function inner() {
        let innerVar = "inner";
        console.log(outerVar);  // Can access outer
        console.log(innerVar);  // Can access own
    }
    
    inner();
    // console.log(innerVar);  // Error: not accessible
}
\`\`\`

### Closures
Functions remember their outer scope:
\`\`\`javascript
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
\`\`\`

## Function Methods

### call()
Call function with specific \`this\` value:
\`\`\`javascript
function greet(greeting) {
    return \`\${greeting}, \${this.name}!\`;
}

let user = { name: "Alice" };
console.log(greet.call(user, "Hello"));  // "Hello, Alice!"
\`\`\`

### apply()
Like call, but arguments as array:
\`\`\`javascript
function introduce(greeting, punctuation) {
    return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
}

let person = { name: "Bob" };
console.log(introduce.apply(person, ["Hi", "!"]));  // "Hi, I'm Bob!"
\`\`\`

### bind()
Create new function with bound \`this\`:
\`\`\`javascript
let user = {
    name: "Charlie",
    greet: function() {
        return \`Hello, \${this.name}\`;
    }
};

let greetFunction = user.greet;
console.log(greetFunction());  // "Hello, undefined"

let boundGreet = user.greet.bind(user);
console.log(boundGreet());  // "Hello, Charlie"
\`\`\`

## Higher-Order Functions

Functions that take or return functions:

\`\`\`javascript
// Takes function as argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);
// 0
// 1
// 2

// Returns function
function multiplier(factor) {
    return number => number * factor;
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
\`\`\`

## Callback Functions

Functions passed as arguments:

\`\`\`javascript
function processData(data, callback) {
    let processed = data.toUpperCase();
    callback(processed);
}

processData("hello", function(result) {
    console.log(result);  // "HELLO"
});

// With arrow function
processData("world", result => console.log(result));  // "WORLD"
\`\`\`

## IIFE (Immediately Invoked Function Expression)

Function that runs immediately:

\`\`\`javascript
(function() {
    console.log("I run immediately!");
})();

// With parameters
(function(name) {
    console.log("Hello, " + name);
})("Alice");

// Arrow IIFE
(() => {
    console.log("Arrow IIFE");
})();

// Use case: Private scope
const counter = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();

console.log(counter.increment());  // 1
console.log(counter.getCount());   // 1
\`\`\`

## Recursion

Function calling itself:

\`\`\`javascript
// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));  // 120

// Countdown
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}

countdown(5);  // 5, 4, 3, 2, 1, 0

// Sum array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4]));  // 10
\`\`\`

## Best Practices

1. **Use descriptive names**: \`calculateTotal\` not \`calc\`
2. **Keep functions small**: One task per function
3. **Use arrow functions** for short operations
4. **Avoid side effects**: Return values instead of modifying global state
5. **Use default parameters** instead of checking for undefined
6. **Document complex functions** with comments

\`\`\`javascript
// Good: Pure function
function calculateTax(price, taxRate = 0.1) {
    return price * taxRate;
}

// Bad: Side effects
let total = 0;
function addToTotal(amount) {
    total += amount;  // Modifies global variable
}
\`\`\`
    `,
    codeExample: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));  // "Hello, Alice!"

// Function expression
const square = function(x) {
    return x * x;
};
console.log(square(5));  // 25

// Arrow function
const double = x => x * 2;
console.log(double(7));  // 14

// Arrow function with multiple parameters
const add = (a, b) => a + b;
console.log(add(3, 4));  // 7

// Default parameters
const greetWithDefault = (name = "Guest", greeting = "Hello") => {
    return \`\${greeting}, \${name}!\`;
};
console.log(greetWithDefault());            // "Hello, Guest!"
console.log(greetWithDefault("Bob"));       // "Hello, Bob!"
console.log(greetWithDefault("Alice", "Hi")); // "Hi, Alice!"

// Rest parameters
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3, 4, 5));  // 15

// Higher-order function
function multiplier(factor) {
    return number => number * factor;
}
const triple = multiplier(3);
console.log(triple(5));  // 15

// Callback function
function processArray(arr, callback) {
    return arr.map(callback);
}
const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Closure
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getCount());   // 2

// Recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));  // 120`,
    language: 'javascript',
    exercises: [
      {
        id: 'js-6-ex1',
        title: 'Create Utility Functions',
        description: 'Practice creating different types of functions with various parameters.',
        starterCode: `// 1. Create a function that calculates the area of a rectangle
// Use default parameters for width and height (default: 1)

// 2. Create an arrow function that converts Celsius to Fahrenheit
// Formula: (celsius * 9/5) + 32

// 3. Create a function that takes unlimited numbers and returns their average
// Use rest parameters

// 4. Create a function that returns a greeting function
// The returned function should use the provided greeting

`,
        solution: `// 1. Calculate area of rectangle with defaults
function calculateArea(width = 1, height = 1) {
    return width * height;
}
console.log(calculateArea(5, 3));   // 15
console.log(calculateArea(5));      // 5
console.log(calculateArea());       // 1

// 2. Celsius to Fahrenheit converter
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(celsiusToFahrenheit(25));  // 77

// 3. Calculate average of unlimited numbers
function average(...numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}
console.log(average(10, 20, 30));        // 20
console.log(average(5, 10, 15, 20));     // 12.5
console.log(average(100));                // 100

// 4. Greeting function factory
function createGreeter(greeting) {
    return function(name) {
        return \`\${greeting}, \${name}!\`;
    };
}
const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
console.log(sayHello("Alice"));  // "Hello, Alice!"
console.log(sayHi("Bob"));       // "Hi, Bob!"

// Alternative with arrow functions
const createGreeterArrow = greeting => name => \`\${greeting}, \${name}!\`;
const sayHey = createGreeterArrow("Hey");
console.log(sayHey("Charlie"));  // "Hey, Charlie!"`,
        language: 'javascript',
        hints: [
          'Default parameters: function name(param = defaultValue) {}',
          'Arrow functions: const name = (params) => expression',
          'Rest parameters: function name(...args) {} collects all arguments into array',
          'Returning functions: return another function from your function',
          'Use reduce() to sum array elements'
        ]
      }
    ]
  },
  {
    id: 'js-7',
    title: 'JavaScript Arrays - Basics',
    description: 'Learn array creation, access, modification, and basic operations.',
    difficulty: 'beginner',
    estimatedTime: 45,
    content: `
# JavaScript Arrays - Basics

Arrays store ordered collections of values. They're one of the most important data structures in JavaScript.

## Creating Arrays

\`\`\`javascript
// Array literal (most common)
let fruits = ["apple", "banana", "orange"];

// Empty array
let empty = [];

// Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Array with length
let sized = new Array(5);  // [empty × 5]

// Mixed types (possible but not recommended)
let mixed = [1, "two", true, null, { name: "object" }];
\`\`\`

## Accessing Elements

### By Index (0-based)
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);   // "apple"
console.log(fruits[1]);   // "banana"
console.log(fruits[2]);   // "orange"
console.log(fruits[3]);   // undefined

// Negative indices don't work like Python
console.log(fruits[-1]);  // undefined
\`\`\`

### at() Method (ES2022)
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits.at(0));    // "apple"
console.log(fruits.at(-1));   // "orange" (last item)
console.log(fruits.at(-2));   // "banana"
\`\`\`

## Array Length

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits.length);  // 3

// Modifying length
fruits.length = 2;
console.log(fruits);  // ["apple", "banana"]

fruits.length = 5;
console.log(fruits);  // ["apple", "banana", empty × 3]
\`\`\`

## Modifying Elements

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

// Change element
fruits[1] = "grape";
console.log(fruits);  // ["apple", "grape", "orange"]

// Add beyond length (creates sparse array)
fruits[5] = "mango";
console.log(fruits);  // ["apple", "grape", "orange", empty × 2, "mango"]
\`\`\`

## Adding Elements

### push() - Add to End
\`\`\`javascript
let fruits = ["apple", "banana"];

fruits.push("orange");
console.log(fruits);  // ["apple", "banana", "orange"]

// Add multiple
fruits.push("grape", "mango");
console.log(fruits);  // ["apple", "banana", "orange", "grape", "mango"]

// Returns new length
let newLength = fruits.push("kiwi");
console.log(newLength);  // 6
\`\`\`

### unshift() - Add to Beginning
\`\`\`javascript
let fruits = ["banana", "orange"];

fruits.unshift("apple");
console.log(fruits);  // ["apple", "banana", "orange"]

// Add multiple
fruits.unshift("grape", "mango");
console.log(fruits);  // ["grape", "mango", "apple", "banana", "orange"]
\`\`\`

## Removing Elements

### pop() - Remove from End
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

let removed = fruits.pop();
console.log(removed);  // "orange"
console.log(fruits);   // ["apple", "banana"]
\`\`\`

### shift() - Remove from Beginning
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

let removed = fruits.shift();
console.log(removed);  // "apple"
console.log(fruits);   // ["banana", "orange"]
\`\`\`

### splice() - Remove from Anywhere
\`\`\`javascript
let fruits = ["apple", "banana", "orange", "grape"];

// splice(startIndex, deleteCount, ...itemsToAdd)
fruits.splice(1, 2);  // Remove 2 items starting at index 1
console.log(fruits);  // ["apple", "grape"]

// Remove and add
let colors = ["red", "green", "blue", "yellow"];
colors.splice(2, 1, "orange", "purple");
console.log(colors);  // ["red", "green", "orange", "purple", "yellow"]
\`\`\`

## Finding Elements

### indexOf()
\`\`\`javascript
let fruits = ["apple", "banana", "orange", "banana"];

console.log(fruits.indexOf("banana"));     // 1 (first occurrence)
console.log(fruits.indexOf("grape"));      // -1 (not found)
console.log(fruits.indexOf("banana", 2));  // 3 (start search from index 2)
\`\`\`

### lastIndexOf()
\`\`\`javascript
let fruits = ["apple", "banana", "orange", "banana"];

console.log(fruits.lastIndexOf("banana"));  // 3 (last occurrence)
\`\`\`

### includes()
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana"));  // true
console.log(fruits.includes("grape"));   // false
\`\`\`

## Extracting Subarrays

### slice()
\`\`\`javascript
let fruits = ["apple", "banana", "orange", "grape", "mango"];

// slice(start, end) - end not included
console.log(fruits.slice(1, 3));    // ["banana", "orange"]
console.log(fruits.slice(2));       // ["orange", "grape", "mango"]
console.log(fruits.slice(-2));      // ["grape", "mango"]
console.log(fruits.slice(1, -1));   // ["banana", "orange", "grape"]

// Original unchanged
console.log(fruits);  // ["apple", "banana", "orange", "grape", "mango"]
\`\`\`

## Combining Arrays

### concat()
\`\`\`javascript
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "lettuce"];

let food = fruits.concat(vegetables);
console.log(food);  // ["apple", "banana", "carrot", "lettuce"]

// Concat multiple
let more = fruits.concat(vegetables, ["bread", "milk"]);
console.log(more);  // ["apple", "banana", "carrot", "lettuce", "bread", "milk"]

// Originals unchanged
console.log(fruits);      // ["apple", "banana"]
console.log(vegetables);  // ["carrot", "lettuce"]
\`\`\`

### Spread Operator (...)
\`\`\`javascript
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "lettuce"];

let food = [...fruits, ...vegetables];
console.log(food);  // ["apple", "banana", "carrot", "lettuce"]

// Add items in between
let menu = [...fruits, "pizza", ...vegetables, "burger"];
console.log(menu);  // ["apple", "banana", "pizza", "carrot", "lettuce", "burger"]
\`\`\`

## Converting to String

### join()
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits.join());       // "apple,banana,orange"
console.log(fruits.join(", "));   // "apple, banana, orange"
console.log(fruits.join(" - "));  // "apple - banana - orange"
console.log(fruits.join(""));     // "applebananaorange"
\`\`\`

### toString()
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

console.log(fruits.toString());  // "apple,banana,orange"
\`\`\`

## Reversing and Sorting

### reverse()
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]

// Note: Modifies original array!
\`\`\`

### sort()
\`\`\`javascript
let fruits = ["banana", "apple", "orange"];

fruits.sort();
console.log(fruits);  // ["apple", "banana", "orange"]

// Numbers (be careful!)
let numbers = [10, 5, 40, 25];
numbers.sort();
console.log(numbers);  // [10, 25, 40, 5] - Sorted as strings!

// Correct number sorting
numbers.sort((a, b) => a - b);
console.log(numbers);  // [5, 10, 25, 40]
\`\`\`

## Checking If Array

\`\`\`javascript
let fruits = ["apple", "banana"];
let notArray = "string";

console.log(Array.isArray(fruits));     // true
console.log(Array.isArray(notArray));   // false
console.log(typeof fruits);              // "object" (not helpful!)
\`\`\`

## Multi-dimensional Arrays

\`\`\`javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]);  // 1
console.log(matrix[1][2]);  // 6
console.log(matrix[2][1]);  // 8

// Nested arrays
let nested = [
    ["apple", "banana"],
    ["carrot", "lettuce"],
    ["bread", "milk"]
];

console.log(nested[0][1]);  // "banana"
console.log(nested[2][0]);  // "bread"
\`\`\`

## Copying Arrays

\`\`\`javascript
let original = [1, 2, 3];

// Wrong - Reference copy
let wrong = original;
wrong.push(4);
console.log(original);  // [1, 2, 3, 4] - Original changed!

// Correct - Shallow copy
let copy1 = [...original];
let copy2 = original.slice();
let copy3 = Array.from(original);

copy1.push(5);
console.log(original);  // [1, 2, 3, 4] - Not affected
console.log(copy1);     // [1, 2, 3, 4, 5]
\`\`\`

## Common Patterns

\`\`\`javascript
// Get last element
let arr = [1, 2, 3, 4, 5];
let last = arr[arr.length - 1];  // 5
let last2 = arr.at(-1);          // 5

// Remove specific element
let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("banana");
if (index > -1) {
    fruits.splice(index, 1);
}
console.log(fruits);  // ["apple", "orange"]

// Clear array
let numbers = [1, 2, 3, 4, 5];
numbers.length = 0;
console.log(numbers);  // []

// Fill array with values
let zeros = new Array(5).fill(0);
console.log(zeros);  // [0, 0, 0, 0, 0]
\`\`\`
    `,
    codeExample: `// Creating arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let mixed = [1, "two", true, null];

console.log(fruits);  // ["apple", "banana", "orange"]

// Accessing elements
console.log(fruits[0]);      // "apple"
console.log(fruits.at(-1));  // "orange" (last item)
console.log(fruits.length);  // 3

// Adding elements
fruits.push("grape");        // Add to end
console.log(fruits);         // ["apple", "banana", "orange", "grape"]

fruits.unshift("mango");     // Add to beginning
console.log(fruits);         // ["mango", "apple", "banana", "orange", "grape"]

// Removing elements
let last = fruits.pop();     // Remove from end
console.log(last);           // "grape"

let first = fruits.shift();  // Remove from beginning
console.log(first);          // "mango"

console.log(fruits);         // ["apple", "banana", "orange"]

// Finding elements
console.log(fruits.indexOf("banana"));  // 1
console.log(fruits.includes("apple"));  // true

// Slicing
let citrus = fruits.slice(1, 3);
console.log(citrus);  // ["banana", "orange"]

// Combining arrays
let vegetables = ["carrot", "lettuce"];
let food = [...fruits, ...vegetables];
console.log(food);  // ["apple", "banana", "orange", "carrot", "lettuce"]

// Joining
let sentence = fruits.join(", ");
console.log(sentence);  // "apple, banana, orange"

// Sorting
let unsorted = ["banana", "apple", "orange"];
unsorted.sort();
console.log(unsorted);  // ["apple", "banana", "orange"]

// Reversing
let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums);  // [5, 4, 3, 2, 1]`,
    language: 'javascript',
    exercises: [
      {
        id: 'js-7-ex1',
        title: 'Array Manipulation',
        description: 'Practice basic array operations.',
        starterCode: `// 1. Create an array of your top 5 favorite movies

// 2. Add a movie to the end

// 3. Add a movie to the beginning

// 4. Remove the last movie

// 5. Get the second and third movies (use slice)

// 6. Find the index of a specific movie

// 7. Check if a movie is in the array

// 8. Create a comma-separated string of all movies

`,
        solution: `// 1. Create array of favorite movies
let movies = [
    "The Shawshank Redemption",
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Dark Knight"
];

console.log("Original:", movies);

// 2. Add to end
movies.push("Pulp Fiction");
console.log("After push:", movies);

// 3. Add to beginning
movies.unshift("The Godfather");
console.log("After unshift:", movies);

// 4. Remove last movie
let removed = movies.pop();
console.log("Removed:", removed);
console.log("After pop:", movies);

// 5. Get second and third movies
let subset = movies.slice(1, 3);
console.log("Second and third:", subset);
// ["Inception", "The Matrix"]

// 6. Find index
let inceptionIndex = movies.indexOf("Inception");
console.log("Index of Inception:", inceptionIndex);  // 1

// 7. Check if movie exists
let hasMatrix = movies.includes("The Matrix");
console.log("Has The Matrix?", hasMatrix);  // true

let hasTitanic = movies.includes("Titanic");
console.log("Has Titanic?", hasTitanic);  // false

// 8. Create comma-separated string
let movieList = movies.join(", ");
console.log("Movie list:", movieList);

// Bonus: Sort alphabetically
let sorted = [...movies].sort();
console.log("Sorted:", sorted);

// Bonus: Get last movie
let lastMovie = movies.at(-1);
console.log("Last movie:", lastMovie);`,
        language: 'javascript',
        hints: [
          'Use push() to add to end, unshift() to add to beginning',
          'Use pop() to remove from end, shift() to remove from beginning',
          'slice(start, end) extracts a portion (end not included)',
          'indexOf() returns -1 if not found',
          'includes() returns true/false',
          'join(separator) combines array elements into string'
        ]
      }
    ]
  },
  {
    id: 'js-8',
    title: 'JavaScript Array Methods',
    description: 'Master powerful array methods: map, filter, reduce, forEach, find, and more.',
    difficulty: 'intermediate',
    estimatedTime: 60,
    content: `
# JavaScript Array Methods

Array methods are powerful tools for manipulating and transforming arrays. They make your code cleaner and more functional.

## Iterating Methods

### forEach()
Execute function for each element (no return value):

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});
// 2, 4, 6, 8, 10

// With arrow function
numbers.forEach(num => console.log(num * 2));

// With index and array
numbers.forEach((num, index, arr) => {
    console.log(\`Index \${index}: \${num}\`);
});
\`\`\`

## Transforming Methods

### map()
Create new array by transforming each element:

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

let squared = numbers.map(num => num ** 2);
console.log(squared);  // [1, 4, 9, 16, 25]

// With objects
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

let names = users.map(user => user.name);
console.log(names);  // ["Alice", "Bob"]

let userInfo = users.map(user => \`\${user.name} is \${user.age}\`);
console.log(userInfo);  // ["Alice is 25", "Bob is 30"]
\`\`\`

### filter()
Create new array with elements that pass test:

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6, 8, 10]

let greaterThanFive = numbers.filter(num => num > 5);
console.log(greaterThanFive);  // [6, 7, 8, 9, 10]

// With objects
let users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 35, active: true }
];

let activeUsers = users.filter(user => user.active);
console.log(activeUsers);  // Alice and Charlie

let over30 = users.filter(user => user.age > 30);
console.log(over30);  // [Charlie]
\`\`\`

### reduce()
Reduce array to single value:

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// Product of all numbers
let product = numbers.reduce((total, num) => total * num, 1);
console.log(product);  // 120

// Find maximum
let max = numbers.reduce((max, num) => num > max ? num : max);
console.log(max);  // 5

// Count occurrences
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);  // { apple: 3, banana: 2, orange: 1 }

// Flatten array
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);  // [1, 2, 3, 4, 5, 6]
\`\`\`

## Finding Methods

### find()
Return first element that passes test:

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);  // 2

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let user = users.find(user => user.id === 2);
console.log(user);  // { id: 2, name: "Bob" }

let notFound = numbers.find(num => num > 10);
console.log(notFound);  // undefined
\`\`\`

### findIndex()
Return index of first element that passes test:

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

let index = numbers.findIndex(num => num % 2 === 0);
console.log(index);  // 1 (index of first even number: 2)

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

let userIndex = users.findIndex(user => user.name === "Bob");
console.log(userIndex);  // 1

let notFound = numbers.findIndex(num => num > 10);
console.log(notFound);  // -1
\`\`\`

## Testing Methods

### some()
Check if at least one element passes test:

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);  // true

let hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);  // false

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

let hasAdult = users.some(user => user.age >= 18);
console.log(hasAdult);  // true
\`\`\`

### every()
Check if all elements pass test:

\`\`\`javascript
let numbers = [2, 4, 6, 8, 10];

let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);  // true

let allPositive = numbers.every(num => num > 0);
console.log(allPositive);  // true

let allLarge = numbers.every(num => num > 5);
console.log(allLarge);  // false

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

let allAdults = users.every(user => user.age >= 18);
console.log(allAdults);  // true
\`\`\`

## Other Useful Methods

### flat()
Flatten nested arrays:

\`\`\`javascript
let nested = [1, [2, 3], [4, [5, 6]]];

let flat1 = nested.flat();
console.log(flat1);  // [1, 2, 3, 4, [5, 6]]

let flat2 = nested.flat(2);
console.log(flat2);  // [1, 2, 3, 4, 5, 6]

let flatInfinity = nested.flat(Infinity);
console.log(flatInfinity);  // [1, 2, 3, 4, 5, 6]
\`\`\`

### flatMap()
Map then flatten by one level:

\`\`\`javascript
let numbers = [1, 2, 3];

let doubled = numbers.flatMap(num => [num, num * 2]);
console.log(doubled);  // [1, 2, 2, 4, 3, 6]

let sentences = ["Hello world", "How are you"];
let words = sentences.flatMap(sentence => sentence.split(" "));
console.log(words);  // ["Hello", "world", "How", "are", "you"]
\`\`\`

### fill()
Fill array with static value:

\`\`\`javascript
let arr = [1, 2, 3, 4, 5];

arr.fill(0);
console.log(arr);  // [0, 0, 0, 0, 0]

let arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2, 4);  // Fill from index 2 to 4
console.log(arr2);  // [1, 2, 0, 0, 5]

// Create array filled with value
let zeros = new Array(5).fill(0);
console.log(zeros);  // [0, 0, 0, 0, 0]
\`\`\`

### from()
Create array from array-like or iterable:

\`\`\`javascript
// From string
let chars = Array.from("hello");
console.log(chars);  // ["h", "e", "l", "l", "o"]

// From set
let set = new Set([1, 2, 3, 2, 1]);
let arr = Array.from(set);
console.log(arr);  // [1, 2, 3]

// With mapping function
let doubled = Array.from([1, 2, 3], x => x * 2);
console.log(doubled);  // [2, 4, 6]

// Create array with length and values
let sequence = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(sequence);  // [1, 2, 3, 4, 5]
\`\`\`

## Method Chaining

Combine multiple methods:

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get doubled even numbers
let result = numbers
    .filter(num => num % 2 === 0)  // [2, 4, 6, 8, 10]
    .map(num => num * 2)           // [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0);  // 60

console.log(result);  // 60

// Complex example
let users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 35, active: true },
    { name: "David", age: 28, active: true }
];

let activeUserNames = users
    .filter(user => user.active)
    .filter(user => user.age > 25)
    .map(user => user.name)
    .join(", ");

console.log(activeUserNames);  // "Charlie, David"
\`\`\`

## Common Patterns

\`\`\`javascript
// Remove duplicates
let numbers = [1, 2, 2, 3, 3, 4, 5, 5];
let unique = [...new Set(numbers)];
console.log(unique);  // [1, 2, 3, 4, 5]

// Group by property
let users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" }
];

let byRole = users.reduce((acc, user) => {
    acc[user.role] = acc[user.role] || [];
    acc[user.role].push(user);
    return acc;
}, {});
console.log(byRole);
// { admin: [Alice, Charlie], user: [Bob] }

// Calculate average
let grades = [85, 90, 78, 92, 88];
let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log(average);  // 86.6

// Transform array to object
let pairs = [["name", "Alice"], ["age", 25], ["city", "NYC"]];
let obj = pairs.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});
console.log(obj);  // { name: "Alice", age: 25, city: "NYC" }
\`\`\`

## Performance Tips

1. **Use for loop for simple iterations** if performance is critical
2. **forEach doesn't return** - use map if you need result
3. **Break early with find/some** instead of filtering then accessing first
4. **Avoid unnecessary array creation** - don't chain too many methods
5. **Use reduce carefully** - it can become hard to read

\`\`\`javascript
// Less efficient
let result = arr.filter(x => x > 10).map(x => x * 2)[0];

// More efficient
let result = arr.find(x => x > 10);
if (result) result = result * 2;
\`\`\`
    `,
    codeExample: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - transform each element
let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter - keep elements that pass test
let evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);
// [2, 4, 6, 8, 10]

// reduce - reduce to single value
let sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);  // 55

// find - first element that passes test
let firstBig = numbers.find(n => n > 5);
console.log("First > 5:", firstBig);  // 6

// some - at least one passes test
let hasEven = numbers.some(n => n % 2 === 0);
console.log("Has even?", hasEven);  // true

// every - all pass test
let allPositive = numbers.every(n => n > 0);
console.log("All positive?", allPositive);  // true

// Method chaining
let result = numbers
    .filter(n => n % 2 === 0)    // Get evens: [2, 4, 6, 8, 10]
    .map(n => n * 2)             // Double them: [4, 8, 12, 16, 20]
    .reduce((sum, n) => sum + n, 0);  // Sum: 60
console.log("Chained result:", result);  // 60

// Practical example with objects
let products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: true },
    { name: "Keyboard", price: 75, inStock: false },
    { name: "Monitor", price: 300, inStock: true }
];

// Get names of available products under $500
let affordable = products
    .filter(p => p.inStock && p.price < 500)
    .map(p => p.name);
console.log("Affordable:", affordable);
// ["Mouse", "Monitor"]

// Calculate total value of in-stock items
let totalValue = products
    .filter(p => p.inStock)
    .reduce((total, p) => total + p.price, 0);
console.log("Total value:", totalValue);  // 1325`,
    language: 'javascript',
    exercises: [
      {
        id: 'js-8-ex1',
        title: 'Array Method Practice',
        description: 'Practice using map, filter, reduce, and other array methods.',
        starterCode: `// Given this data:
let students = [
    { name: "Alice", grade: 85, passed: true },
    { name: "Bob", grade: 92, passed: true },
    { name: "Charlie", grade: 58, passed: false },
    { name: "David", grade: 78, passed: true },
    { name: "Eve", grade: 95, passed: true }
];

// 1. Get array of all student names

// 2. Get array of students who passed

// 3. Calculate average grade of all students

// 4. Find the first student with grade > 90

// 5. Check if all students passed

// 6. Get names of students who passed, as comma-separated string

`,
        solution: `// Given data
let students = [
    { name: "Alice", grade: 85, passed: true },
    { name: "Bob", grade: 92, passed: true },
    { name: "Charlie", grade: 58, passed: false },
    { name: "David", grade: 78, passed: true },
    { name: "Eve", grade: 95, passed: true }
];

// 1. Get array of all student names
let names = students.map(student => student.name);
console.log("Names:", names);
// ["Alice", "Bob", "Charlie", "David", "Eve"]

// 2. Get array of students who passed
let passedStudents = students.filter(student => student.passed);
console.log("Passed students:", passedStudents);
// All except Charlie

// 3. Calculate average grade
let average = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Average grade:", average);  // 81.6

// Alternative with map and reduce
let averageAlt = students.map(s => s.grade).reduce((sum, grade) => sum + grade, 0) / students.length;
console.log("Average (alt):", averageAlt);  // 81.6

// 4. Find first student with grade > 90
let topStudent = students.find(student => student.grade > 90);
console.log("Top student:", topStudent);
// { name: "Bob", grade: 92, passed: true }

// 5. Check if all students passed
let allPassed = students.every(student => student.passed);
console.log("All passed?", allPassed);  // false

// 6. Get names of passed students as string
let passedNames = students
    .filter(student => student.passed)
    .map(student => student.name)
    .join(", ");
console.log("Passed:", passedNames);
// "Alice, Bob, David, Eve"

// Bonus: Get highest grade
let highestGrade = students.reduce((max, student) => 
    student.grade > max ? student.grade : max, 0);
console.log("Highest grade:", highestGrade);  // 95

// Bonus: Count passed vs failed
let counts = students.reduce((acc, student) => {
    if (student.passed) {
        acc.passed++;
    } else {
        acc.failed++;
    }
    return acc;
}, { passed: 0, failed: 0 });
console.log("Counts:", counts);  // { passed: 4, failed: 1 }`,
        language: 'javascript',
        hints: [
          'Use map() to transform array elements',
          'Use filter() to keep only elements that pass a test',
          'Use reduce() to calculate a single value from array',
          'Use find() to get first element matching condition',
          'Use every() to check if all elements pass test',
          'Chain multiple methods together for complex operations'
        ]
      }
    ]
  },
  {
    id: 'js-9',
    title: 'JavaScript Objects',
    description: 'Master objects, properties, methods, this keyword, and object manipulation.',
    difficulty: 'beginner',
    estimatedTime: 50,
    content: `
# JavaScript Objects

Objects are collections of key-value pairs. They're fundamental to JavaScript and represent real-world entities.

## Creating Objects

### Object Literal
\`\`\`javascript
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// Empty object
let empty = {};
\`\`\`

### Object Constructor
\`\`\`javascript
let person = new Object();
person.name = "Alice";
person.age = 25;
\`\`\`

### Using Variables as Keys
\`\`\`javascript
let key = "name";
let person = {
    [key]: "Alice",  // Computed property name
    age: 25
};
console.log(person.name);  // "Alice"
\`\`\`

## Accessing Properties

### Dot Notation
\`\`\`javascript
let person = {
    name: "Alice",
    age: 25
};

console.log(person.name);  // "Alice"
console.log(person.age);   // 25
\`\`\`

### Bracket Notation
\`\`\`javascript
console.log(person["name"]);  // "Alice"
console.log(person["age"]);   // 25

// With variables
let prop = "name";
console.log(person[prop]);  // "Alice"

// With special characters or spaces
let obj = {
    "first-name": "Alice",
    "last name": "Johnson"
};
console.log(obj["first-name"]);  // "Alice"
console.log(obj["last name"]);   // "Johnson"
\`\`\`

## Adding/Modifying Properties

\`\`\`javascript
let person = {
    name: "Alice"
};

// Add property
person.age = 25;
person["city"] = "New York";

// Modify property
person.name = "Alice Johnson";

console.log(person);
// { name: "Alice Johnson", age: 25, city: "New York" }
\`\`\`

## Deleting Properties

\`\`\`javascript
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

delete person.age;
console.log(person);  // { name: "Alice", city: "New York" }
\`\`\`

## Checking for Properties

\`\`\`javascript
let person = {
    name: "Alice",
    age: 25
};

// in operator
console.log("name" in person);    // true
console.log("email" in person);   // false

// hasOwnProperty
console.log(person.hasOwnProperty("name"));  // true
console.log(person.hasOwnProperty("email")); // false

// Check if undefined
console.log(person.email === undefined);  // true
\`\`\`

## Object Methods

Functions as object properties:

\`\`\`javascript
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return "Hello, I'm " + this.name;
    },
    // Shorthand method syntax
    sayAge() {
        return "I'm " + this.age + " years old";
    }
};

console.log(person.greet());    // "Hello, I'm Alice"
console.log(person.sayAge());   // "I'm 25 years old"
\`\`\`

## The 'this' Keyword

Refers to the object the method is called on:

\`\`\`javascript
let user = {
    name: "Bob",
    greet() {
        console.log("Hello, " + this.name);
    },
    nested: {
        value: 10,
        getValue() {
            return this.value;
        }
    }
};

user.greet();  // "Hello, Bob"
console.log(user.nested.getValue());  // 10

// Arrow functions don't have their own 'this'
let person = {
    name: "Alice",
    greet: () => {
        // 'this' refers to outer scope, not person
        console.log(this.name);  // undefined or window.name
    }
};
\`\`\`

## Object Destructuring

Extract properties into variables:

\`\`\`javascript
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// Basic destructuring
let { name, age } = person;
console.log(name);  // "Alice"
console.log(age);   // 25

// Rename variables
let { name: personName, age: personAge } = person;
console.log(personName);  // "Alice"

// Default values
let { name, country = "USA" } = person;
console.log(country);  // "USA"

// Nested destructuring
let user = {
    name: "Bob",
    address: {
        city: "NYC",
        zip: "10001"
    }
};

let { address: { city, zip } } = user;
console.log(city);  // "NYC"
\`\`\`

## Object Methods

### Object.keys()
Get array of keys:

\`\`\`javascript
let person = { name: "Alice", age: 25, city: "NYC" };

let keys = Object.keys(person);
console.log(keys);  // ["name", "age", "city"]
\`\`\`

### Object.values()
Get array of values:

\`\`\`javascript
let values = Object.values(person);
console.log(values);  // ["Alice", 25, "NYC"]
\`\`\`

### Object.entries()
Get array of [key, value] pairs:

\`\`\`javascript
let entries = Object.entries(person);
console.log(entries);
// [["name", "Alice"], ["age", 25], ["city", "NYC"]]

// Convert back to object
let obj = Object.fromEntries(entries);
console.log(obj);  // { name: "Alice", age: 25, city: "NYC" }
\`\`\`

### Object.assign()
Copy properties to target object:

\`\`\`javascript
let target = { a: 1 };
let source = { b: 2, c: 3 };

Object.assign(target, source);
console.log(target);  // { a: 1, b: 2, c: 3 }

// Clone object
let person = { name: "Alice", age: 25 };
let clone = Object.assign({}, person);
console.log(clone);  // { name: "Alice", age: 25 }
\`\`\`

## Spread Operator with Objects

\`\`\`javascript
let person = { name: "Alice", age: 25 };

// Clone object
let clone = { ...person };
console.log(clone);  // { name: "Alice", age: 25 }

// Merge objects
let address = { city: "NYC", country: "USA" };
let user = { ...person, ...address };
console.log(user);
// { name: "Alice", age: 25, city: "NYC", country: "USA" }

// Override properties
let updated = { ...person, age: 26 };
console.log(updated);  // { name: "Alice", age: 26 }
\`\`\`

## Computed Property Names

\`\`\`javascript
let key = "name";
let value = "Alice";

let obj = {
    [key]: value,
    ["age"]: 25,
    ["is" + "Active"]: true
};

console.log(obj);  // { name: "Alice", age: 25, isActive: true }
\`\`\`

## Property Shorthand

\`\`\`javascript
let name = "Alice";
let age = 25;

// Old way
let person1 = { name: name, age: age };

// Shorthand
let person2 = { name, age };
console.log(person2);  // { name: "Alice", age: 25 }
\`\`\`

## Iterating Over Objects

### for...in Loop
\`\`\`javascript
let person = { name: "Alice", age: 25, city: "NYC" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// name: Alice
// age: 25
// city: NYC
\`\`\`

### Object.keys() with forEach
\`\`\`javascript
Object.keys(person).forEach(key => {
    console.log(key + ": " + person[key]);
});
\`\`\`

### Object.entries()
\`\`\`javascript
Object.entries(person).forEach(([key, value]) => {
    console.log(\`\${key}: \${value}\`);
});
\`\`\`

## Nested Objects

\`\`\`javascript
let user = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "NYC",
        zip: "10001",
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    hobbies: ["reading", "coding"]
};

console.log(user.address.city);  // "NYC"
console.log(user.address.coordinates.lat);  // 40.7128
console.log(user.hobbies[0]);  // "reading"
\`\`\`

## Common Patterns

\`\`\`javascript
// Check if object is empty
let obj = {};
let isEmpty = Object.keys(obj).length === 0;

// Count properties
let count = Object.keys(person).length;

// Convert object to query string
let params = { name: "Alice", age: 25, city: "NYC" };
let query = Object.entries(params)
    .map(([key, value]) => \`\${key}=\${value}\`)
    .join("&");
console.log(query);  // "name=Alice&age=25&city=NYC"

// Filter object properties
let user = { name: "Alice", age: 25, password: "secret" };
let safe = Object.fromEntries(
    Object.entries(user).filter(([key]) => key !== "password")
);
console.log(safe);  // { name: "Alice", age: 25 }

// Transform object values
let prices = { apple: 2, banana: 1, orange: 3 };
let doubled = Object.fromEntries(
    Object.entries(prices).map(([fruit, price]) => [fruit, price * 2])
);
console.log(doubled);  // { apple: 4, banana: 2, orange: 6 }
\`\`\`
    `,
    codeExample: `// Creating objects
let person = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 25,
    city: "New York",
    hobbies: ["reading", "coding", "hiking"],
    // Method
    getFullName() {
        return this.firstName + " " + this.lastName;
    },
    // Method with logic
    greet(name) {
        return \`Hello \${name}, I'm \${this.firstName}!\`;
    }
};

// Accessing properties
console.log(person.firstName);  // "Alice"
console.log(person["age"]);     // 25
console.log(person.hobbies[0]); // "reading"

// Calling methods
console.log(person.getFullName());  // "Alice Johnson"
console.log(person.greet("Bob"));   // "Hello Bob, I'm Alice!"

// Adding/modifying properties
person.email = "alice@example.com";
person.age = 26;
console.log(person);

// Object destructuring
let { firstName, age } = person;
console.log(firstName, age);  // "Alice" 26

// Object methods
let keys = Object.keys(person);
console.log("Keys:", keys);

let values = Object.values(person);
console.log("Values:", values);

// Spread operator - clone and modify
let updatedPerson = {
    ...person,
    age: 27,
    country: "USA"
};
console.log(updatedPerson);

// Nested object
let company = {
    name: "Tech Corp",
    employees: {
        engineering: ["Alice", "Bob"],
        marketing: ["Charlie", "David"]
    },
    location: {
        city: "San Francisco",
        state: "CA"
    }
};

console.log(company.employees.engineering[0]);  // "Alice"
console.log(company.location.city);  // "San Francisco"

// Iterating over object
for (let key in person) {
    if (typeof person[key] !== 'function') {
        console.log(\`\${key}: \${person[key]}\`);
    }
}`,
    language: 'javascript',
    exercises: [
      {
        id: 'js-9-ex1',
        title: 'Working with Objects',
        description: 'Practice creating and manipulating objects.',
        starterCode: `// 1. Create a book object with properties: title, author, year, pages

// 2. Add a method 'getInfo' that returns a string with book details

// 3. Create another book and combine both into a library object

// 4. Use Object.keys() to get all property names

// 5. Use destructuring to extract title and author

// 6. Create a new object with spread operator, updating the year

`,
        solution: `// 1. Create book object
let book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    pages: 180
};

console.log("Book 1:", book1);

// 2. Add getInfo method
book1.getInfo = function() {
    return \`"\${this.title}" by \${this.author} (\${this.year}), \${this.pages} pages\`;
};

console.log(book1.getInfo());
// "The Great Gatsby" by F. Scott Fitzgerald (1925), 180 pages

// Alternative: Create with method
let book2 = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    pages: 328,
    getInfo() {
        return \`"\${this.title}" by \${this.author} (\${this.year}), \${this.pages} pages\`;
    }
};

console.log(book2.getInfo());
// "1984" by George Orwell (1949), 328 pages

// 3. Combine into library object
let library = {
    name: "My Library",
    books: [book1, book2],
    getBookCount() {
        return this.books.length;
    },
    listBooks() {
        return this.books.map(book => book.title).join(", ");
    }
};

console.log("Library:", library.name);
console.log("Book count:", library.getBookCount());  // 2
console.log("Books:", library.listBooks());
// "The Great Gatsby, 1984"

// 4. Get all property names
let keys = Object.keys(book1);
console.log("Book properties:", keys);
// ["title", "author", "year", "pages", "getInfo"]

// 5. Destructuring
let { title, author } = book1;
console.log(\`Title: \${title}\`);    // "The Great Gatsby"
console.log(\`Author: \${author}\`);  // "F. Scott Fitzgerald"

// Destructuring with rename
let { title: bookTitle, year: publicationYear } = book1;
console.log(\`\${bookTitle} was published in \${publicationYear}\`);

// 6. Update using spread operator
let updatedBook = {
    ...book1,
    year: 2024,  // Update year
    edition: "Special Edition"  // Add new property
};

console.log("Updated book:", updatedBook);

// Bonus: Filter books by year
let modernBooks = library.books.filter(book => book.year >= 1900);
console.log("Modern books:", modernBooks.map(b => b.title));

// Bonus: Transform books to summary array
let summaries = library.books.map(book => ({
    title: book.title,
    info: \`\${book.author}, \${book.year}\`
}));
console.log("Summaries:", summaries);`,
        language: 'javascript',
        hints: [
          'Objects use curly braces {}',
          'Methods are functions as properties',
          'Use this keyword to access object properties in methods',
          'Object.keys() returns array of property names',
          'Destructuring: let { prop1, prop2 } = object',
          'Spread: { ...obj, newProp: value }'
        ]
      }
    ]
  },
  {
    id: 'js-10',
    title: 'JavaScript Loops',
    description: 'Master all loop types: for, while, do-while, for...of, for...in, and loop control.',
    difficulty: 'beginner',
    estimatedTime: 50,
    content: `
# JavaScript Loops

Loops repeat code multiple times. JavaScript has several types of loops for different scenarios.

## for Loop

Classic loop with counter:

\`\`\`javascript
// Basic syntax
for (initialization; condition; increment) {
    // Code to repeat
}

// Count from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 0, 1, 2, 3, 4

// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// 1, 2, 3, 4, 5

// Count backwards
for (let i = 5; i > 0; i--) {
    console.log(i);
}
// 5, 4, 3, 2, 1

// Step by 2
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
// 0, 2, 4, 6, 8
\`\`\`

### Looping Through Arrays
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i + ": " + fruits[i]);
}
// 0: apple
// 1: banana
// 2: orange

// Reverse loop
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
// orange, banana, apple
\`\`\`

## while Loop

Loop while condition is true:

\`\`\`javascript
// Basic syntax
while (condition) {
    // Code to repeat
}

// Count from 0 to 4
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// 0, 1, 2, 3, 4

// Loop through array
let fruits = ["apple", "banana", "orange"];
let index = 0;
while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}

// Input validation (conceptual)
let input = "";
while (input !== "quit") {
    // Get input from user
    // input = prompt("Enter command (or 'quit'):");
    console.log("Processing:", input);
}
\`\`\`

## do-while Loop

Execute at least once, then check condition:

\`\`\`javascript
// Basic syntax
do {
    // Code to repeat (runs at least once)
} while (condition);

// Runs at least once
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// 0, 1, 2, 3, 4

// Even if condition is false initially
let x = 10;
do {
    console.log(x);  // Runs once
    x++;
} while (x < 5);
// 10
\`\`\`

## for...of Loop

Iterate over iterable values (arrays, strings, etc.):

\`\`\`javascript
// With arrays
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
// apple, banana, orange

// With strings
let str = "Hello";
for (let char of str) {
    console.log(char);
}
// H, e, l, l, o

// With array of objects
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

for (let user of users) {
    console.log(\`\${user.name} is \${user.age}\`);
}
// Alice is 25
// Bob is 30
\`\`\`

## for...in Loop

Iterate over object properties:

\`\`\`javascript
// With objects
let person = {
    name: "Alice",
    age: 25,
    city: "NYC"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// name: Alice
// age: 25
// city: NYC

// With arrays (not recommended - use for...of)
let fruits = ["apple", "banana", "orange"];

for (let index in fruits) {
    console.log(index + ": " + fruits[index]);
}
// 0: apple
// 1: banana
// 2: orange
\`\`\`

## Loop Control Statements

### break
Exit loop immediately:

\`\`\`javascript
// Find first even number
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("First even:", i);
        break;  // Exit loop
    }
}
// First even: 2

// Search array
let numbers = [1, 3, 5, 7, 8, 9];
let found = null;

for (let num of numbers) {
    if (num % 2 === 0) {
        found = num;
        break;
    }
}
console.log("Found:", found);  // 8
\`\`\`

### continue
Skip current iteration, continue to next:

\`\`\`javascript
// Skip even numbers
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;  // Skip to next iteration
    }
    console.log(i);
}
// 1, 3, 5

// Process only valid items
let numbers = [1, 2, -1, 4, -5, 6];

for (let num of numbers) {
    if (num < 0) {
        continue;  // Skip negative numbers
    }
    console.log(num);
}
// 1, 2, 4, 6
\`\`\`

## Nested Loops

Loops inside loops:

\`\`\`javascript
// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
}

// 2D array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(\`[\${i}][\${j}] = \${matrix[i][j]}\`);
    }
}

// Pattern printing
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
// *
// **
// ***
// ****
// *****
\`\`\`

## Common Loop Patterns

### Sum Array
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let num of numbers) {
    sum += num;
}
console.log("Sum:", sum);  // 15
\`\`\`

### Find Maximum
\`\`\`javascript
let numbers = [3, 7, 2, 9, 1];
let max = numbers[0];

for (let num of numbers) {
    if (num > max) {
        max = num;
    }
}
console.log("Max:", max);  // 9
\`\`\`

### Filter Array
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evens = [];

for (let num of numbers) {
    if (num % 2 === 0) {
        evens.push(num);
    }
}
console.log("Evens:", evens);  // [2, 4, 6]
\`\`\`

### Count Occurrences
\`\`\`javascript
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = 0;

for (let fruit of fruits) {
    if (fruit === "apple") {
        count++;
    }
}
console.log("Apple count:", count);  // 3
\`\`\`

### Build Object from Array
\`\`\`javascript
let users = ["Alice", "Bob", "Charlie"];
let userObjects = [];

for (let i = 0; i < users.length; i++) {
    userObjects.push({
        id: i + 1,
        name: users[i]
    });
}
console.log(userObjects);
// [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
\`\`\`

## Loop vs Array Methods

When to use each:

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

// for loop - more control, can break early
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) break;
    console.log(numbers[i]);
}

// forEach - cleaner, can't break
numbers.forEach(num => console.log(num));

// for...of - clean for simple iteration
for (let num of numbers) {
    console.log(num);
}

// map - transform array
let doubled = numbers.map(num => num * 2);

// filter - select elements
let evens = numbers.filter(num => num % 2 === 0);
\`\`\`

## Performance Tips

1. **Cache array length** in for loops if array doesn't change
\`\`\`javascript
// Less efficient
for (let i = 0; i < arr.length; i++) { }

// More efficient for large arrays
for (let i = 0, len = arr.length; i < len; i++) { }
\`\`\`

2. **Use for...of** for readability with arrays
3. **Use forEach/map/filter** for functional style
4. **Use traditional for loop** when you need index or to break early
5. **Avoid modifying array** while iterating

## Infinite Loops (Caution!)

Be careful to avoid infinite loops:

\`\`\`javascript
// DON'T DO THIS!
// while (true) {
//     console.log("Forever!");
// }

// Make sure loop condition eventually becomes false
let count = 0;
while (count < 10) {
    console.log(count);
    count++;  // Don't forget to update!
}
\`\`\`
    `,
    codeExample: `// for loop - classic loop with counter
for (let i = 0; i < 5; i++) {
    console.log("for loop:", i);
}
// 0, 1, 2, 3, 4

// while loop - loop while condition is true
let j = 0;
while (j < 3) {
    console.log("while loop:", j);
    j++;
}
// 0, 1, 2

// do-while loop - runs at least once
let k = 0;
do {
    console.log("do-while loop:", k);
    k++;
} while (k < 2);
// 0, 1

// for...of loop - iterate over array values
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log("for...of:", fruit);
}
// apple, banana, orange

// for...in loop - iterate over object properties
let person = { name: "Alice", age: 25, city: "NYC" };
for (let key in person) {
    console.log(\`for...in: \${key} = \${person[key]}\`);
}
// name = Alice, age = 25, city = NYC

// break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break;
    }
    console.log("break example:", i);
}
// 0, 1, 2, 3, 4, then breaks

// continue statement
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip when i is 2
    }
    console.log("continue example:", i);
}
// 0, 1, 3, 4 (skips 2)

// Nested loops - multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
}

// Practical example: sum array
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Sum:", sum);  // 15

// Practical example: filter array
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = [];
for (let num of allNumbers) {
    if (num % 2 === 0) {
        evens.push(num);
    }
}
console.log("Evens:", evens);  // [2, 4, 6, 8, 10]`,
    language: 'javascript',
    exercises: [
      {
        id: 'js-10-ex1',
        title: 'Loop Practice',
        description: 'Practice different types of loops and loop control.',
        starterCode: `// 1. Use a for loop to print numbers 1 to 10

// 2. Use a while loop to sum numbers from 1 to 100

// 3. Use for...of to iterate through this array and print each item
let items = ["book", "pen", "notebook", "pencil"];

// 4. Use for...in to print all properties of this object
let car = { brand: "Toyota", model: "Camry", year: 2020 };

// 5. Use a for loop with break to find the first number > 50 in this array
let numbers = [12, 45, 67, 23, 89, 34];

// 6. Use a for loop with continue to print only odd numbers from 1 to 10

// 7. Use nested loops to create a 3x3 multiplication table

`,
        solution: `// 1. For loop - print 1 to 10
console.log("1. Numbers 1-10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. While loop - sum 1 to 100
console.log("\\n2. Sum of 1-100:");
let sum = 0;
let num = 1;
while (num <= 100) {
    sum += num;
    num++;
}
console.log("Sum:", sum);  // 5050

// Alternative with formula: n * (n + 1) / 2
console.log("Verification:", (100 * 101) / 2);  // 5050

// 3. for...of loop - iterate array
console.log("\\n3. Items:");
let items = ["book", "pen", "notebook", "pencil"];
for (let item of items) {
    console.log("  -", item);
}

// 4. for...in loop - object properties
console.log("\\n4. Car properties:");
let car = { brand: "Toyota", model: "Camry", year: 2020 };
for (let key in car) {
    console.log(\`  \${key}: \${car[key]}\`);
}

// 5. for loop with break
console.log("\\n5. First number > 50:");
let numbers = [12, 45, 67, 23, 89, 34];
let found = null;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        found = numbers[i];
        console.log(\`Found: \${found} at index \${i}\`);
        break;
    }
}

// 6. for loop with continue - odd numbers
console.log("\\n6. Odd numbers 1-10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}
// 1, 3, 5, 7, 9

// 7. Nested loops - 3x3 multiplication table
console.log("\\n7. Multiplication table:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
}

// Bonus: Print table in grid format
console.log("\\nTable grid:");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += (i * j) + "\\t";
    }
    console.log(row);
}
// 1  2  3
// 2  4  6
// 3  6  9

// Bonus: FizzBuzz (1-15)
console.log("\\nBonus - FizzBuzz:");
for (let i = 1; i <= 15; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}`,
        language: 'javascript',
        hints: [
          'for loop: for (let i = start; i <= end; i++) {}',
          'while loop: while (condition) { // code; update counter; }',
          'for...of: for (let item of array) {}',
          'for...in: for (let key in object) {}',
          'Use break to exit loop early',
          'Use continue to skip to next iteration',
          'Nested loops: one loop inside another'
        ]
      }
    ]
  }
];

export default javascriptLessons;