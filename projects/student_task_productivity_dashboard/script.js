//to do list elements
const inputField = document.getElementById("task-input");
const difficultySlider = document.querySelector("#difficulty");
const submitBtn = document.getElementById("addTask");
const removeBtn = document.getElementById("removeTask");
const taskList = document.getElementById("task-list");
const difficultyOutput = document.getElementById("difficulty-output");

const difficultyLevel = ["easy", "normal", "hard"];

let currentDifficulty;

//Progress bar elements
const totalTask = document.getElementById("progression-total");
const completeTask = document.getElementById("progression-complete");
const remainingTask = document.getElementById("progression-remaining");

// count variables
let totalCount = 0;
let completeCount = 0;
let remainderTaskCount;



function remainingCount() {
    let remainder = totalCount - completeCount;
    remainderTaskCount = remainder;
    return remainderTaskCount
}

// default behaviour for slider
document.addEventListener("DOMContentLoaded", () => {
    currentDifficulty = difficultyLevel[0];
    difficultyOutput.textContent = difficultyLevel[difficultySlider.value];
})


// difficulty slider for the task list
difficultySlider.addEventListener("input", () => {
    difficultyOutput.textContent = difficultyLevel[difficultySlider.value];
    currentDifficulty = difficultyLevel[difficultySlider.value];
})

submitBtn.addEventListener("click", () => {

    const task = inputField.value;
    inputField.value = "";

    if (task === "") {
        return
    }

    
    let taskEdit = document.createElement("span")
    taskEdit.textContent = task;

    const newTask = document.createElement("li");

    ++totalCount;
    totalTask.textContent = totalCount;

    remainderTaskCount = remainingCount();
    remainingTask.textContent = remainingCount();


    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';

    taskCheckbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            ++completeCount
            remainderTaskCount = remainingCount();
            completeTask.textContent = completeCount;
            remainingTask.textContent = remainderTaskCount

        } else {
            --completeCount;
            remainderTaskCount = remainingCount();
            completeTask.textContent = completeCount;
            remainingTask.textContent = remainderTaskCount
        }
    })



    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", () => {
        if (taskCheckbox.checked) {
            --completeCount
        }

        taskList.removeChild(newTask);
        --totalCount
        remainingCount()

        completeTask.textContent = completeCount;
        remainingTask.textContent = remainderTaskCount
        totalTask.textContent = totalCount
    })

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";

    editBtn.addEventListener("click", () => {
        const edit = prompt("enter text ");
        taskEdit.textContent = edit
    })
    
    
    newTask.appendChild(taskEdit);
    newTask.innerHTML+currentDifficulty;
    newTask.appendChild(taskCheckbox);
    newTask.appendChild(deleteBtn);
    newTask.appendChild(editBtn);
    taskList.appendChild(newTask);
})










