// INTRO
let body = document.querySelector('body');
let etiquetaDiv = document.createElement('div');
let texto = document.createTextNode('Hola mundo');

etiquetaDiv.className = 'hola';
etiquetaDiv.appendChild(texto);
body.appendChild(etiquetaDiv);

// EVENTOS
const agregar = () => {
    console.log("Elemento agregado")
}

const btnEliminar = document.getElementById('btnEliminar');
btnEliminar.addEventListener('click', () => {
    console.log("Elemento eliminado");
});

// MANIPULACION DE ATRIBUTOS
const elemento = document.getElementById('elemento');
elemento.getAttribute('class');
elemento.setAttribute('class', 'rojo');
// console.log(elemento.hasAttribute('class'))
elemento.removeAttribute('class');
// console.log(elemento.hasAttribute('class'))

// EJERCICIO 1 - FORMULARIO
const firtName = document.getElementById('firtName');
const lastName = document.getElementById('lastName');

const enviar = () => {
    console.log(firtName.value);
    console.log(lastName.value);
}

// LOCALSTORE
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('apellido', 'as');
let nombrePersona = localStorage.getItem('nombre');
console.log(nombrePersona);

localStorage.removeItem('nombre');
localStorage.clear();