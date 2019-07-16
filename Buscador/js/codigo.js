const productos = [
    {nombre: 'platanos', valor: 500},
    {nombre: 'pera', valor: 500},
    {nombre: 'sandia', valor: 500},
    {nombre: 'melon', valor: 500},
    {nombre: 'arroz', valor: 500}
]

const formulario = document.querySelector('#formulario');
const botoncito = document.querySelector('#botoncito');
const resultado = document.querySelector('#resultados');

const filtrar = () =>{
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `<li>${producto.nombre} - Valor: ${producto.valor} </li>`
        }
    }

    if(resultado.innerHTML === ""){
       resultado.innerHTML += `<li>Producto no encontrado...</li>`
    }
}

botoncito.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);

filtrar();
