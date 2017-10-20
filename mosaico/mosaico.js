document.addEventListener('load',resetColor,true);
var x = document.getElementById("myAudio");
var bloq = [];
mins = 0;

function establecer() {
  for (var i = 1; i <= 5; i++) {
    id = Math.floor((Math.random() * 25) + 1);
    bloq.push(id);
    let element = document.getElementById(id);
    element.classList.add("bloqueado");
    element.classList.remove("cuadro");
    element.classList.add("cuadro-bloqueado");
    element.setAttribute("name", "slc");
  }
  minas();
}

function minas() {
  for (var i = 1; i <= 5; i++) {
    id = Math.floor((Math.random() * 25) + 1);
    if (bloq.indexOf(id) == -1) {
      let element = document.getElementById(id);
      element.setAttribute("name", "mina");
      mins++;
    }
  }
  document.getElementById('seleccionado').innerHTML = mins;
}

function resetColor() {
    for ( var i = 1; i <= 25;i++){
      let element = document.getElementById(i);
        element.classList.remove("seleccionado");
        element.classList.remove("bloqueado");
        element.classList.add("cuadro");
        element.classList.remove("cuadro-bloqueado");
        element.classList.remove("mal");
        element.setAttribute("name","safe");
    }
    document.getElementById('seleccionado').innerHTML = 0;
    mins = 0;
    bloq = [];
    establecer();
}

mal = 0;
function cambiaColor(element, event) {
  console.log(event);
  if(mal == mins){
    alert("Perdiste");
  }

  if(element.getAttribute("name") == "mina"){
    element.classList.add("mal");
    element.setAttribute("name","na");
    mal++;
    mins--;
  } else{
    playAudio();
    element.classList.add("seleccionado");
  }
  document.getElementById('seleccionado').innerHTML = mins;
}

function playAudio() {
  if (x.currentTime > 0) {
    stop();
  }
  if (x.currentTime == 0){
    x.play();
  }else{
    stop();
  }
}

function stop(){
  x.pause();
  x.currentTime = 0;
}
