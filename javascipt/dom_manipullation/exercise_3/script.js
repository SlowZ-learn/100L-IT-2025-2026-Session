// changing the styling of an element using DOM manipulation

// const title = document.querySelector('#main-heading')
// title.style.color = "green"
// console.log(title);

// css properties while using the style property are written in "camelCase" and not "snakecase"

// const listNames = document.querySelectorAll("list-items")
// // listNames.style.fontSize = "5rem" // error cannot set properties of undefined 

// for (i = 0 ; i < listNames.length; i ++ ){ //lengh is to select all the listNames 
//     listNames.style.fontSize = "5rem" //now it applies to all the listNames 
// }

// Creating elements 
const container = document.getElementById("main-heading")
container.innerHTML = "<li>eat<li>"