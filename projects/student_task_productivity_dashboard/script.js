//html stuff
const inputField = document.getElementById("task-input");
const difficultySlider = document.querySelector("#difficulty");
const submitBtn = document.getElementById("addTask");
const removeBtn = document.getElementById("removeTask");
const taskList = document.getElementById("task-list");
const difficultyOutput = document.getElementById("difficulty-output");

const difficultyLevel = ["easy", "normal", "hard"];
// difficulty slider for the task list


difficultySlider.addEventListener("input", () => {
    difficultyOutput.textContent = difficultyLevel[difficultySlider.value];
    
})

submitBtn.addEventListener("click", () => {
    const task = inputField.value;
    inputField.value = "";

    const newTask = document.createElement("li");

    newTask.textContent = task;
    taskList.appendChild(newTask);

    // adding the slider text to task
    

})

removeBtn.addEventListener("click", () => {
    taskList.lastElementChild.remove()
})