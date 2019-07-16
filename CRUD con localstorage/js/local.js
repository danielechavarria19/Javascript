// variables globales

const formulario = document.querySelector('#formulario');
const lista = document.querySelector('#listaActividad');
let array = [];

// funciones
const crearItem = (Actividad) => {

    let item = {
        Actividad: Actividad,
        Estado: false
    }
    array.push(item);
    return item;
}

const guardarDb = () => {
    localStorage.setItem('rutina', JSON.stringify(array));
    mostrarDb();
}

const mostrarDb = () =>{
    lista.innerHTML = '';
    array = JSON.parse(localStorage.getItem('rutina'));

    if(array === null){
        array = [];
    }else{
        array.forEach(element => {
            lista.innerHTML += `<div class="alert alert-danger" role="alert">
            <i class="material-icons float-left mr-2">
                    directions_run
                    </i>
             <b>${element.Actividad}</b> - ${element.Estado}
             <span class="float-right">
              <i class="material-icons">
                done
                </i>
                <i class="material-icons">
                  delete
                  </i>
             </span>
            </div>`
        });
    }
}


//EventListener
formulario.addEventListener('submit',(e) =>{
    e.preventDefault();

    let ejercicio = document.querySelector('#actividad').value;
    formulario.reset();
    crearItem(ejercicio);
    guardarDb();
})

document.addEventListener('DOMContentLoaded', mostrarDb);

lista.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e);
})