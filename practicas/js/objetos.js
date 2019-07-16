const boton = document.getElementById('power').addEventListener('click',mostrar);
const menu = document.getElementById('menu');

class Personajes{
    constructor(nombre,vida, fuerza, velocidad, daño){
        this.nombre = nombre,
        this.vida = vida,
        this.fuerza = fuerza,
        this.velocidad = velocidad, 
        this.daño = daño;
    }
}

function mostrar(){
   menu.innerHTML = `<p>${JSON.stringify(personaje1)}</p>`;
}

var personaje1 = new Personajes('arturo',12,34,56,90);
var personaje2 = new Personajes(45,11,98,100);
