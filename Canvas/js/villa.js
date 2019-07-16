var vp = document.getElementById("villaP");
var papel = vp.getContext("2d");

//Objetos
var fondo = {
    url: "tile.png",
    cargaOk: false,
}
var vaca = {
    url: "vaca.png",
    cargaOk: false,
}

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca(){
    vaca.cargaOk = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOk == true){
    papel.drawImage(fondo.objeto, 0, 0);
    }

    if(vaca.cargaOk == true){
        var cantidad = aleatorio(1, 15);
        console.log(cantidad);
        for(var v = 0; v < cantidad; v++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.objeto, x, y);
        }
     }
}

 function aleatorio(min, maxi){

 var resultado; 
 resultado = Math.floor( Math.random() * (maxi - min + 1)) + min;
 return resultado; }