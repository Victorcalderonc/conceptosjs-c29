/* Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo */

/*prompt() pide la frase
-for recorre sus letras.
-charAt(i) obtiene cada letra.
-includes() comprueba si esa letra es una vocal.
-.toLowerCase() convierte esa letra a minúscula.
-console.log() muestra las vocales encontradas.
-includes() es contiene
-i++ significa aumentar el valor de i en 1.
-let i = 0	Empezamos en la posición 0
-i < frase.length	Continuamos mientras queden letras*/


// Pedimos una frase al usuario
const frase = prompt("Ingresa la frase");

// Guardamos las vocales encontradas
let vocales = "";

// Recorremos letras por letra
//Se utiliza i porque es una costumbre muy común entre programadores, es lo mismo que colocar posicion 
for (let i = 0; i < frase.length; i++) {
  const letra = frase.charAt(i).toLowerCase();

if ("aeiou".includes(letra)) {
  vocales = vocales + letra;
}
}

console.log(vocales);