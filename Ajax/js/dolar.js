document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos('dolar');
});

document.querySelector('#uf').addEventListener('click', function(){
    obtenerDatos('uf');
});

function obtenerDatos(valor){
    let url = `https://mindicador.cl/api/${valor}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            for(let item of datos.serie){
                resultado.innerHTML += `<li>${item.fecha.substr(0,10)} | ${item.valor} </li>`;
            }
        }
    }
}