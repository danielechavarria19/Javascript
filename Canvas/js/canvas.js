var texto = document.getElementById("lineas");
var boton = document.getElementById("boton");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");


dibujarLinea("red", 1, 1, 1, 299);
dibujarLinea("red", 1, 299, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
var xxx = parseInt(texto.value);
var lineas = xxx;
var l = 0;
var yi, xf, xi, yf;
var nxf, nyf;
var espacio = ancho / lineas;

for(l = 0; l < lineas; l++){
    yi = espacio * (l + 1);
    xf = espacio * l;
    xi = espacio * l; 
    yf = espacio * (l + 1);
    nxf = 300 - xf;
    nyf = 300 - yf;
    dibujarLinea("blue", xi, 300, 300, nyf);
    dibujarLinea("green", 0, xf, nxf, 0);
    dibujarLinea("red", 0, xf, yi, 300);
    dibujarLinea("orange", xi, 0, 300, yf);
    }
}

