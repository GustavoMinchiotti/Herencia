import { Cuenta } from "./Cuenta.js";

export class CuentaNomina extends Cuenta {
    constructor(cliente, numero, agencia, saldo) {      //* copiado de cuenta ahorro
        super(cliente, numero, agencia, saldo);
    }
    retirarDeCuenta(valor) {    // accedo al método abstracto en Cuenta
        super._retirarDeCuenta(valor, 1)
    }
}