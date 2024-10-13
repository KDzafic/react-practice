# Project Management App - README

## Overview

This React-based **Project Management App** allows users to manage projects efficiently by creating, viewing, and deleting projects and tasks. The app also features input validation, modals for error handling, and smooth navigation between different project views.

## Features

- **Create Projects:** Add projects with a title, description, and due date.
- **Task Management:** Add and delete tasks for individual projects.
- **Validation and Modals:** Displays a modal on missing input fields during project creation.
- **Dynamic UI Updates:** Shows relevant views based on project selection.
- **Project Sidebar:** Lists all projects for quick navigation.
- **Error Handling:** Uses portals to render modals outside the main DOM hierarchy.

---

## Components Overview

1. **`Input` Component**

   - Renders either an `<input>` or `<textarea>` depending on props.
   - Uses `forwardRef` for better access to input values within parent components.

2. **`Modal` Component**

   - Uses `createPortal` to render modals in a different part of the DOM.
   - Uses `useImperativeHandle` to expose `open()` function to parent components.

3. **`NewProject` Component**

   - Renders a form to create new projects.
   - Includes input validation to ensure all fields are filled.
   - Calls the `onAdd` callback to add the new project or `onCancel` to return to the previous view.

4. **`NoProjectSelected` Component**

   - Displays a message when no project is selected.
   - Provides a button to create a new project.

5. **`SelectedProject` Component**

   - Displays details of the selected project, including tasks.
   - Allows adding and deleting tasks.
   - Shows project title, description, and due date.

6. **`App` Component**
   - Manages the overall state of the application, including projects and tasks.
   - Conditionally renders views: No Project Selected, New Project Form, or Selected Project.
   - Provides project and task management functionalities via helper functions.

---

## Code Highlights

- **`forwardRef` and `useImperativeHandle`:**  
  Used to provide access to component methods and input values within parent components.

- **`createPortal` Usage in `Modal`:**  
  The modal is rendered outside the main DOM hierarchy, making it more flexible.

- **Dynamic State Management:**  
  The app efficiently handles UI updates by leveraging React's `useState` to manage selected projects and tasks.
