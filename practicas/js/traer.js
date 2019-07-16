const recargar = document.querySelector('#btn').addEventListener('click', traer);

function traer(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','calificar.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            
            let respuesta = document.querySelector('#respuesta');
            respuesta.innerHTML = '';

            for(let objeto of datos){
                respuesta.innerHTML += ` <tr>
                <td>${objeto.usuario}</td>
                <td>${objeto.nombre}</td>
                <td>${objeto.apellido}</td>
                <td>${objeto.calificacion}</td>
              </tr>` 
            }
        }
    }
}