var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
class Pakiman{
    constructor(nombre, vida, fuerza){
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;

        this.imagen.src = imagenes[this.nombre];
    }

    hablar(){
        
    }

    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong> " + this.nombre +" </strong>" + "<br>");
        document.write("Vida " + this.vida + "<br>");
        document.write("Fuerza " + this.fuerza);
        document.write("</p>");
    }
}

var cauchin = new Pakiman("Cauchin", 53, 89);
var pokacho = new Pakiman("Pokacho", 34, 68);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

cauchin.mostrar();
pokacho.mostrar();
tocinauro.mostrar();