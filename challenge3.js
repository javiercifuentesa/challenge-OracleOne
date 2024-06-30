//	Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calculateIMC(mts,kgs) {
    mts=prompt('ingresa tu altura en metros (ejemplo: 1.70): ');
    kgs=prompt('ingresa tu peso en kgrs (ejemplo: 72): ');
    let imc=kgs/(mts*mts);
    let resultIMC=imc.toFixed(2);
    console.log(`Tu IMC es: ${resultIMC}`);
    alert(`tu IMC es: ${resultIMC}`);
}
calculateIMC();


function factorial(num) {
    num=prompt('ingresa un numero para calcular su factorial: ');
    let result=1;
    for(let i=1; i<=num; i++){
        result=result*i;
    }
    console.log(`el factorial de ${num} es: ${result}`);
    return;   
}
factorial();

function fibonacci(num) {
    num=prompt('ingresa un numero para calcular su serie fibonacci: ');
    let a=0;
    let b=1;
    let c;
    for(let i=2; i<=num; i++){
        c=a+b;
        a=b;
        b=c;
    }
    console.log(c);
    return;
}
fibonacci();

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña, si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertDollarsToReales(dollars) {
    dollars=prompt('ingresa el valor en dolares para convertir a reales: ');
    let reales=dollars*4.80;
    console.log(`$${dollars} dolares son R$${reales} reales.`);
    alert(`$${dollars} dolares son R$${reales} reales.`);
    return;
}
convertDollarsToReales();


// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calculateAreaPerimeter(height,width) {
    height=prompt('ingresa la altura de la sala: ');
    width=prompt('ingresa el ancho de la sala: ');
    let area=height*width;
    let perimeter=2*(area);
    console.log(`El área de la sala es: ${area} mts2 y el perímetro es: ${perimeter} mts.`);
    alert(`El área de la sala es: ${area} mts2 y el perímetro es: ${perimeter} mts.`);
    return;
}
calculateAreaPerimeter();

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calculateAreaPerimeterCircle(radius) {
    radius=prompt('ingresa el radio de la sala circular: ');
    let area=Math.PI*(radius*radius);
    let perimeter=2*Math.PI*radius;
    console.log(`El área de la sala circular es: ${area.toFixed(2)} mts2 y el perímetro es: ${perimeter.toFixed(2)} mts.`);
    alert(`El área de la sala circular es: ${area.toFixed(2)} mts2 y el perímetro es: ${perimeter.toFixed(2)} mts.`);
    return;
}
calculateAreaPerimeterCircle();

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function multiplicationTable(num) {
    num=prompt('ingresa un numero para mostrar su tabla de multiplicar: ');
    table='';
    for(let i=1; i<=10; i++){
        let result=num*i;
        table += `${num} x ${i} = ${result}\n`;
        console.log(`${num} x ${i} = ${result}`);
    }
    alert(table);
}
multiplicationTable();