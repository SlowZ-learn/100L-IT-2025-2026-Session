// let car = {
//     brand :"Koenigsegg",
//     name:"Jesko",
//     drive:function () {
//         console.log("zooom");

//     }
// }

// console.log(car);
// console.log(car.name);

//modified the value after the property to nnamdi
// car.name = "nnamdi";
// console.log(car.name);

// adding to the object 
// car.chassis = "carbonfiber"
// console.log(car);

// delete an object 
// delete car.name
// console.log(car);

//method, a function inside an object
// car.drive()



// class work 1
// let phone = {
//     brand : "oneplus",
//     name: "oneplus-15t",
//     calling: () =>{
//         console.log("calling");

//     }
// }
// phone.calling()

const name = document.getElementById(`name`)
const sex = document.getElementById(`sex`)
const complexion = document.getElementById(`complexion`)


// this method 
let person = {
    name: "ivy",
    complexion: "light skin",
    sex: "female",

    introduce: () => {
        console.log(`my name is ${this.name} and i am ${this.complexion}`)
    }
}
name.textContent = person.name
sex.textContent = person.sex


complexion.textContent = person.complexion

