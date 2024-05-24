
//  condiciones El if

// numero = 101
// if (numero > 100) {
//     console.log("El número es mayor que 100");
//     console.log("El número es: " + numero);
// } else {
//     console.log("El número NO es mayor que 100");
//     console.log("El número es: " + numero);
// }


// var x = 5;
// if (x > 2){
//     console.log("la condicion es: " + x);
// }


// var x = 5;
// if ((x > 3) && (x > 10)){
//     console.log("la condicion es: " + x);
// }


// var estacion = "verano";
// if (estacion == "verano"){
//     console.log("Me encanta la estacion de " + estacion);
// }

// var estaciones = "verano";
// if (estaciones == "verano"){
//     console.log("Me encanta la estacion de VERANO");
// }else {
//     console.log("me gusta solo una estacion del año y esa es " + estaciones);
// }

// function numeros(valor){
//  if (valor < 5){
//      console.log("El numero es menor a 5");
//  } else if (valor == 5){
//      console.log("El numero es igual a 5");
//  } else if (valor > 5){
//      console.log("El numero es mayor a 5");
//     } else {
//      console.log("INGRESE UN NUMERO Y NO UN TEXTO");
//  }
// }
// numeros(1);


// function marcoPolo(texto) {
//     if (texto == "Marco"){
//         return "Polo"
//     } else {
//         console.log("ingrese el nombre nuevamente");
//     }
// }
// console.log(marcoPolo("Marco"));




// sentencia switch

function cascada(valor){
    var respuesta;
    switch (valor){
        case 1:
            respuesta = "alpha";
            break
        case 2:
            respuesta = "beta";
            break
        case 3:
            respuesta = "gamma";
            break
        case 4:
            respuesta = "delta";
            break
    }
    return respuesta;
}
console.log(cascada(4));