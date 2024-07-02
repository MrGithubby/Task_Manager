// Adding Elements via Jquery
  $(document).ready(function() {
    // jQuery event listener for the "Add Task" button
    $('#close-buttons').click(function() {
      // Add your task adding logic here (e.g., sending data to server)
      // For demonstration, let's log a message
      console.log('Task added!');

      // Close the modal using Bootstrap's modal hide method
      $('#formModal').modal('hide');
    });
  });


// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("completeTaskList")) || []; // If this localStorage parse resolved undefined, create an empty array
let nextId = JSON.parse(localStorage.getItem("nextId"));


// Todo: create a function to generate a unique task id
let idCounter = nextId;
function generateTaskId() {
    idCounter++;
    console.log(idCounter);
    return idCounter
}

// Todo: create a function to create a task card
$('#add-task-button').click(function(event) {
    $(document).ready(function() {
        event.preventDefault(); // Do I need this line?
        let taskTitle = $('#task-title-input').val();
        let taskDueDate = $('#task-due-date').val();
        let taskDescription = $('#task-description-input').val();
        let idNumber = generateTaskId();

        let taskData = {
            taskID: idNumber,
            title: taskTitle,
            dueDate: taskDueDate,
            description: taskDescription,
        };
        
        localStorage.setItem('task', JSON.stringify(taskData));
        taskList.push(taskData)
        localStorage.setItem('completeTaskList', JSON.stringify(taskList));
        localStorage.setItem('nextId', JSON.stringify(idNumber));

    console.log(taskList)
    });

    // Close the modal using Bootstrap's modal hide method
    $('#formModal').modal('hide');    
});

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $('#todo-cards').empty(); // Clear the task container first

    taskList.forEach(function(task) {
        let cardHtml = `
            <div class="card" id="task-${task.taskID}" style="width: 18rem;" draggable="true">
                <div class="card-body">
                    <h5 class="card-title">${task.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${task.dueDate}</h6>
                    <p class="card-text">${task.description}</p>
                    <button class="btn btn-danger delete-task" data-id="${task.taskID}">Delete</button>
                </div>
            </div>
        `;
        $('#todo-cards').append(cardHtml);
    });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault(); // Do I need this line?
    let lastTask = taskList[taskList.length - 1];
    if (lastTask) {
        let cardHtml = `
            <div class="card" id="task-${lastTask.taskID}" style="width: 18rem;" draggable="true">
                <div class="card-body">
                    <h5 class="card-title">${lastTask.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${lastTask.dueDate}</h6>
                    <p class="card-text">${lastTask.description}</p>
                    <button class="btn btn-danger delete-task" data-id="${lastTask.taskID}">Delete</button>
                </div>
            </div>
        `;
        $('#task-container').append(cardHtml);
    }
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    $('#todo-cards').on('click', '.delete-task', function() {
        let taskId = $(this).data('id');
        deleteTask(taskId);
    });
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    $(".card").draggable({
        revert: "invalid",
        stack: ".card"
    });

    $("#done").droppable({
        accept: ".card",
        drop: function(event, ui) {
            let card = ui.draggable;
            $(this).append(card);
        }});

    $("#in-progress").droppable({
        accept: ".card",
        drop: function(event, ui) {
            let card = ui.draggable;
            $(this).append(card);
        }        
    })
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
});
