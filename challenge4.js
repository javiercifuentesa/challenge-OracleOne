let GenericList = [];
let languagesName = ['JavaScript','C','C++','Kotlin','Python'];
languagesName.push('Java','Ruby','GoLang');

function languageCodes() {
    console.log(languagesName);
    return;
}
languageCodes();


function languageCodes() {
    console.log(languagesName.reverse());
    return;
}
languageCodes();

// 6.	Crea una función que calcule el promedio de los elementos en una lista de números.
const numbers = [5,6,7,4,5,6,7,4,5,7];
let sum = 0;
let average = 0;

function averageNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    average = sum / numbers.length;
    console.log(average);
    return;
}
averageNumbers();

// 7.	Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
//let numbers = [5,6,7,4,5,6,7,4,5,7];
let max = 0;
let min = 0;

function maxMinNumbers() {
    max = Math.max(...numbers);
    min = Math.min(...numbers);
    console.log(`El número más grande es: ${max} y el número más pequeño es: ${min}`);
    return;
}
maxMinNumbers();


// 8.	Crea una función que devuelva la suma de todos los elementos en una lista.
let suma = 0;

function sumNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }
    console.log(suma);
    return;
}
sumNumbers();


// 9.	Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
let position = 0;

function positionNumber(num) {
    num=prompt('Ingrese un número que crees que este en la lista: ');
    position = numbers.indexOf(parseInt(num));
    if (position === -1) {
        console.log(`aviso ${-1}. El número no se encuentra en la lista.`);
    } else {
        console.log(`El número se encuentra en la posición: ${position}`);
    }
}
positionNumber();


// 10.	Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let numbers1 = [6,4,7,4,5,6,7,4,6,3];
let sumList = [];

function sumListNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        sumList.push(numbers[i] + numbers1[i]);
    }
    console.log(sumList);
    return;
}
sumListNumbers();


// 11.	Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let squareList = [];

function squareNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        squareList.push(numbers[i]*numbers[i]);
    }
    console.log(squareList);
    return;
}
squareNumbers();