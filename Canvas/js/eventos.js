//Parametros de las teclas
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

// Se llama al canvas y se le asigna funciones
document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

// Parametros del dibujo
dibujarLinea("black", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
//color de trazo y valor del movimiento
var verde = "green";
var morado = "purple";
var movimiento = 10;

// funciones de las teclas
function dibujarTeclado(evento){
   switch(evento.keyCode){
   case teclas.UP:
   dibujarLinea(verde, x, y, x, y - movimiento, papel)
   y = y -movimiento
   break;

   case teclas.DOWN:
    dibujarLinea(morado, x, y, x, y + movimiento, papel)
    y = y + movimiento
   break;
   
   case teclas.LEFT:
    dibujarLinea(verde, x, y, x - movimiento, y, papel)
    x = x - movimiento
    break;

   case teclas.RIGHT:
    dibujarLinea(morado, x, y, x + movimiento, y, papel)
    x = x + movimiento
     break;
   }
};