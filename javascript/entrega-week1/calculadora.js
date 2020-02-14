'use strict';

let number1 = +prompt ('Introduce el primer valor para realizar la operación');
let number2 = +prompt ('Introduce el segundo valor para realizar la operación');
////////////////// VARIABLE PARA IF  ///////////////////
let operacion = +prompt ('Introduce el operador para poder realizar la operación \n 1 = SUMA \n 2 = RESTA \n 3 = MULTIPLICACIÓN \n 4 = DIVISIÓN \n 5 = EXPONENCIAL');

///////////////// VARIABLE PARA SWITCH ////////////////
// let operacion = prompt ('Introduce el nombre del operador para poder realizar el calculo \n 1 = SUMA \n 2 = RESTA \n 3 = MULTIPLICACIÓN \n 4 = DIVISIÓN \n 5 = EXPONENCIAL');

let operador;
let resultado;

/////////////////////////////////////   IF  ////////////////////////////////////////////

/*if (operacion === 1) { resultado = number1 + number2;
    operador = "+";
document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);} 

else if (operacion === 2) { resultado = number1 - number2; 
    operador = "-";
document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);}

else if (operacion === 3) { resultado = number1 * number2; 
    operador = "x";
document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);}

else if (operacion === 4) { resultado = number1 / number2; 
    operador = "/";
document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);}

else if (operacion === 5) { resultado = number1 ** number2; 
    operador = " elevado a ";
document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);} */

///////////////////////////////////////////////////// SWITCH ///////////////////////////////////////////////////

switch (operacion) {
    case 'suma' :
        resultado = number1 + number2;
        operador = "+";
        document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        break;

        case 'resta' :
        resultado = number1 - number2;
        operador = "-";
        document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        break;

        case 'multiplicacion' :
        resultado = number1 * number2;
        operador = "x";
        document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        break;

        case 'division' :
        resultado = number1 / number2;
        operador = "/";
        document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        break;

        case 'exponencial' :
        resultado = number1 ** number2;
        operador = "elevado a : ";
        document.write ('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        console.log('El resultado de ' + number1 + operador + number2 + ' es : ' + resultado);
        break;

    default: if (number1,number2,operacion === null) {
        document.write ('No has introducido ningun valor correcto ,recarga la pagina para introducir nuevos valores');
        console.log('No has introducido el ningun valor correcto ,recarga la pagina para introducir nuevos valores');
    }
        break;
}

