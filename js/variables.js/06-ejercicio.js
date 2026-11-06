/* EJERCICIO 6

Escribe un programa que pida dos números y escriba
en la pantalla cuál es el mayor.

Ejemplo:
Input: 15, 3
Output: El 15 es el número más grande.
*/

// prompt() solicita un dato al usuario.
// parseInt() convierte el texto ingresado en un número entero.
// const declara una variable que no se puede reasignar.

// if significa "si": ejecuta un bloque cuando la condición es verdadera.
// else if significa "si no, comprueba otra condición".
// else significa "si no": se ejecuta cuando las condiciones anteriores son falsas.

/*
OPERADORES DE COMPARACIÓN:

=   Asigna un valor. Ejemplo: const edad = 20;
==  Compara valores, permitiendo conversión de tipos. Ejemplo: 5 == "5" → true.
=== Compara valor y tipo de dato. Ejemplo: 5 === "5" → false.
>   Comprueba si un valor es mayor que otro.
*/

// Pedimos los dos números al usuario.
const numero1 = parseInt(prompt("Ingresa el primer número"), 10);
const numero2 = parseInt(prompt("Ingresa el segundo número"), 10);

// Comparamos los números y mostramos el resultado.
if (numero1 > numero2) {
  document.getElementById("resultado").textContent = "El " + numero1 + " es el número más grande";
} else if (numero1 === numero2) {
  document.getElementById("resultado").textContent = "Los números son iguales";
} else {
  document.getElementById("resultado").textContent = "El " + numero2 + " es el número más grande";
}
