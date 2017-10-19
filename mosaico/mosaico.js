function resetColor() {
    for ( var i = 1; i < 21;i++){
        document.getElementById(i).classList.remove("purple");
    }
    for ( var i = 1; i < 21;i++){
        document.getElementById(i).classList.remove("seleccionado");
    }
}

contador = 0;
function cambiaColor(element) {
  element.classList.add("seleccionado");
  contador++;
  if (contador == 20) {
    for ( var i = 1; i < 21;i++){
        document.getElementById(i).classList.remove("seleccionado");
        document.getElementById(i).classList.add("purple");
    }
    contador = 0;
  }
}

var x = document.getElementById("myAudio");

function playAudio() {
    x.pause();
    x.play();
}

function pauseAudio() {
    x.pause();
}
