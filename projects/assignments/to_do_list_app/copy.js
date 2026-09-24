//html stuff
const inputField = document.getElementById("task-input");
const difficultySlider = document.querySelector("#difficulty");
const submitBtn = document.getElementById("addTask");
const removeBtn = document.getElementById("removeTask");
const taskList = document.getElementById("task-list");
const difficultyOutput = document.getElementById("difficulty-output");

const difficultyLevel = ["easy", "normal", "hard"];

let currentDifficulty;


document.addEventListener("DOMContentLoaded", () => {
    difficultySlider.value = difficultyLevel[0];
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

    const newTask = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete"

    deleteBtn.addEventListener("click",() => {
        taskList.removeChild(newTask);

    })
    
    // adding the slider text to task
    newTask.textContent = task + " : " + currentDifficulty;

    
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
})



