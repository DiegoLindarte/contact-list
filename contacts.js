let person1 = {
    id: 1,
    name: 'Diego',
    lastName: 'Lindarte',
    number: 3152154501,
    location: {
        city: 'Bogota',
        address: 'Fontibon'
    }
}

let person2 = {
    id: 2,
    name: 'Andres',
    lastName: 'Chinchilla',
    number: 3016813837,
    location: {
        city: 'Valledupar',
        address: 'La Cuarta'
    }
}

let contacts = [person1, person2];

function addContact(id, name, lastName, number, city, address){
    let person = {
        id,
        name,
        lastName,
        number,
        location: {
            city,
            address
        }
    }
    contacts.push(person)
}

addContact(3, 'Ana', 'Lindarte', 3045230700, 'Valledupar', 'Las Minas');

//Eliminar contacto por id manera 1

/* function deleteContact(id){
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
            contacts.splice(i, 1)
        }
        
    }
} */

function deleteContact(id){
    contacts = contacts.filter((contact) => contact.id !== id)
}

function updateContac(id, newName, newLastname, newNumber, newCity, newAddress){
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
            contacts[i] = {
                id,
                name: newName,
                lastName: newLastname,
                number: newNumber,
                location: {
                    city: newCity,
                    address: newAddress
                }
            }
        }
        
    }
}

function showContacts(){
    for (const contact of contacts) {
        console.log(contact)
    }
}

showContacts();

//Eliminar contacto manera 1

/* let deleteContact = function(contact){
    let index = contacts.indexOf(contact);
    contacts.splice(index, 1)
} */

//Eliminar contacto manera 2

/* let deleteContact = function(contact){
    contacts = contacts.filter((person)=> person !== contact);

} */

//Mostrar contacto manera 1

/* let showContacts = () => {
    contacts.sort();
    for (let i = 0; i < contacts.length; i++) {
        console.log(contacts[i]);
        
    }
} */

//Mostrar contacto manera 2

/* let showContacts = () => {
    contacts.sort();
    for (const contact of contacts) {
        console.log(contact)
    }
} */

//Mostrar contacto manera 3

/* let showContacts = () => {
    contacts.sort();
    contacts.forEach((contact) => console.log(contact))
} */ 

//showContacts()

