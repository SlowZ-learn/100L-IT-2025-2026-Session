// function favoriteAnimal(animal){
//     return animal + "is my favourite animal"


// }

// const message = favoriteAnimal("zebra");
// console.log(message)


// make a function that compares two numbers and returns the smallest
// personal attempt ---

// function min(a,b){
//     let min
//     if (b < a){
//         min = b
//     }else{
//         min = a

//     }
// return min

// }
// let small_number = min(0,2)
// console.log(small_number)


// so functions can be reassigned
// let sayBye = function() {
//     alert("byebye")

// }

// let notHi = sayBye
// sayBye()
// notHi()



function ask(question, yes, no) {
    if (confirm(question)){
        yes()
}else{
     no();
}}

function showOk() {
    alert("OK")
    
}
function showCancel() {
    alert("Cancel")
}

ask("Do You Agree ?", showOk,showCancel)
