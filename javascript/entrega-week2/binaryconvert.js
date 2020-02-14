//////////////////////////////////// EJERCICIO BINARY CONVERT APP ///////////////////////////////////

/*Haz que la función BinaryConverter(str) devuelva la forma decimal del valor binario. 
Por ejemplo: si se pasa 101 el programa debe retornar un 5, 
si se pasa 1000 debe retornar un 8, etc.*/

'use strict';

const test = '101';
const test2 = '1000';

function binaryConverter(str) {
  return str
    .split('')
    .reverse()
    .map((value, index) => (+value ? 2 ** index : 0))
    .reduce((accumulator, current) => accumulator + current);
}

console.log(`La conversión a decimal del binario ${test} es ${binaryConverter(test)}.`);
console.log(`La conversión a decimal del binario ${test2} es ${binaryConverter(test2)}.`);