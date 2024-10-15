# Task Board Starter Code

This project is a simple **Task Manager** application that uses **LocalStorage** to persist tasks across sessions and provides a drag-and-drop interface for managing tasks across different status lanes (To Do, In Progress, Done). Users can create tasks, update their status by dragging them between lanes, and delete them.

## Features

- **Create Tasks**: Add new tasks with a name, type, due date, and an initial status of "To Do".
- **LocalStorage Persistence**: Task data is stored in the browser's LocalStorage, so it persists between page reloads.
- **Dynamic Task Cards**: Tasks are displayed as cards that change background color based on due dates.
- **Drag-and-Drop Interface**: Task cards can be dragged between status lanes (To Do, In Progress, Done) to update their progress.
- **Task Deletion**: Tasks can be deleted from the UI and LocalStorage.
- **Date Picker**: A date picker is used to set task due dates.

## Technology Stack

- **HTML/CSS**: For the basic structure and styling.
- **JavaScript/jQuery**: For DOM manipulation, event handling, and managing task state.
- **Day.js**: For handling date manipulation and comparisons.
- **jQuery UI**: For enabling drag-and-drop functionality and date picker.

## How It Works

1. **Task Creation**:
   - Users can add a new task by entering the task name, type, and due date. When the form is submitted, the task is assigned a unique ID and added to the LocalStorage.
   
2. **Task Display**:
   - Tasks are displayed in one of three lanes: "To Do", "In Progress", and "Done". The tasks are shown as draggable cards, with colors based on the due date:
     - **Yellow**: The task is due today.
     - **Red**: The task is overdue.

3. **Drag-and-Drop**:
   - Users can drag task cards between the lanes. When a task is dropped in a new lane, its status is updated in LocalStorage.

4. **Task Deletion**:
   - Each task card includes a delete button that allows users to remove the task from the list and LocalStorage.
