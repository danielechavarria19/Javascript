(function(){
//variables
var lista = document.getElementById("lista");
var tareaInput = document.getElementById("tareaInput");
var btnNuevatarea = document.getElementById("btn-agregar");

//Funciones
var agregarTarea = function(){
  var tarea = tareaInput.value;
  var nuevaTarea = document.createElement("li");
  var enlace = document.createElement("a");
  var contenido = document.createTextNode(tarea);

  if(tarea === ""){
    tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
    tareaInput.className = "error";
    return false;
  }
//Agregamos el contenido al enlace
  enlace.appendChild(contenido);

//Establecemos un atributo href
enlace.setAttribute("href", "#");

//agregamos el enlace a la nueva tarea (li)
nuevaTarea.appendChild(enlace);

//agregamos la nueva tarea a la lista
lista.appendChild(nuevaTarea);

tareaInput.value = "";

for(var i = 0; i <= lista.children.length -1; i++){
    lista.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this);
    });
}

};
var comprobarInput = function(){
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea");
};

var eliminarTarea = function(){
    this.parentNode.removeChild(this);
};

//Eventos

//agregar tarea
btnNuevatarea.addEventListener("click", agregarTarea);

//Comprobar input
tareaInput.addEventListener("click", comprobarInput);

//Eliminando elementos de la lista
for(var i = 0; i <= lista.children.length -1; i++){
    lista.children[i].addEventListener("click", eliminarTarea);
}
}());