const nombres = document.querySelector('.nombres');
const apellidos = document.querySelector('.apellidos');
const numero = document.querySelector('.numero');
const ubicacion = document.querySelector('.ubicacion');
const ciudad = document.querySelector('.ubicacion-ciudad');
const direccion = document.querySelector('.ubicacion-direccion');
const agregarContacto = document.querySelector('.btn-agregar-contacto');

const listaContactos = document.querySelector('.lista-contactos');

const db = window.localStorage;

agregarContacto.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombres: nombres.value,
        apellidos: apellidos.value,
        numero: numero.value,
        ubicacion: ubicacion.value,
        ciudad: ciudad.value,
        direccion: direccion.value,

    }
    guardarContacto(db, contacto);
}

cargarContacto(db, listaContactos);