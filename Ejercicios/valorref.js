const Persona = {
    nombre: 'Juan'
}

function renombrar(p) {
    p.nombre = 'Pedro';
}

renombrar(Persona);

console.log('Persona: ', Persona.nombre);