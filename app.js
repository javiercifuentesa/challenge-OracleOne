// let title=document.querySelector('h1');
// title.innerHTML='Juego del numero secreto';

// let parrafo=document.querySelector('p');
// parrafo.innerHTML='¡Adivina el numero!. Selecciona un número entre 1 y 10:';

let secretNum=0;
let attemps=0;
let numbersDrawnList=[];
let numberMax=10;

function setText(a,b) {
    let element=document.querySelector(a);
    element.innerHTML=b;
    return; // como buena practica.
}


function verifyAttempt(){
    let numbUser=parseInt(document.getElementById('numUser').value);
    
    console.log(secretNum);

    if(numbUser===secretNum){
        setText('p',`Lo hiciste en ${attemps} ${(attemps==1)?'intento!, un genio!':'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numbUser>secretNum) {
            setText('p','¡El número secreto es menor!');
        } else {
            setText('p','¡El número secreto es mayor!');
        }
    }
    attemps++;
    cleanBox();
}

function cleanBox() {
    // let valueBox=document.querySelector('#numUser');
    // valueBox.value = '';
    document.querySelector('#numUser').value = ''; // forma de hacerlo más eficiente.
}

function initialConditions() {
    setText('h1','El juego del adivino🔮');
    setText('p',`¡Llego la hora!, selecciona un número entre 1 y ${numberMax}: `);
    secretNum=generationNumber();
    attemps=1;
}

function reset() {
    //limpiar box
    cleanBox();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    initialConditions();
    //desabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

function generationNumber() {
    let generatorNum=Math.floor(Math.random()*numberMax)+1;
    console.log(generatorNum);
    console.log(numbersDrawnList);
    //si ya sorteamos todos los numeros
    if (numbersDrawnList.length==numberMax) {
        setText('p','ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista.
        if(numbersDrawnList.includes(generatorNum)){
            return generationNumber();
        } else {
            numbersDrawnList.push(generatorNum);
            return generatorNum;
        }
    }

}
initialConditions();