
      const taskInput = document.getElementById("taskInput");
      const addButton = document.getElementById("addButton");
      const taskList = document.getElementById("taskList");
      const totalTasks = document.getElementById("totalTasks");
      const completedTasks = document.getElementById("completedTasks");

function updateStats() {
    const tasks = taskList.querySelectorAll(".task-item");
    const completed = taskList.querySelectorAll(".task-item.completed").length;
    totalTasks.textContent = `Total tasks: ${tasks.length}`;
    completedTasks.textContent = `Completed: ${completed}`;

    const emptyItem = taskList.querySelector(".empty-list");
    if (tasks.length === 0) {
      if (!emptyItem) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "empty-list";
        emptyMessage.textContent = "No tasks yet. Add one above!";
        taskList.appendChild(emptyMessage);
      }
    } else if (emptyItem) {
      emptyItem.remove();
    }
  }

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const liElement = document.createElement("li");
    liElement.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "complete-checkbox";

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    checkbox.addEventListener("change", () => {
      liElement.classList.toggle("completed", checkbox.checked);
      updateStats();
    });

    deleteButton.addEventListener("click", () => {
      liElement.remove();
      updateStats();
    });

    liElement.append(checkbox, taskSpan, deleteButton);
    taskList.appendChild(liElement);

    taskInput.value = "";
    updateStats();
  });

  updateStats();