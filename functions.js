const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContacto = (db, parentNode) => {
    let claves = Object.keys(db)

    for(clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('p')
    let numeroContacto = document.createElement('p')
    let ubicacionContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let borrarContacto = document.createElement('span')
    
    nombreContacto.innerHTML = contacto.nombres;
    apellidoContacto.innerHTML = contacto.apellidos;
    numeroContacto.innerHTML = contacto.numero;
    ubicacionContacto.innerHTML = contacto.ubicacion;
    ciudadContacto.innerHTML = contacto.ciudad;
    direccionContacto.innerHTML = contacto.direccion;
    borrarContacto.innerHTML = 'person_remove';

    divContacto.classList.add('contactos');
    borrarContacto.classList.add('material-symbols-outlined', 'icon');

    borrarContacto.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(apellidoContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(ubicacionContacto);
    divContacto.appendChild(ciudadContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(borrarContacto);
    
    parentNode.appendChild(divContacto)

}