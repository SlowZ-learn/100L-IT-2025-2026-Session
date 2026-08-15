let userInput = parseInt(prompt("Enter range of number "))

for (let initialValue = 1; initialValue<= userInput ; initialValue++){

    if (initialValue % 3 === 0 && initialValue % 5 === 0 ){
        console.log("FizzBuzz")

    }else if(initialValue % 3 === 0){
        console.log("Fizz")

    }else if(initialValue  % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(initialValue)
    }

    alert(initialValue)

}
