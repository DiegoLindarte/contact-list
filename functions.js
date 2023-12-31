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
    let numeroContacto = document.createElement('p')
    let borrarContacto = document.createElement('span')
    
    nombreContacto.innerHTML = contacto.nombreApellido;
    numeroContacto.innerHTML = contacto.numero;
    borrarContacto.innerHTML = 'person_remove';

    divContacto.classList.add('lista-contactos');
    borrarContacto.classList.add('material-symbols-outlined', 'icon');

    borrarContacto.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(borrarContacto);
    
    parentNode.appendChild(divContacto)

}