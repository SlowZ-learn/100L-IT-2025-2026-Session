// Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    set,
    update,
    remove,
    onValue
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDxC7lpBJF5R3NmFzpkPwq-gdnLqaTVuYY",
    authDomain: "taskrecorder-2ce33.firebaseapp.com",
    databaseURL: "https://taskrecorder-2ce33-default-rtdb.firebaseio.com",
    projectId: "taskrecorder-2ce33",
    storageBucket: "taskrecorder-2ce33.firebasestorage.app",
    messagingSenderId: "1020009350569",
    appId: "1:1020009350569:web:31e65f3f16d366a787b0b8",
    measurementId: "G-H2F8DQ50VE"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const tasksRef = ref(db, "tasks");

//to do list elements

const taskForm = document.getElementById("task-form");
const inputField = document.getElementById("task-input");
const removeBtn = document.getElementById("removeTask");
const difficultySlider = document.querySelector("#difficulty");
const taskList = document.getElementById("task-list");
const difficultyOutput = document.getElementById("difficulty-output");
const categorySelect = document.getElementById("category");

//modal elements

const clearModal = document.getElementById("clear-modal");
const cancelClear = document.getElementById("cancel-clear");
const confirmClear = document.getElementById("confirm-clear");

const editModal = document.getElementById("edit-modal");
const editTaskInput = document.getElementById("edit-task-input");
const cancelEdit = document.getElementById("cancel-edit");
const saveEdit = document.getElementById("save-edit");

const difficultyLevel = ["easy", "normal", "hard"];
let currentDifficulty = difficultyLevel[0];
let tasks = {};
let editingTaskId = null;

//Progress bar elements

const totalTask = document.getElementById("progression-total");
const completeTask = document.getElementById("progression-complete");
const remainingTask = document.getElementById("progression-remaining");

//default behaviour for slider

difficultyOutput.textContent = currentDifficulty;

//difficulty slider for the task list

difficultySlider.addEventListener("input", () => {
    difficultyOutput.textContent = difficultyLevel[difficultySlider.value];
    currentDifficulty = difficultyLevel[difficultySlider.value];
});

//update progress

function updateProgress() {
    const taskArray = Object.values(tasks);
    const total = taskArray.length;
    const complete = taskArray.filter(task => task.completed).length;
    const remaining = total - complete;

    totalTask.textContent = total;
    completeTask.textContent = complete;
    remainingTask.textContent = remaining;
}

//display tasks

function displayTasks() {
    taskList.innerHTML = "";

    Object.entries(tasks).forEach(([taskId, task]) => {
        const newTask = document.createElement("li");

        //task name

        const taskText = document.createElement("span");
        taskText.textContent = task.name;

        //difficulty

        const difficulty = document.createElement("span");
        difficulty.textContent = task.difficulty;

        //category

        const category = document.createElement("span");
        category.textContent = task.category;

        //checkbox

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = task.completed;

        taskCheckbox.addEventListener("change", () => {
            const oldValue = tasks[taskId].completed;
            const newValue = taskCheckbox.checked;

            tasks[taskId].completed = newValue;

            updateProgress();

            update(ref(db, `tasks/${taskId}`), {
                completed: newValue
            }).catch(error => {
                tasks[taskId].completed = oldValue;

                displayTasks();
                updateProgress();

                console.error("Error updating task:", error);
            });
        });

        //delete

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            const deletedTask = tasks[taskId];

            delete tasks[taskId];

            displayTasks();
            updateProgress();

            remove(ref(db, `tasks/${taskId}`)).catch(error => {
                tasks[taskId] = deletedTask;

                displayTasks();
                updateProgress();

                console.error("Error deleting task:", error);
            });
        });

        //edit

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", () => {
            editingTaskId = taskId;
            editTaskInput.value = task.name;

            editModal.classList.add("show");
            editTaskInput.focus();
        });

        newTask.appendChild(taskText);
        newTask.appendChild(difficulty);
        newTask.appendChild(category);
        newTask.appendChild(taskCheckbox);
        newTask.appendChild(deleteBtn);
        newTask.appendChild(editBtn);

        taskList.appendChild(newTask);
    });
}

//add task

taskForm.addEventListener("submit", event => {
    event.preventDefault();

    const taskName = inputField.value.trim();

    if (taskName === "") {
        return;
    }

    const newTask = {
        name: taskName,
        difficulty: currentDifficulty,
        category: categorySelect.value,
        completed: false
    };

    const newTaskRef = push(tasksRef);
    const taskId = newTaskRef.key;

    tasks[taskId] = newTask;

    displayTasks();
    updateProgress();

    inputField.value = "";

    set(newTaskRef, newTask).catch(error => {
        delete tasks[taskId];

        displayTasks();
        updateProgress();

        console.error("Error saving task:", error);
    });
});

//open clear modal

removeBtn.addEventListener("click", () => {
    if (Object.keys(tasks).length === 0) {
        return;
    }

    clearModal.classList.add("show");
});

//cancel clear

cancelClear.addEventListener("click", () => {
    clearModal.classList.remove("show");
});

//clear all tasks

confirmClear.addEventListener("click", () => {
    const oldTasks = { ...tasks };

    tasks = {};

    displayTasks();
    updateProgress();

    clearModal.classList.remove("show");

    remove(tasksRef).catch(error => {
        tasks = oldTasks;

        displayTasks();
        updateProgress();

        console.error("Error clearing tasks:", error);
    });
});

//close clear modal when clicking outside

clearModal.addEventListener("click", event => {
    if (event.target === clearModal) {
        clearModal.classList.remove("show");
    }
});

//save edit

saveEdit.addEventListener("click", () => {
    const newName = editTaskInput.value.trim();

    if (newName === "" || editingTaskId === null) {
        return;
    }

    const taskId = editingTaskId;
    const oldName = tasks[taskId].name;

    tasks[taskId].name = newName;

    displayTasks();

    editModal.classList.remove("show");
    editingTaskId = null;

    update(ref(db, `tasks/${taskId}`), {
        name: newName
    }).catch(error => {
        tasks[taskId].name = oldName;

        displayTasks();

        console.error("Error editing task:", error);
    });
});

//cancel edit

cancelEdit.addEventListener("click", () => {
    editModal.classList.remove("show");
    editingTaskId = null;
});

//close edit modal when clicking outside

editModal.addEventListener("click", event => {
    if (event.target === editModal) {
        editModal.classList.remove("show");
        editingTaskId = null;
    }
});

//get tasks from Firebase

onValue(tasksRef, snapshot => {
    const data = snapshot.val();

    tasks = data || {};

    displayTasks();
    updateProgress();
}, error => {
    console.error("Firebase error:", error);
});