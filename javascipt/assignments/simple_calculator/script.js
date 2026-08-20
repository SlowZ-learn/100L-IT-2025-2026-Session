let firstValue = Number(prompt("First Value"));
let secondValue = Number(prompt("Second Value"));
let operator = prompt("Pick + , - , /(division) , *(multiplication)");








function calculate(){
    function add(){
        sum = firstValue + secondValue
        return sum
    }

    function sub() {
        minus = firstValue - secondValue
        return minus
    }

    if (operator === "+"){
        alert(add())
    }else if( operator === "-"){
        alert(sub())
    }



    // if (operator === "+"){
    //     alert(firstValue + secondValue)
    // }else if (operator === "-"){
    //     alert(firstValue - secondValue)

    // }else if (operator === "*"){
    //     alert(firstValue * secondValue)
    // }else if(operator === "/"){
    //     alert(firstValue/ secondValue)
    // }else{
    //     console.log("error")
    // }
}

let answer = calculate();
