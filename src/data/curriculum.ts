import htmlLessons from './lessons/html-lessons';
import cssLessons from './lessons/css-lessons';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample?: string;
  language?: string;
  exercises?: Exercise[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  prerequisites?: string[];
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  starterCode?: string;
  solution?: string;
  hints?: string[];
  language?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  totalLessons: number;
  estimatedHours: number;
}

// Placeholder introductory lesson creator
const createIntroLesson = (course: string, title: string, language: string): Lesson => ({
  id: `${course}-1`,
  title: `Introduction to ${title}`,
  description: `Understanding ${title} and its role in web development.`,
  difficulty: 'beginner',
  estimatedTime: 30,
  content: `
# Introduction to ${title}

This is an introductory lesson for ${title}. More comprehensive lessons will be added here.

## What You'll Learn
- Fundamentals of ${title}
- Core concepts and syntax
- Practical applications
- Best practices

## Getting Started
This course will take you from beginner to advanced level with hands-on examples and exercises.

**Note**: More detailed lessons are being added. Check the CURRICULUM_ROADMAP.md for the complete learning path.
  `,
  codeExample: `// ${title} example code will be shown here`,
  language,
});

export const curriculum: Course[] = [
  {
    id: 'html',
    title: 'HTML - HyperText Markup Language',
    description: 'Learn the foundation of web development with HTML. Master semantic markup, accessibility, and modern HTML5 features.',
    icon: '🌐',
    color: '#e44d26',
    totalLessons: 15,
    estimatedHours: 15,
    lessons: htmlLessons
  },
  
  {
    id: 'css',
    title: 'CSS - Cascading Style Sheets',
    description: 'Master styling, layout, animations, and responsive design with CSS.',
    icon: '🎨',
    color: '#1572b6',
    totalLessons: 30,
    estimatedHours: 25,
    lessons: cssLessons
      // TODO: Add 25 more CSS lessons covering:
      // - Selectors (basic and advanced)
      // - Box Model
      // - Flexbox and Grid
      // - Responsive Design
      // - Animations and Transitions
      // - CSS Variables
      // - Preprocessors (Sass/SCSS)
      // See CURRICULUM_ROADMAP.md for full list
    ]
  },

  {
    id: 'javascript',
    title: 'JavaScript - Programming for the Web',
    description: 'Learn programming fundamentals and web interactivity with JavaScript.',
    icon: '⚡',
    color: '#f7df1e',
    totalLessons: 40,
    estimatedHours: 35,
    lessons: [
      createIntroLesson('javascript', 'JavaScript', 'javascript'),
      // TODO: Add 39 more JavaScript lessons covering:
      // - Variables, Data Types, Operators
      // - Functions and Scope
      // - Arrays and Objects
      // - DOM Manipulation
      // - Events
      // - Async Programming (Promises, Async/Await)
      // - ES6+ Features
      // - OOP and Functional Programming
      // See CURRICULUM_ROADMAP.md for full list
    ]
  },

  {
    id: 'typescript',
    title: 'TypeScript - JavaScript with Types',
    description: 'Add type safety and advanced features to your JavaScript code.',
    icon: '📘',
    color: '#3178c6',
    totalLessons: 25,
    estimatedHours: 20,
    lessons: [
      createIntroLesson('typescript', 'TypeScript', 'typescript'),
      // TODO: Add 24 more TypeScript lessons covering:
      // - Basic Types and Type Annotations
      // - Interfaces and Type Aliases
      // - Generics
      // - Advanced Types
      // - Decorators
      // - TypeScript with React
      // See CURRICULUM_ROADMAP.md for full list
    ]
  },

  {
    id: 'react',
    title: 'React - Building User Interfaces',
    description: 'Create dynamic, component-based user interfaces with React.',
    icon: '⚛️',
    color: '#61dafb',
    totalLessons: 35,
    estimatedHours: 30,
    lessons: [
      createIntroLesson('react', 'React', 'javascript'),
      // TODO: Add 34 more React lessons covering:
      // - Components and Props
      // - State and Lifecycle
      // - Hooks (useState, useEffect, useContext, etc.)
      // - React Router
      // - State Management (Redux, Zustand)
      // - Performance Optimization
      // - Testing
      // See CURRICULUM_ROADMAP.md for full list
    ]
  },

  {
    id: 'threejs',
    title: 'Three.js - 3D Graphics for the Web',
    description: 'Create stunning 3D graphics and animations in the browser.',
    icon: '🎲',
    color: '#000000',
    totalLessons: 25,
    estimatedHours: 20,
    lessons: [
      createIntroLesson('threejs', 'Three.js', 'javascript'),
      // TODO: Add 24 more Three.js lessons covering:
      // - Scenes, Cameras, and Renderers
      // - Geometries and Materials
      // - Lighting and Shadows
      // - Textures and Mapping
      // - Animations
      // - Loading 3D Models
      // - Shaders
      // - Physics and Interactions
      // See CURRICULUM_ROADMAP.md for full list
    ]
  },

  {
    id: 'python',
    title: 'Python - Programming Fundamentals',
    description: 'Learn programming concepts with Python\'s clean and readable syntax.',
    icon: '🐍',
    color: '#3776ab',
    totalLessons: 40,
    estimatedHours: 35,
    lessons: [
      createIntroLesson('python', 'Python', 'python'),
      // TODO: Add 39 more Python lessons covering:
      // - Variables and Data Types
      // - Control Flow and Loops
      // - Functions and Modules
      // - Data Structures (Lists, Dicts, Sets, Tuples)
      // - Object-Oriented Programming
      // - File I/O
      // - Error Handling
      // - Web Development (Flask, Django)
      // - Working with APIs
      // - Testing
      // See CURRICULUM_ROADMAP.md for full list
    ]
  }
];

export default curriculum;