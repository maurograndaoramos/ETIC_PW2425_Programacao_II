const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(2, 3))

let a ="Praia";

if(a=="Praia") {
    console.log("É a praia!");
} else {
    console.log("Não é a praia!");
};

let b = 10;

if(b == "10") {
    console.log(true);
} else if (b == "10") {
    console.log(false);
}
    else {
        console.log(false)
    };

b == "10" ? console.log(true) : console.log(false);

switch(b) {
    case 10:
        console.log(true);
        break;
    case "10":
        console.log("false");
        break; 
    case "20":
        console.log("false");
        break;
    case "30":
        console.log("false");
        break;
    default:
        console.log(true)
};

let c = "100";

if(b == "10" && c == "100") {
    console.log("É verdade, é 10 e 100")
} else {
    console.log("É falso, não é um 10 e um 100")
};

let d = 0;
let e = 0;

while (d < 20 && e < 10) {
    console.log("d" + d);
    console.log("e" + e);
    d = d + 1;
    e = e + 1;
};

for(let f = 0; f < 20; f++) {
    console.log(f);
};

let arr = ["Praia", "Cidade", "Campo", "Floreste", "Montanha", 10, 100];

for (let g = 0; g <20; g++) {
    console.log(arr[g]);
};

for (let h = arr.length-1; h > 0; h--) {
    console.log(arr[h]);
};

let array = ["Armazém", "Loja", "Casa", "Fortaleza", "Canto", 20, 200];

array.forEach((element) => {
   console.log(element)
});

let object = {
    Name: "Mauro",
    age: 33,
    gender: "Male",
};

console.log(object["Name"])

for (const key in object) {
    console.log(object[key]);
}