function dog_to_human (dog_age) {

    human_age = 16 * Math.log(dog_age) + 31
    

    if (human_age < 0 ){
        console.log("impossible condition")
    }else{
        console.log(`the dogs age is = ${dog_age}, human is ${human_age} `)

    }
    
}

dog_to_human(2)