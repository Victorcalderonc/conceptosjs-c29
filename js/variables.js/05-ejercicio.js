/*Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt */

// prompt() pide el nombre al usuario y lo guarda en la variable nombre.

// parseInt() convierte un texto en un número entero.
// textContent muestra el resultado dentro de un elemento HTML.

const numero1 = parseInt(prompt("ingresa el primer numero"), 10);
const numero2 = parseInt(prompt("ingresa el segundo numero"), 10);
document.getElementById("resultado").textContent = numero1 + numero2;
