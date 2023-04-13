/*Importación de clases*/
import { Cliente } from './Cliente.js'
import { CuentaCorriente } from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';

const cliente = new Cliente('Leonardo', '13804050', '123224');
const cliente2 = new Cliente('María', '16979808', '8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001', 0)

console.log(cuentaDeLeonardo);
console.log(cuentaDeLeonardo.cliente);

console.log(cuentaAhorroLeonardo);
console.log(cuentaAhorroLeonardo.cliente);





















// let saldo = cuentaDeLeonardo.verSaldo();

// saldo = cuentaDeLeonardo.depositoEnCuenta(150);
// cuentaDeLeonardo.transferirParaCuenta(50, cuentaDeMaria);

// const saldoMaria = cuentaDeMaria.verSaldo();

// console.log('Cuenta de Maria', cuentaDeMaria);

// console.log('El Saldo actual (cuentaMaria) ' + saldoMaria);

// const saldoLeonardo = cuentaDeLeonardo.verSaldo();
// console.log('El Saldo actual (cuentaLeonardo) ' + saldoLeonardo);
// console.log(CuentaCorriente.cantidadCuentas);

// console.log(CuentaCorriente.cantidadCuentas);




