// import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta {

    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0);
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 5)
    }

    prueba() {  // acceso al padre
        super.prueba(); //* si quito el acceso al padre solo accedo al hijo (accedo desde cuenta pero al hijo--- lo sobrescribe )
        console.log("También prueba pero desde el hijo");
    }
}

//! se deja de usar la totalidad y se usa solo una parte como herencia solo dejando en esta cuenta las diferencias con la clase padre Cuenta.
//* dejo la clase entera abajo para ejemplo comentada.

// export class CuentaCorriente {
//     #cliente;
//     numero;
//     agencia;
//     #saldo;
//     static cantidadCuentas = 0;

//     set cliente(valor) {
//         if (valor instanceof Cliente)
//             this.#cliente = valor;
//     }

//     get cliente() {
//         return this.#cliente;
//     }

//     constructor(cliente, numero, agencia) {
//         this.cliente = cliente;
//         this.numero = numero;
//         this.agencia = agencia;
//         this.#saldo = 0;
//         CuentaCorriente.cantidadCuentas++;
//     }

//     depositoEnCuenta(valor) {
//         if (valor > 0)
//             this.#saldo += valor;
//         return this.#saldo;
//     }

//     retirarDeCuenta(valor) {
//         if (valor <= this.#saldo)
//             this.#saldo -= valor;
//         return this.#saldo;
//     }

//     verSaldo() {
//         return this.#saldo;
//     }

//     transferirParaCuenta(valor, cuentaDestino) {
//         this.retirarDeCuenta(valor);
//         cuentaDestino.depositoEnCuenta(valor);
//         valor = 200;
//         valor = valor * 1000;
//     }
// }