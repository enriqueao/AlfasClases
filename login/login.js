
document.getElementById('1').addEventListener('mouseout',cambiarColorInicial,true);


function login() {

  var correo = document.getElementById('correo');
}

function cambiarColor(elemento) {
  elemento.classList.remove("contenedor");
  elemento.classList.add("div");
}

function cambiarColorInicial() {
  elemento = document.getElementById('1')
  elemento.classList.remove("contenedor");
  elemento.classList.add("div");
}

function regresarColor(elemento) {
  elemento.classList.add("contenedor");
  elemento.classList.remove("div");
}
