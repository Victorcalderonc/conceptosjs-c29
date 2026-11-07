/*Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2. */

// Pedimos un número al usuario
const numero = parseInt(prompt("Ingresa el primer numero"), 10);

// Comprobamos si el residuo de dividir entre 2 es cero.
if (numero % 2 === 0) {
  console.log("El " + numero + " es divisible por 2.");
} else {
  console.log("El " + numero + " no es divisible por 2");
}
  