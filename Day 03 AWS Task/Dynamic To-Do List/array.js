let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        document.getElementById("message").innerHTML =
            "⚠ Please enter a task!";
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    displayTasks();

    document.getElementById("message").innerHTML =
        "Task Added Successfully!";

    taskInput.value = "";
}

function displayTasks() {

    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let completedCount = 0;

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerText = task.text;

        if (task.completed) {
            span.classList.add("completed");
            completedCount++;
        }

        let btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        let completeBtn = document.createElement("button");
        completeBtn.innerText = "Complete";
        completeBtn.className = "complete-btn";
        completeBtn.onclick = function () {
            markComplete(index);
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function () {
            removeTask(index);
        };

        btnGroup.appendChild(completeBtn);
        btnGroup.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnGroup);

        taskList.appendChild(li);
    });

    document.getElementById("totalTasks").innerText = tasks.length;
    document.getElementById("completedTasks").innerText = completedCount;
}

function markComplete(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    displayTasks();

    document.getElementById("message").innerHTML =
        "Task Completed Successfully!";
}

function removeTask(index) {

    tasks.splice(index, 1);

    saveTasks();
    displayTasks();

    document.getElementById("message").innerHTML =
        "Task Deleted Successfully!";
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}