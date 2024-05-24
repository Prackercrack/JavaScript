//tipos de variable, las variables tiene que ser descriptivas

// let numero = 42;
// console.log(typeof numero);
//
// let nombre = "hola mundo";
// console.log(typeof nombre);
//
// let verdadero = true
// console.log(typeof verdadero);
//
// let reasignacion;
// reasignacion = "Francisco";
// console.log(typeof reasignacion);
//
// let nula = null;
// console.log(typeof nula);

///////////////////////////////////////////////////////////////////
// let miVariable = "Mi primera variable"
// console.log(miVariable);

///////////////////////////////////////////////////////////////////

//01.- OPERADORES DE ASIGNACION

// let a;
// let b = 2;
//
// console.log(a);
// console.log(b);
//
// a = "hola"; // EL OPERADOR DE ASIGNACION ES EL DE LA DERECHA QUE ASIGNA A LA VARIABLE QUE ESTA A LA IZ.
// console.log(a);

//02.- ASIGNAR EL VALOR DE UNA VARIABLE A OTRA VARIABLE

// OPCION 1
// let a = 5;
// let b = a;
//
// console.log(a);
// console.log(b);

// OPCION 2

// let a = 7;
// let b;
//
// b = a;
// console.log(b);

//03.- INICIALIZAR VARIABLES

// let hello; // Declaro la variable pero no inicializada la variable y tiene agignado un espacio en memoria
// let hello = 9; //Asignamos la variable o inicializando la variable
//
// console.log(hello);
// camelCase si la primera palabra tiene mas de una pablabra la segunda es con mayuscula

//04.- MAYUSCULAS Y MINUSCULA / tiene que ser exacto / Case-sensitive / camelCase

// let miVariable = 5;
//
// console.log(Mivariable);
// console.log(MiVariable);
// console.log(MIVARIABLE);
// console.log(mivariable);

//05.- OPERACIONES ARITMETICAS

// let suma = 7 + 3;
// console.log(suma);
//
// let resta = 7 - 3; // Positivo
// console.log(resta);
//
// let resta2 = 3 - 7; // Negativo
// console.log(resta2);
//
// let multiplicar = 5 * 5; // Multiplicación
// console.log(multiplicar);
//
// let dividir = 20 / 2; // Diviión
// console.log(dividir);
//
// let sobranteDivision = 5 % 3; // Resto de la División
// console.log(sobranteDivision);

//06.- INCREMENTAR EL VALOR DE UNA VARIABLE

// let librosComprados = 105;
// console.log(librosComprados);
//
// // OPCION 1
// librosComprados = librosComprados + 1;
// console.log(librosComprados);
//
// // OPCION 2
// librosComprados++;
// console.log(librosComprados);
//

//07.- REDUCIR EL VALOR DE UNA VARIABLE

// let librosComprados = 105;
// console.log(librosComprados);
//
// // OPCION 1
// librosComprados = librosComprados - 1;
// console.log(librosComprados);
//
// // OPCION 2
// librosComprados--;
// console.log(librosComprados);

//08.- SUMA CON OPERADOR DE ASIGNACION COMPUESTA

// let a = 23;
// a = a + 5;
//
// console.log(a);
//
// // OTRA FORMA MAS FACIL
// let b = 23;
// b += 5; //
//
// console.log(b);
//
// // OTRO EJEMPLO
// let miVenta = 1000;
// console.log(miVenta);
//
// miVenta += 500;
// console.log(miVenta)

//09.- RESTA CON OPERADOR DE ASIGNACION COMPUESTA

// let descuento = 15000;
// descuento -= 2000;
// console.log(descuento);

//10.- MULTIPLICACION CON OPERADOR DE ASIGNACION COMPUESTA

// let sueldo = 15000;
// sueldo *= 2;
// console.log(sueldo);

//10.- VIVICION CON OPERADOR DE ASIGNACION COMPUESTA

// let salario = 100000;
// salario /= 5;
// console.log(salario);

//11.- VARIABLE CON CADENA DE CARACTERES
/* Secuencias de Espace

\' = comillas simples
\" = comillas doble
\\ = Barra Invertida
\n = Linea Nueva
\r = Retorno de Carro
\t = Tabulación
\b = Retrocelso
\f = Salto de pagina

*/
// var nombre = "francisco";
// console.log(nombre);

//12.- CONCATENAR CADENAS DE CARACTERES

// var nombreCompleto = "Francisco" + " " + "Miranda";
// console.log(nombreCompleto);

// var verbo = "programar";
// var mensaje = "Estoy aprendiendo a: " + verbo;
// console.log(mensaje)

