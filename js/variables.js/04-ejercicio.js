/* Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 
input: Coder 
Output: Hola Coder*/

// prompt() pide el nombre al usuario y lo guarda en la variable nombre.
// getElementById busca el elemento HTML y textContent muestra el saludo con el nombre ingresado.


let nombre = prompt("¿Como te llamas?");
document.getElementById("resultado").textContent = "Hola " + nombre;
