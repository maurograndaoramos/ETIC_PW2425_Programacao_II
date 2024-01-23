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

// import Car from "./Car.js";
// import Motorcycle from "./Motorcycle.js";

// const data = {

//     cars: [
//         {
//             brand: 'ferrari',
//             speed: 200,
//         },
//         {
//             brand: 'fiat',
//             speed: 50,
//         },
//         {
//             brand: 'tesla',
//             speed: 300,
//         },
//     ],
//     motorcycles: [
//         {
//             brand: 'ducati',
//             speed: 400,
//         },
//         {
//             brand: 'kawazaki',
//             speed: 500,
//         },
//         {
//             brand: 'harley',
//             speed: 300,
//         },
//     ],
// };

// const vehicles = [];

// window.onload = () => {
//     console.log("Window loaded");
//     const nav = document.querySelector("nav");

//     const createUL = (name, data) => {
//         const ul = document.createElement("ul");
//         const title = document.createElement ("li");

//         title.innerText = name;
//         ul.appendChild(title);

//         data.forEach((element, index) => {
//             const li = document.createElement ("li");
//             const button = document.createElement ("button");
//             button.onclick = (event) => {
//                 switch (name) {
//                     case "cars":
//                         vehicles.push(new Car (element));
//                         break;
//                     case "motorcycles":
//                         vehicles.push(new Motorcycle (element));
//                         break;

//                     default:
//                         break;
//                 };
//                 console.log(vehicles);
//             };
//             button.innerText = element.brand;
//             li.appendChild(button);
//             ul.appendChild(li);
//         });

//         nav.appendChild(ul);
//     };

//     for (const key in data) {
//         createUL(key, data[key]);
//     };   
// };


// const car = new Car();
// const motorcycle = new Motorcycle();

import Boat from "./Boat.js";
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

let currentVehicle;

const loadData = async (url) => {

    const request = await fetch(url);
    const result = await request.json();

    return result;

};

const createLiContent = (item) => {

    const button = document.createElement("button");
    button.innerText = item.brand;

    console.log(currentVehicle);

    button.onclick = () => {

        if(currentVehicle) {
            currentVehicle.destroy();
        }

        switch (item.type) {
            case "car":
                currentVehicle = new Car(item);
                break;
            case "motorcycle":
                currentVehicle = new Motorcycle(item);
                break;
            case "boat":
                currentVehicle = new Boat(item);
                break;
        };
        console.log(currentVehicle)
    };

    return button;
}

const createList = (data) => {

    const ul = document.querySelector ("ul");

    data.forEach(item => {
        const li = document.createElement("li");
        li.appendChild(createLiContent(item));
        // li.style.color = "green"
        // li.innerText = item.brand;
        ul.appendChild(li);
        // ul.innerHTML += "<li style=color:red>" + item.type + "</li>";
    });
};

window.onload = async () => {

    const data = await loadData("data.json");
    data.sort ((a, b) => a.type.localeCompare(b.type));

    const ul = createList (data);
};