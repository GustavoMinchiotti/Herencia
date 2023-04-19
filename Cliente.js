export class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    //? Polimorfismo, copiado de  class Empleado pero útil a las dos clases
    //? esto no se hereda por eso se copia.
    asignarClave(clave) {
        this.#clave = clave
    }

    autenticable(clave) {
        return false;
    }

    autenticable(clave) {
        return clave == this.#clave;
    }

    // get clave() {
    //     return this.#clave
    // }

}