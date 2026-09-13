

### ⏳ Loading State
- Show a loading message/spinner while the JSON data is being fetched.
- Note: since the JSON is a local file, the loading state may only be visible for a few milliseconds and can be hard to catch on screen. That is completely fine — the requirement is that the loading state exists and works, not that it stays visible for long.


### 📂 GitHub Repository
- Create a beautiful GitHub Readme with the following description:
  - Name of your project
  - A little description
  - Technology that you use
  - 3 features about your project

- Also answer these React questions at the end of your Readme (write the answers in your own words, short and simple):
  1. What is JSX, and why is it used in React?
  2. What is the difference between props and state?
  3. What does the `useState` hook do, and where did you use it in this project?
  4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
  5. Why does every item in a `.map()` list need a unique `key` prop?
  6. What is conditional rendering? Show one place you used it (example: the empty stack message).
  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

---
# DevStack

DevStack is a React and TypeScript project where users can explore different technologies and build their own tech stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify

## Features

- Explore different technologies.
- Select technologies to build your own stack.
- Remove selected technologies and get toast notifications.

## Loading State

A loading spinner is shown while the technology JSON data is being loaded.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes UI code easier to write.

### 2. What is the difference between props and state?

Props pass data from parent to child. State stores data that can change.

### 3. What does the `useState` hook do, and where did you use it?

It stores and updates data in a component. I used it for selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it?

It runs code after rendering. I used it to load the JSON data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

It helps React identify each item in the list.

### 6. What is conditional rendering? Show one place you used it.

It means showing different UI based on a condition. I used it to show "Your stack is empty" when no tech is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent sends data through props. The child sends something back by calling a function passed through props.
