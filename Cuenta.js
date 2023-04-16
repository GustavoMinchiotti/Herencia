//? Clase 04 Analizando código repetido.
//* se va a utilizar solo esta clase para ambas cuentas, corriente y ahorro.
export class Cuenta {

    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {

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
        valor = 200;
        valor = valor * 1000;
    }


    prueba() {
        console.log("Acceso desde clase PADRE desde las dos cuentas");
    }


}