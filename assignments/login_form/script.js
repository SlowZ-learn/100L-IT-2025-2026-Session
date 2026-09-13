const nameField = document.getElementById("name_field")
const emailField = document.getElementById("email_field")
const passField = document.getElementById("pass_field")


const length = document.getElementById("length")
const letter = document.getElementById("letter")
const character = document.getElementById("character")




passField.addEventListener(`input`, () => {
    if (passField.value.length >= 6) {
        length.className = "right"
        length.innerText = ""
    } else {
        length.className = "wrong"
        length.innerText = "Enter 6 letters"

    }

});
passField.addEventListener(`input`, () => {
    const passFieldTest = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const password = passField.value

    const errors = []

    if (passFieldTest.test(password)) {
        length.className = "right"
        length.innerText = ""
    } else {
        length.className = "wrong"
        length.innerText += "• Min 8 characters• At least 1 letter, 1 number"

    }

});



// nameInput.addEventListener("input", () => {
//     
//     const name = nameInput.value;

//     if (nameField.test(name)) {
//         letter.className = "right"
//     } else {
//         letter.cl;
//     }
// });

