//////////////////////////////////// EJERCICIO DADO ///////////////////////////////////

/*Crea un programa que simule el comportamiento de un dado. 
El programa debe ir almacenando los valores de cada tirada en una variable, 
y cuando llegue a 50 puntos o más, debe finalizar su ejecución 
mostrando un mensaje tal que:

¡Enhorabuena, ha salido un Y! ¡Has ganado con un total de Z puntos!.
A su vez, debe mostrarse el siguiente mensaje tras cada tirada:

Tirada X: ha salido un Y. Tienes un total de Z puntos.
(X: número de la tirada, Y: número aleatorio del 1 al 6, Z: total de puntos acumulados).

P.D: X, Y, Z son nombres que he dado para explicar lo que pido, 
no quiere decir que debáis llamar de esa manera a las variables correspondientes.*/

"use strict";


let totalDiceScore = 0;

for (let i= 1; i <= 50; i++) {
    
    let resultDice = Math.round(Math.random() * (6 - 1)+ 1);

    console.log(`Tirada numero ${i}, ha salido un ${resultDice}! 
    Sumas un total de : ${totalDiceScore + resultDice}!`,);

    totalDiceScore = resultDice + totalDiceScore ;
    if (totalDiceScore >= 50) {
        console.log(`¡Enhorabuena, ha salido un ${resultDice}! 
        ¡Has ganado con un total de ${totalDiceScore } puntos!.`);
        break;
    }
}        