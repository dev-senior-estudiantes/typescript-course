//area de un triangulo
var promptSyncsc = require('prompt-sync')();
var base1 = Number(promptSyncsc("Ingresa base del triangulo:"));
var altura1 = Number(promptSyncsc("Ingresa altura del triangulo:"));
var area1 = (base1 * altura1) / 2;
console.log("El Area del Triangulo es:          ".concat(area1));
