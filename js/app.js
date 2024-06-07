//
// console.log(document.querySelector('h3'))
// console.log(document.querySelector('.h3-danger')) // sirve para llamar a las clases de los elementos
// // console.log(document.querySelector('#parrafo'))
// // console.log(document.getElementById('parrafo')) // sirve para buscar y traer un ID solamente
// console.log(document.querySelectorAll('p'))
// console.log(document.getElementsByTagName('p'))




// var cambioTexto = document.querySelector('#parrafo')
// cambioTexto.textContent = "Este es un nuevo texto"
// cambioTexto.innerHTML = " <b>Este es un nuevo texto 5 </b>" // te permite colocar etiquetas
//
// cambioTexto.style.color = "red"
// cambioTexto.style.backgroundColor = "skyblue"
// cambioTexto.style.textAlign = "right"
// cambioTexto.style.textTransform = "uppercase"
// cambioTexto.style.fontSize = "1.5rem"

// cambioTexto.classList.add('hola')
//

// console.log(document.querySelector(".fondo-verde#naranjo"))
// console.log(document.querySelector("ul li.fondo-lila#amarillo"))
// console.log(document.getElementsByClassName("fondo-verde"))





//ACCEDER AL TEXTO DE UN ELEmento

// var lista = document.getElementById("listado");
// console.log(lista.innerText);
// console.log(lista.innerHTML);
// console.log(lista.textContent);


// CAMBIAR TEXTO CON JAVASCRIPT

// var cambio = document.getElementById("parrafo");
//  cambio.innerText = "Hola como estas!!"
// console.log(cambio)

// actualizar un atributo de un elemento
// var enlace = document.getElementsByTagName("a");
// // console.log(enlace[0].getAttribute("href"));
// console.log(enlace[0].setAttribute("href", "https://www.siler.cl"));



// eliminar un atributo de un elemento
var enlace = document.getElementsByTagName("a");
// console.log(enlace[0].getAttribute("href"));
console.log(enlace[0].removeAttribute("href"))