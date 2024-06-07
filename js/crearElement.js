var lista = document.getElementById("lista");
console.log(lista)

var add_li = document.createElement('li');
add_li.textContent = "Primer contenido";

lista.appendChild(add_li);



var arrayElement = ["Primer Texto", "Segundo Texto", "Tercer Texto"];

arrayElement.forEach(item => {
    // console.log(item)

    var add_li = document.createElement('li');
    add_li.textContent = item;

    lista.appendChild(add_li);
})




// var lista = document.getElementById("lista");
// var arrayElement = ["item 1", "item 2", "item 3"];
//
// var fragment = document.createDocumentFragment();
//
//     arrayElement.forEach(item => {
//         var li = document.createElement("li");
//         li.textContent = item;
//         fragment.appendChild(li);
//     })
//
// lista.appendChild(fragment);
//
//



// var lista = document.getElementById("lista_desordenada"); // llame el elemento del html
// var fragment = document.createDocumentFragment(); // crear un fracmento de elemento de una variable
// var listados_agregar = ["Francisco", "Sarai", "Alonso"] // cree un array para inyectar al html
//
//
//     listados_agregar.forEach(element => {
//         var li = document.createElement("li");
//         li.textContent = element;
//         fragment.appendChild(li);
//     })
//
// lista.appendChild(fragment)


































