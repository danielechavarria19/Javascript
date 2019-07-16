document.querySelector('#boton').addEventListener('click', traer);
var mostrar = document.getElementById('mostrar');

function traer(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'nuevo.txt', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            mostrar.innerHTML = this.responseText;
        }
    }
}