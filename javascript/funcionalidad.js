


function checar() {
  var a = 1;
  console.log(a);
  var a = [];
  console.log(a);
  var a = "1";
  
  // confirm
  // alert
  // prompt

  console.log(parseInt(a) + 1);
  var a =  prompt("Introduce un número");
  a = parseInt(a);
  
  var conf = confirm("Deseas continuar");
  
  if(a === 1 && conf){
    alert("Es uno");
  } else {
    alert("No es uno");
  }
  //arreglos
  var arreglo = [1,2,121,4,66,42,12,31,21,32,12,435,65234,423412321,342234];
  // arreglo[arreglo.lenght] = 9999;
  arreglo.push(9999);
  arreglo.pop();
  arreglo.shift();
  
  console.log(arreglo.indexOf(1)); //si resulta -1 significa que este no esta
  console.log(arreglo);
  
  
  
  for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
  
  i = 0;
  while (i < arreglo.length) {
    console.log(arreglo[i]);
    i++;
  }

  //localStorage
  localStorage.setItem("valor",1);
  a = localStorage.getItem("valor");

  console.log(a);

  //la seguimos viendo el viernes 
  var json = {
    "Diana" : 18,
    "Roberto" : 19,
    "Luis" : 25,
    "Lalo" : 18,
    "Jonathan": 18,
    "Ricardo" : 23,
    "Manuel" : 18
  };

  console.log(json["Diana"]);
  console.log(json.Diana);

  json = JSON.stringify(json);

  localStorage.setItem("edades", json);
  var edades = localStorage.getItem("edades");
  console.log(edades);
  console.log(typeof edades);
  edades = JSON.parse(edades);
  console.log(typeof edades);
  console.log(edades.Diana);
}
