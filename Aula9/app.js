console.log("1");

window.onload = () => {
    console.log("document loaded, applicaton started");
};

console.log ("2");

const addNumbers = (a,b) => {
    return a + b
}

a = 2
b = 3

const result = addNumbers (a,b)

console.log(result)



const multiplyNumbers = (c, d) => {
    return c * d; 
}

const resultMultiply = multiplyNumbers(2, 3)

console.log(resultMultiply);


const multFunctions = (e, f) => {
    return e * f;
}

const resultsFunctionMultiply = multFunctions(result, 2)

console.log(resultsFunctionMultiply)

console.log(multiplyNumbers(addNumbers(2, 3), 2))

const array = [2, 45, 34, 2]

const calcAverage = (nums) => {

    let value = 0;
    nums.forEach(num => {
        value += num;
    });

    return value / nums.length;
}

const result4 = calcAverage(array);
console.log(result4)

const array2 = [2, 3, 4, 5]

array2.forEach((element) => {
    console.log(element)
 });


let end = false;
let index = 0;
while (!end) {
    console.log("------")
    console.log(array2[index])
    index++;
    end = index >= array2.length;
};


class Test {
    constructor() {

    }
    
    showNumber () {
        return 2
    }


}

console.log("------")
console.log(new Test().showNumber())