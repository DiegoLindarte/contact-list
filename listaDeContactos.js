const nombreApellido = document.querySelector('.nombre-apellidos');
const numero = document.querySelector('.numero');
const agregarContacto = document.querySelector('.btn-agregar-contacto');

const listaContactos = document.querySelector('.lista-contactos');

const db = window.localStorage;

agregarContacto.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombreApellido: nombreApellido.value,
        numero: numero.value,

    }
    guardarContacto(db, contacto);
}

cargarContacto(db, listaContactos);