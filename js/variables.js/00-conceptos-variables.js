//Esto es un comentario simple

/*Esto es un comentario de multiples lineas*/

//Crear variables(let -const - var)
//tipos de datos: primitios, referencia

/*let esta nos sirve para si el dato que vamos a utilizar
despues lo tenemos que cambiar(a lo lago de la vida de este programa yo le voy a cambiar el valor) 
ejemplo */
//declarar una variable

let numero = 10;
let numeroDecimal = 10.6;

/* nota el punto y coma es opcional no obligatorio, si quieres adicional eso en todas las lineas lo puedes hacer con
le damos click derecho y le damos ---format document--- esto me auto completa todo */
//comando para mandar a la terminal
console.log("Este es un mensaje de prueva");

//si quiero enviar solo el contenido de la variable no le colocamos comillas
console log(numero) // aca estoy diciendo mostrame el contenido de la palabra numero
console log("numero") //aaca estoy diciendo mostrame la palabra numero
console log("El contenido de la variable es:"numero) // esto nos da un error por ende lo correcto es
console log("El contenido de la vairable es:" + numero) // al agregarle el mas solucionamos ese  error esto se llama CONCATENAR



//Como saber que tipo de dato tiene una variable
console.log(typeof(numeroDecimal))

//ejemplo con texto
let nombre = "leandro"
console.log(typeof(nombre))

//otro  tipo BOOLEANO true, false
let encendido = true
console.log(typeof(encendido))

// Cuando hago una variable pero no le coloco signo =
let prueba
console.log(typeof(prueba)) // esto nos dice que es una variable que existe pero todabia no le emos cargado un valor 
console.log(prueba)

// Ahora vamos a tener una variable vacia utilizamos --null --- ejemplo
let vacio = null
console.log(typeof (vacio))
console.log(vacio)

// a todas nuestra variables let les puedo cambiar el valor ejemplo vamos a provar con la ---Vacio--

//Cambio el continido de la variable(aca podemos notar que no volvemos a colocar la palabra let solo la variable)
vacio = "prueba"  // Si no me equivoco y le coloco let esto nos va arrojar erro por que una regla del lenguaje es que no puedo tener dos variables con el mismo nombre
console.log(vacio)


// Variable ---const--- cuando se utiliza esta cuento queremos un valor constante
// Estavariable constate la puedo utilizar pero nunca voy a poder cambiar su valor
const url = "https://universe.rollingcodeschool.com/my-courses"

console.log(URL)


