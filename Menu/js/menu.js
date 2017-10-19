function cambiar(id){
  var opcion = document.getElementById(id);

  document.getElementById('1').classList.add("no-visible");
  document.getElementById('2').classList.add("no-visible");
  document.getElementById('3').classList.add("no-visible");

  opcion.classList.remove("no-visible");
}
