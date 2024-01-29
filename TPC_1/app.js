
window.onload = () => {


    /**
     * -- Declaração e Manipulação de Variáveis --
     * Declara duas variáveis, (a , b) e atribui-lhes um valor.
     * Troca os valores de a e b sem usar uma variável temporária.
     * Faz console.log dessas 2 variáveis.
     */

let a = parseInt(prompt("Qual o valor de variavel A"));
let b = parseInt(prompt("Qual o valor de variavel B"));


a = a + b;
b = a - b;
a = a - b;


console.log("A (antigamente B):", a);
console.log("B (antigamente A):", b);


    /**
     * -- Instruções Condicionais --
     * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
     * O resultado dessa função verifica se o número é par ou ímpar.
     * Faz console.log desse resultado.
     */

isEven = () => {
    if (evenTestValue % 2 === 0) {
        console.log("Numero é par")
    } else if (! evenTestValue % 2 === 0) {
        console.log("Numero é impar")
    } else {
        console.log("Isso não é um numero...")
    };
}

isEvenAgain = () => evenTestValue % 2 === 0 ? console.log("Numero continua a ser par") : ! evenTestValue % 2 === 0 ? console.log("Numero continua a ser impar") : console.log("Yup, isso não é um numero!")

let evenTestValue = parseInt(prompt("Escreve um numero par ou impar"))
isEven()
isEvenAgain()


    /**
     * -- Arrays --
     * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
     * Itera sobre esse array e faz console.log apenas dos números pares.
     */


let arrayValues = [2, 123, 34, 65, 48];


let arrayEvenCleaner = () => {
    for (let i = 0; i < arrayValues.length; i++) {
        if (arrayValues[i] % 2 === 0) {
            console.log(arrayValues[i]);
        }
    }
};


arrayEvenCleaner();


    /**
     * -- Funções --
     * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
     * Faz console.log desse resultado.
     */



let somaFunction = () => {
    num3 = num1 + num2
    console.log("O valor da soma é: " + num3)
}

let num1 = parseInt(prompt("Qual o valor do primeiro numero da soma"));
let num2 = parseInt(prompt("Qual o valor do segundo numero da soma"));

somaFunction();

    /**
     * -- Objetos --
     * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
     * Faz console.log dessas propriedades.
     */

let pessoa = {
    primeiroNome : "Zé",
    segundoNome : "Povinho",
    idade : "25",
    genero : "M",
}

console.log(pessoa)

    /**
     * -- Loops --
     * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
     * Faz console.log a cada iteração.
     */

let c = 0;
let d = 1;

const fibonacci = () => {
    console.log(c);

    for (let i = 1; i < 10; i++) {
        const temporary = c + d;
        c = d;
        d = temporary;
        console.log(c);
    }
}


fibonacci();

    /**
     * -- Manipulação do DOM --
     * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
     * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
     */



    /**
     * -- Async/Await e Fetch --
     * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
     * e transforme o resultado desse fetch em formato json.
     * Faz console.log desse json.
     */
}