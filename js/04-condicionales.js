
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




// SENTENCIA SWITCH

// function cascada(valor){
//     var respuesta;
//     switch (valor){
//         case 1:
//             respuesta = "alpha";
//             break
//         case 2:
//             respuesta = "beta";
//             break
//         case 3:
//             respuesta = "gamma";
//             break
//         case 4:
//             respuesta = "delta";
//             break
//         default:
//             respuesta = "debe ingresar un valor de 1 a 4";
//     }
//     return respuesta;
// }
// console.log(cascada(3));

// var producto = ""
//
// switch (producto) {
//     case "pizza":
//         console.log("La pizza basica cueta 10.000");
//         break;
//     case "completo":
//         console.log("La completo cuesta 5.000");
//         break;
//     case "hambuerguesa":
//         console.log("La hambuerguesa cuesta 3.000");
//         break;
//     default: // esto funciona como un else
//         console.log("vuela a elegir un producto");
// }



// function clasificacionVolumen(valor){
//     var volumen;
//
//     switch (valor){
//         case 1:
//             volumen = "bajo";
//             break;
//
//         case 2:
//         case 3:
//             volumen = "intermedio";
//             break;
//
//         case 4:
//         case 5:
//         case 6:
//             volumen = "alto"
//             break;
//
//         default:
//             volumen = "volumen no clasificado"
//             break;
//     }
//     return volumen;
// }
//
// console.log(clasificacionVolumen());

/////////////////////////////////////////////////////////////////////////////
//  function seleccionDeIdioma(valor){
//     var idioma;
//
//     if (valor == 1){
//         idioma = "español";
//     } else if (valor == 2){
//         idioma = "Frances"
//     } else if (valor == 3){
//         idioma = "Italiano"
//     } else {
//         idioma = "idioma no espesificado"
//     }
//     return idioma;
//  }
//
// console.log(seleccionDeIdioma(4));

// //SE CREA EL MISMO EJERCICIO PERO OCUPANDO UN SWITCH

// function seleccionDeIdioma(valor){
//     var idioma;
//
//    switch (valor){
//        case 1:
//            idioma = "español";
//            break;
//        case 2:
//            idioma = "Frances";
//            break;
//        case 3:
//            idioma = "Italiano";
//            break;
//        default:
//            idioma = "idioma no espesificado";
//    }
//    return idioma;
// }
//
// console.log(seleccionDeIdioma(2));
/////////////////////////////////////////////////////////////////////////////


// function esMenorQue(a,b){
//     return a < b;
// }
// console.log(esMenorQue(1, 3));


// desafio latam


function adivinaNumero(numero){

    if (numero == 7){
        return "Adivinaste el número secreto";
    } else if (numero == 6){
        return "Casi, pero no es el número secreto";
    } else if (numero == 8){
        return "Estas equivocado, el número secreto no es 8";
    } else {
        return "Estas equivocado, el número secreto no es " + numero;
    }
}

adivinaNumero(7);
adivinaNumero(6);
adivinaNumero(8);







