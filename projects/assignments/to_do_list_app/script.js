// MY attempt

const addButton = document.getElementById("add_button");
const subButton = document.getElementById("sub_button");

const inputField = document.getElementById("list_input");
const List = document.getElementById("List")


addButton.addEventListener("click", () => {
    // if (inputField ===" "){
    //     alert("empty field ")
    // }

    const listItem = inputField.value;
    listInput.value = "";

    const newListItem = document.createElement("li");

    newListItem.textContent = listItem;
    List.appendChild(newListItem)


}
)



subButton.addEventListener("click", () => {
    List.lastChildElement.remove()
})

// correction

