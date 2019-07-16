document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let respuesta = document.querySelector('#respuesta');
            respuesta.innerHTML = '';

            for(let item of datos){
                console.log(item);
                respuesta.innerHTML += `<tr>
                <td>${item.titulo}</td>
                <td>${item.artista}</td>
              </tr>`
            }
        }
    }


  }