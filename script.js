document.addEventListener("DOMContentLoaded", function() {



// EJEMPLO DE COMO SE HACE
const enviar = document.getElementById('enviar');
enviar.addEventListener('click', (e) => {
    console.log(e);
})
// FIN EJEMPLO DE COMO SE HACE

// YO

//1
const ejercicio1 = document.getElementById('ejercicio1');
ejercicio1.addEventListener('click', (e) => {
    console.log(e);
    let numero1 = 5;
    let numero2 = 10;
    let resultado = numero1 + numero2;

    // escribir en consola
    console.log(resultado);
})

//2
const ejercicio2 = document.getElementById('ejercicio2');
ejercicio2.addEventListener('click', (e) => {
    console.log(e);
    var numero = 5;
    var cadena = "cinco";
    var resultado = numero === cadena;

    console.log(resultado);
})

//3
const ejercicio3 = document.getElementById('ejercicio3');
ejercicio3.addEventListener('click', (e) => {
    console.log(e);

    var dia = true;
    if(dia) {
        console.log("es de dia")
    } else {
        console.log("es de noche")
    }
})

//4
const ejercicio4 = document.getElementById('ejercicio4');
ejercicio4.addEventListener('click', (e) => {
    console.log(e);

    var color
    console.log(color);

})

//5 CUANDO PONGO COMILLAS AL NULA DEL TYPEOF SE CONVIERTE EN STRING EN LA CONSOLA, PORQUE?
const ejercicio5 = document.getElementById('ejercicio5');
ejercicio5.addEventListener('click', (e) => {
    console.log(e);

    let nula = null;
    console.log(typeof nula);
})

//6 es necesario el consol.log dentro del hambito de la funcion?o sobra? hay un orden ?
const ejercicio6 = document.getElementById('ejercicio6');
ejercicio6.addEventListener('click', (e) => {
    console.log(e);
    
    function convar (){
        return "hola";
    }

    var saludo = convar();
    console.log(saludo);
    
})

//7 aqui esta el consol log,
const ejercicio7 = document.getElementById('ejercicio7');
ejercicio7.addEventListener('click', (e) => {
    console.log(e);
    
    function conlet (){
        console.log();
        return "chao";
    }

    let saludo = conlet();
    console.log(saludo);
})

//8
const ejercicio8 = document.getElementById('ejercicio8');
ejercicio8.addEventListener('click', (e) => {
    console.log(e);

    const semana = {
        dia:"lunes",
    }
    semana.nueva = "hoy es:" + "lunes";
    console.log(semana.nueva);
    
})

//9 acceder quiere decir mostrar por pantalla?
const ejercicio9 = document.getElementById('ejercicio9');
ejercicio9.addEventListener('click', (e) => {
    console.log(e);

    if(true){
        var acceder = "entrar";
    };

    console.log(acceder);
    
})

//10 que deberia poner en el prentesis alado del if?? 
const ejercicio10 = document.getElementById('ejercicio10');
ejercicio10.addEventListener('click', (e) => {
    console.log(e);

    if(true){
        let enter = "entrar";
    };

    console.log("enter");

})

//11
const ejercicio11 = document.getElementById('ejercicio11');
ejercicio11.addEventListener('click', (e) =>{
    console.log(e);
    
    const GRAVEDADTIERRA = "9,8ms-2."

    console.log(GRAVEDADTIERRA);
})

//12


// FIN YO
const ejercicio12 = document.getElementById('ejercicio12');
ejercicio12.addEventListener('click', (e) =>{
    console.log(e);
    
    const GRAVEDADTIERRA = "9,8ms-2."

    console.log(GRAVEDADTIERRA);
    
})


// # DOCUMENTACIÓN ################################################### //

// Es un comentario
var nombre = "Juan";
console.log(nombre);

// Tipos de datos
var cadena = "Hola mundo"; // string
var numero = 25;           // number
var esVerdadero = true;    // boolean
var esFalse = "false";     // string ¡OJO EN UN IF ENTRA¡

var noDefinido;    // ---> undefined // NI SIQUIERA TIENE VALOR
var esNulo = null; // ---> null // VALOR NO VALIDO PERO TIENE VALOR

// Tipos de variables
var a    =  1; // PUEDE CAMBIAR Y SE PUEDE ESCUCHAR EN OTROS HÁMBITOS
let b    =  2; // PUEDE CAMBIAR Y NOOOOO SE PUEDE ESCUCHAR EN OTROS HÁMBITOS
const c  =  3; // NO PUEDE CAMBIAR Y NOOOOO SE PUEDE ESCUCHAR EN OTROS HÁMBITOS

//let pepe = null; quitar el var del if y poner aqui fuera el let para que sea accesible en los hámbitos necesarios.
if(true){
    var pepe = "5";
    let jose = "12"; // SE ACONSEJA SIEMPRE ESTE PARA MÁS SEGURIDAD
}
pepe = "qasdas"; // BIEN
jose = "adsad"; // ERROR


// CONSTANTES
const PI = 3.14159; // EN MAYUSCULA POR CONVECCIÓN COMBENCIÓN


// OPERADORES
let suma = 5+3; // los aritméticos....  (+, -, *, /, %), 
let esIgual = 5 =="5"; // Comparativos (true)  (==, ===, !=, !==, <, >, <=, >=) 
let noEsIgual = 5 === "5"; //  (false)

// Y LOGICOS  (&& esto yyyy lo otro , || o esto o lo otro, !).
let esIGuales = 5 == 5 && 4 == 4;


// ESTRUCTURAS DE CONTROL

// if-else
let aab = 5;
let x = 10;
if(aab > x){
    console.log("a es mayor que x")
} else {
    console.log("x es mayor que a")
}

let pppp = 1;
switch (pppp) {
    case 1: 
        console.log("Es uno"); 
        break;
    case 2: 
        console.log("Es dos"); 
        break;
    case "pepe": 
        console.log("Es pepe"); 
        break;
    default: 
        console.log("No es ni uno ni dos");
}

/*

Manipulación del DOM:

Crea un botón y muestra un mensaje en la consola cuando se haga clic en él.

Variables y tipos de datos:

*Declara una variable con tu nombre y muéstralo en la consola.
*Declara dos variables: una con un número y otra con una cadena que contenga un número. Comprueba si son iguales usando ==.
*Declara una variable booleana que indique si es de día. Si es verdadera, muestra un mensaje diciendo "Es de día". Si es falso, "Es de noche".
*Declara una variable pero no la inicialices. Muestra su valor en la consola. (NO LO TENGO CLARO)
*Declara una variable con el valor null. Muestra su tipo usando typeof.
Ámbitos y tipos de variables:

*Declara una variable con var fuera de una función y trata de acceder a ella dentro de la función.
*Haz lo mismo pero con let.
*Declara una constante que represente los días de la semana y trata de reasignarla.
*Declara una variable dentro de un bloque if usando var y accede a ella fuera del bloque.
*Haz lo mismo pero con let.
Constantes:

*Declara una constante que represente la gravedad de la Tierra y muestra su valor en la consola.
Intenta reasignar el valor de una constante y observa el error que se produce.
Operadores:

Crea dos variables numéricas y calcula su suma, resta, multiplicación y división.
Compara dos números para ver cuál es mayor, menor o si son iguales.
Utiliza el operador de igualdad estricta (===) para comparar dos valores.
Comprueba si dos condiciones diferentes son verdaderas usando &&.
Comprueba si al menos una de dos condiciones diferentes es verdadera usando ||.
Estructuras de control:

Usando if-else, verifica si un número es par o impar.
Usando if-else, determina cuál de tres números es el más grande.
Crea una variable que represente el día de la semana con un número (1 para lunes, 2 para martes, etc.). Usa switch para mostrar el nombre del día.
Usando switch, escribe un programa que traduzca pequeñas palabras en inglés a español (por ejemplo: "dog" a "perro").
Crea una estructura switch sin la cláusula break y observa el comportamiento cuando se cumple una condición.


DUDAS: ...
Crea un botón que muestre un mensaje en la consola al hacerle clic.
Declara una variable con tu nombre y muéstralo en la consola.
Compara dos cadenas usando el operador == y luego con ===.
Declara una variable booleana y muestra un mensaje basado en su valor.
Muestra el tipo de una variable no inicializada en la consola.
Muestra el tipo de una variable con valor null en la consola.
Accede a una variable var declarada fuera de una función, dentro de la misma.
Intenta acceder a una variable let declarada en un bloque if, fuera del bloque.
Declara una constante y trata de modificar su valor.
Calcula el módulo (resto de la división) de dos números.
Compara dos números para determinar cuál es mayor, menor o si son iguales.
Usa el operador && para comprobar dos condiciones verdaderas.
Usa el operador || para comprobar dos condiciones, donde al menos una es verdadera.
Verifica si un número es par o impar usando if-else.
Usa switch para determinar el día de la semana basado en un número del 1 al 7.
Declara una variable let dentro de un bloque y accede a ella desde fuera.
Declara una constante que represente los meses del año.
Usa operadores aritméticos para calcular el área de un rectángulo.
Compara el valor y el tipo de dos variables con === y !==.
Declara una variable y cambia su valor dentro de un bloque if.
Usa switch para clasificar las estaciones del año basado en un mes.
Declara y muestra en consola el tipo de una variable con un valor booleano representado como cadena.
Suma, resta, multiplica y divide dos números introducidos por el usuario.
Usa if-else para determinar si un número es positivo, negativo o cero.
Crea un programa que determine si una palabra tiene más de 5 letras.
Comprueba si un año es bisiesto o no.
Usa switch para mostrar mensajes personalizados para tus 3 frutas favoritas.
Declara tres constantes y muestra sus valores en consola.
Usa operadores lógicos para determinar si un número está en el rango de 10 a 20.
Crea un botón que cambie el color de fondo de la página al hacerle clic.
*/



});


