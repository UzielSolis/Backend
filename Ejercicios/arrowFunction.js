class Persona {
    nombre;

    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        setTimeout(() => {
            console.log('Hola, soy ' + this.nombre);
        }, 0);
    }
}

const yo = new Persona('Francisco');
yo.saludar();