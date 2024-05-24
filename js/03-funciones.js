// // otro ejercicio de funciones N°2
// function restar(a, b) {
//     console.log(a - b)
// }
// restar(10, 5);



// // otro ejercicio de funciones N°3
// function restar(a, b, c) {
//     console.log(a - b - c)
// }
// restar(10, 5, 3);


// // otro ejercicio de funciones N°4
// function sumar(a, b) {
//     return a + b;
// }
// console.log(sumar(5, 5)); // 8


// // otro ejercicio de funciones N°5
// function multiplicar(a, b){
//     return a * b;
// }
// console.log(multiplicar(5, 3)); /* 15 */


//14.- FUNCIONES

// function mostrarMensaje(){
//     console.log("Mi primera funcion");
// }
// mostrarMensaje();

// ARGUMENTOS

// function sumar(a, b){
//     var suma = a + b;
//     console.log("El resultado de " + a + " + " + b + " es: " + suma);
// }
// sumar(5, 3);

// function concatenar(texto1, texto2){
//     console.log(texto1 + " " + texto2)
// }
//
// concatenar("hola", "perro");


//////////////////////////////////////////////////////////////////////////////////////////

// VARIABLES GLOBALES Y LOCALES

// GLOBAL
// var miNombre = "Francisco";
// console.log(miNombre);
//
//
// function miFunsion(){
//     console.log(miNombre);
// }
// miFunsion();

// LOCAL

// function miNombre(){
//     var nombre = "Javier";
//     console.log(nombre);
// }
// miNombre()

// console.log(miNombre); // aca no puede acceder a la variable porque es de la funcion

//////////////////////////////////////////////////////////////////////////////////////////

// function crearCadenaConMeta(lenguajeDeProgramacion){
//     return "Mi meta es aprender " + lenguajeDeProgramacion;
//
// }
// console.log(crearCadenaConMeta("JavaScript"));


// function crearCadenaConMeta(lenguajeDeProgramacion){
//     var text = "Mi meta es aprender " + lenguajeDeProgramacion;
//     console.log(text);
// }
// crearCadenaConMeta("JavaScript");


// function crearCadenaConMeta(lenguajeDeProgramacion){
//     return "Mi meta es aprender " + lenguajeDeProgramacion;
// }
// let textoFinal = crearCadenaConMeta("JavaScript");
// console.log(textoFinal);

//////////////////////////////////////////////////////////////////////////////////////////

function proximoEnLaFila(arreglo, elemento){
    arreglo.push(elemento);
    return  arreglo.shift();
}

var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes:" + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));
console.log("Despues:" + JSON.stringify(miArreglo));
