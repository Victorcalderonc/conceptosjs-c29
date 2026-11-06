/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande*/

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

//&& esto se inifica Y
/*document
Representa el documento HTML de nuestra página web.

getElementById("resultado")
Busca en el HTML un elemento cuyo identificador sea resultado
.textContent
Permite establecer o cambiar el texto que aparece dentro de ese elemento HTML.*/

//Pedimos al usuario ingrese tres numeros

const numero1 = parseInt(prompt("Ingresa el primer numero"), 10);
const numero2 = parseInt(prompt("Ingresa el segundo numero"), 10);
const numero3 = parseInt(prompt("Ingresa el tercer numero"), 10);

if (numero1 >= numero2 && numero1 >= numero3) {
  document.getElementById("resultado").textContent =
    "El " + numero1 + " es el número más grande";
  console.log("El " + numero1 + " es el número más grande");
} else if (numero2 >= numero1 && numero2 >= numero3) {
  document.getElementById("resultado").textContent =
    "El " + numero2 + " es el número más grande";
  console.log("El " + numero2 + " es el número más grande");
} else {
  document.getElementById("resultado").textContent =
    "El " + numero3 + " es el número más grande";
  console.log("El " + numero3 + " es el número más grande");
}