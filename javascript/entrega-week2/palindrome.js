////////////////////////////////// EJERCICIO CONTADOR LETRAS  /////////////////////////////////////////////

/*Haz que la función PalindromeTwo(str) tome el parámetro str que se le pasa y devuelva true 
si el parámetro es un palíndromo, (la cadena se lee igual hacia adelante que hacia atrás) 
de lo contrario devuelve false. 
Por ejemplo: Arriba la birra debería devolver true, se lee igual del derecho que del revés.*/

'use strict';

const pal = '¡Arriba la birra!';

const not = null;

function palindromeTwo(str) {
  const cleanString = str.toLowerCase().replace(not, '');
  const reversedString = cleanString
    .split('')
    .reverse()
    .join('');
  return cleanString === reversedString;
}

console.log(palindromeTwo(pal) + `: ${pal}${palindromeTwo(pal) ? '' : ' no'} es palíndromo.`);