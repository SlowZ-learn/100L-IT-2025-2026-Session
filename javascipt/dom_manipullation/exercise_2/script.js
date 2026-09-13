
let text = document.getElementById("info")
let age = Number(prompt("Enter your age"));


if (age <18){
    text.textContent = "Not qualified to enter";
    text.style.color = "red"
}else{
    text.textContent = "Qualified to enter";
    text.style.color = "green"
}
