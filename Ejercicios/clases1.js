function Persona(nombre) {
    let nombre;

    return {
        getNombre: function() {
            return nombre;
        },
        setNombre: function(n) {
            nombre = n;
        }
    }

}

const yo = new Persona('Juan');

class PersonaClass {
    constructor(nombre) {}
}