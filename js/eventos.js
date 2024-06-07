
var naranjo = document.getElementById('naranjo')


function mostrarClick(e){
    console.log(e.target.innerText)
}


naranjo.addEventListener("click", mostrarClick)