// AGREGAR VARIABLES A CADENAS DE CARACTERES
// var nombre = "Francisco ";
// var apellido = "Miranda";
//
// console.log(nombre)
//
// nombre += apellido;
// console.log(nombre)

// LONGITUD DE UNA CADENA DE CARACTERES - ENCONTRAR LA LONGITUD DE UNA CADENA

// var miCadena = "¡Francisco!";
// console.log(miCadena.length);

// NOTACION DE CORCHETES - ACCEDER A LOS CARACTERES DE UNA CADENA

// var elNombre = "JavaScript";
// var n = 1;
// /*
// caractes    1 2 3 4 5 6 7 8 9 10
// cadena:     J a v a S c r i p t
// indice:     0 1 2 3 4 5 6 7 8 9
//  */
//
// console.log(elNombre[4]); // para saber un caracter especifico
// console.log(elNombre[elNombre.length - 1]); // para saber cual es el ultimo caracter
// console.log(elNombre[elNombre.length - n]); // para saber cual es el ultimo caracter
//


// PALABRAS EN BLANCO

// El perro negro corrio rapidamente a la tienda.

// var texto1 = "perro";
// var texto2 = "negro";
// var texto3 = "corrio";
// var texto4 = "rapidamente";
//
// var textoFinal = "El " + texto1 + " " + texto2 + " "+ texto3 + " " + texto4 + " a la tienda.";
//
// console.log(textoFinal)


//13.- ARREGLOS con corchetes cuadrados

// var miArreglo = ["Francisco", 37];
// console.log(miArreglo);
//
// var listaEstudiante = ["Juan", "Tomas", "Maria"]
// console.log(listaEstudiante);


// ANIDACION DE ARREGLOS

// var miArreglo = [["Francisco", 37] , ["Sandra", 37, 58]];
// console.log(miArreglo);

// ACCEDER A ARREGLOS ESPECIFICOS

// var nota = [10, 15, 50, 60];
// console.log(nota);
//
// console.log(nota[1]);
//
// var suma = nota[0] + nota[1] + nota[2] + nota[3];
// console.log(suma); // 135

// MODIFICAR ELEMENTOS DE UN ARREGLO

// var nota = [10, 20, 30];
// console.log(nota);
//
// nota[1] = 10;
// nota[2] = 10;
// console.log(nota);

//ACCEDER A ELEMENTOS MULTIDIMENSIONALES

// ACCEDER AL INDICE DEL ARREGLO Y LUEGO AL INDICE DEL ARREGLO

// var miArreglo = [[1, 2, 3], [4, 5, 6],[7, 8, 9]]
//
// /*
// ARREGLO:            [[1, 2, 3], [4, 5, 6],[7, 8, 9]]
// INDICE:                  0          1         2
// INDICE INTERNO:       0  1  2    0  1  2   0  1  2
//  */
//
// console.log(miArreglo)
// console.log(miArreglo[1][2])


// var miListaDeCompras = [["cereales", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco", 7],["pollo", 7]];
// // console.log(miListaDeCompras);
//
// console.log("Voy a comprar " + miListaDeCompras[0][1] + " " +miListaDeCompras[0][0]);
//
// console.log("Voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0]);
//
//


/////////////////////////////////////////////////////////////////////////////////////////////////////

// .PUSH() = ENPUJAR O AGREGAR

// var estaciones = ["invierno", "Otoño","Primavera"]
// console.log(estaciones)
//
// estaciones.push("verano")
// console.log(estaciones)




// .POP() = REMOVER EL ULTIMO ELEMENTO Y LO BUENO QUE ESE VALOR LO PUEDO ASIGNAR A UNA VARIABLE

// var estaciones = ["invierno", "Otoño","Primavera", "Verano"]
// console.log(estaciones)
//
// estaciones.pop()
// console.log(estaciones)


// var estaciones = ["invierno", "Otoño","Primavera", "Verano"] // sacara el ultimo elemento
// console.log(estaciones)
//
// var removida;
// removida = estaciones.pop() // la saco y se la paso como variable el elemento a removida
// console.log(estaciones)
//
// console.log(removida) // muestra la variable removida


// .SHIFT() - REMOVER EL PRIMER ELEMENTO DEL ARREGLO

// var estaciones = ["invierno", "Otoño","Primavera", "Verano"]
// console.log(estaciones)

// estaciones.shift()
// console.log(estaciones)


.UNSHIFT() - AGREGAR EL PRIMER ELEMENTO DEL ARREGLO

var estaciones = ["Otoño","Primavera", "Verano"]
console.log(estaciones)

estaciones.unshift("sol")
console.log(estaciones)

/////////////////////////////////////////////////////////////////////////////////////////////////////













