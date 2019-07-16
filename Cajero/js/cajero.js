class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero(){

    var t = document.getElementById("dinero");

    dinero = parseInt(t.value);
    for(var money of caja)
    {
        if(dinero > 0){
            div = Math.floor(dinero/money.valor);

            if(div > money.cantidad){
                papeles = money.cantidad
            }
            else{
                papeles = div;
            }
        }
    entregado.push(new Billete(money.valor, papeles) );
    dinero = dinero - (money.valor * papeles);
    
    }
    if(dinero > 0){
        
        resultado.innerHTML = "Soy un cajero pobre";

    }else{
        for(var e of entregado){
            resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + " <br>";
        }
    }
}

var resultado = document.getElementById("resultado");
var caja = [];
var entregado = [];
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 30) );
caja.push( new Billete(10, 20) );

var dinero;
var div = 0;
var papeles = 0;
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
