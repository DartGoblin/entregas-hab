"use strict";

////////////////////////////////// EJERCICIO CONTADOR LETRAS  /////////////////////////////////////////////

/*Dada la función LetterCount(str) toma el parámetro str que se está pasando y 
devuelve la primera palabra de mayor longitud. 
Por ejemplo: 
Hoy es un día estupendo y fantástico. debe devolver fantástico porque es la primera
palabra que más letras tiene. */

'use strict';
const sentence = '¡ Hoy es un día estupendo y fantástico !';

const re = null;

function letterCount(str) {
  const strArray = str
    .toLowerCase()
    .replace(re, '')
    .split(' ');
  let longestWord = strArray[0];
  for (const word of strArray) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(
  `La palabra más larga es ${letterCount(sentence)} 
  con una longitud de ${letterCount(sentence).length} letras.`
);