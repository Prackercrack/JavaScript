

// var nueva_lista = document.getElementById("lista_desordenada")
//
// var fragmento = document.createDocumentFragment()
// var array = ["Pastas", ["Arroz"], ["Atun"]]
//
//     array.forEach(listado_comida => {
//         var li = document.createElement("li")
//         li.textContent = listado_comida
//         fragmento.appendChild(li)
//     })
//
// nueva_lista.appendChild(fragmento);








var nuevo = document.getElementById("lista_desordenada");

var nuevoElemento = document.createElement("li")
nuevoElemento.innerText = "hola";

nuevo.append(nuevoElemento)
