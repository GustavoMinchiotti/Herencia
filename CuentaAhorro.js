
//! se deja de usar la totalidad y se usa solo una parte como herencia solo dejando en esta cuenta las diferencias con la clase padre Cuenta.

import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo);
    }

}

//* dejo la clase entera abajo para ejemplo comentada.

// export class CuentaAhorro {

//     #cliente;
//     #saldo;

//     constructor(cliente, numero, agencia, saldo) {
//         this.numero = numero;
//         this.agencia = agencia;
//         this.#cliente = cliente;
//         this.#saldo = saldo;
//     }
// }