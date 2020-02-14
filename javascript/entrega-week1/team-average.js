"use Strict";
//////////////////////////////////// EJERCICIO MEDIA EQUIPOS ///////////////////////////////////

/*Calcula la media de puntos en los últimos tres partidos de estos tres equipos 
y muestra por consola el que tenga una media más alta:*/

const teamMaria = [62, 34, 55];
const teamPaula = [35, 60, 59];
const teamRebeca = [40, 39, 63];
const names = ['Maria','Paula','Rebeca'];

const averageMaria = teamMaria.reduce((accumulator, currentValue) => {
    return accumulator += currentValue / teamMaria.length; 
},0)
console.log(`La media total del equipo de ${names[0]} es de :${averageMaria}`);

const averagePaula = teamPaula.reduce((accumulator, currentValue) => {
    return accumulator += currentValue / teamPaula.length; 
},0)
console.log(`La media total del equipo de ${names[1]} es de :${averagePaula}`);

const averageRebeca = teamRebeca.reduce((accumulator, currentValue) => {
    return accumulator += currentValue / teamRebeca.length; 
},0)
console.log(`La media total del equipo de ${names[2]} es de :${averageRebeca}`);

    
if (averageMaria > averagePaula) {
    console.log(`la media mas alta es : ${names[0]} con una media de : ${averageMaria} `);
} else
    averagePaula <= averageRebeca 
    ? console.log(`la media mas alta es de : ${names[2]} con una media de : ${averageRebeca} `) 
    : console.log(`la media mas alta es de : ${names[1]} con una media de : ${averagePaula} `);
