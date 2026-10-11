//Realizar una sumatoria de numeros, creando un algoritmo que permita al usuario ingresar dos numeros, realizar la suma de ambos y mostrar el resultado.

// Importante la mayor cantidad de veces las variables se declaran con (const)

const numero1 = parseInt(prompt("ingresa el primero numero"));
const numero2 = parseInt(prompt("ingresa el segundo numero"));
//isNaN(variable) = true si pongo un texto, flase si pongo un numero
// una pregunta SI =if
/* if (condicion logica) {
las luneas que quiero utilizar si se cumple la condicion}
else {si no se cumple la condicion logica}

*/

console.log(isNaN (numero1))
//operador logico NOT !
// !true = false
// !false = true
if ( !isNaN(numero1)){
  const resultado = numero1 + numero2;
  console.log("El resultado es:" + resultado);
}else{
  console.log("No ingresaste un numero valido")
}