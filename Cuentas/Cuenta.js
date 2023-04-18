//? Clase 04 Analizando código repetido.
//* se va a utilizar solo esta clase para ambas cuentas, corriente y ahorro.
export class Cuenta {

    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {
        if (this.constructor == Cuenta) {
            throw new Error('No se debe instanciar objetos de la clase cuenta');
        }

        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        // método abstracto
        throw new Error('Debe implementar el método retirar de cuenta en su clase');
    }

    _retirarDeCuenta(valor, commission) {
        valor = valor * (1 + commission / 100)
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }


    prueba() {
        console.log("Acceso desde clase PADRE desde las dos cuentas");
    }


}