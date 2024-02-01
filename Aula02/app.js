// console.log("Starts here!")

// let a = 1;
// let b = 0;

// const fibonnaci = () => {
    
//     for (let i = 0; i <= 10; i++) {
//         const temporary = a;
//         a = a + b;
//         b = temporary;
//         console.log(a);
//     }
// }


// fibonnaci();


// let user = {
//     id: 0,
//     name: "mauro",
//     age: 33,
//     gender: "male",
//     dob: "11-12-1990",
//     hobbies: ['DnD', 'Gaming', 'Podcasts', 'Podcasts']
// }

// // console.log(user);

// for (const key in user) {
//     console.log(user[key]);
// }

// class User {

//     #name;
//     #age;

//     constructor () {
//         this.#name = user.name;
//         this.#age = user.age;
//     }

//     getName () {
//         return this.#name;
//     }

//     getAge () {
//         return this.age;
//     }

//     set name(value) {
//         this.#name = value;
//     }

//     get name () {
//         return this.#name;
//     }
//  }

// const user2 = new User(user);
// console.log(user2.name);
// console.log(user2.getName());

import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const car = new Car();
const motorcycle = new Motorcycle();
