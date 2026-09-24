let myBox = document.getElementById("box")
let btn = document.getElementById("btn")
myBox.addEventListener('click',()=>{
let Colors = ["red","blue","purple"]
let  randomNumber = Math.floor(Math.random()*Colors.length)
 myBox.style.backgroundColor = Colors[randomNumber]
})