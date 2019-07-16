//Variables Principales
(function(){
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var boton = document.getElementById("btn-agregar");

//Funciones

// Agregar los elementos

var agregarTarea = function(){
var tarea = tareaInput.value;
var nuevaTarea = document.createElement("li");
var enlace = document.createElement("a");
var contenido = document.createTextNode(tarea);

if(tarea === ""){
    tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
    tareaInput.className("error");
    return false;
}
//Agregamos contenido al enlace
enlace.appendChild(contenido);

//Agregamos un atributo href
enlace.setAttribute("href", "#");

//Agregamos enlace a la tarea
nuevaTarea.appendChild(enlace);

//Agregamos nueva tarea a la lista
lista.appendChild(nuevaTarea);

}

}());