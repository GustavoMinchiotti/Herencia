/*Importación de clases*/
import { Cliente } from './Cliente.js'
// import { CuentaCorriente } from './CuentaCorriente.js'; //* clase 04 se unen las dos cuentas para optimizar
// import { CuentaAhorro } from './CuentaAhorro.js';       
import { Cuenta } from './Cuenta.js';



const cliente = new Cliente('Leonardo', '13804050', '123224');
const cliente2 = new Cliente('María', '16979808', '8989');

const cuentaDeLeonardo = new Cuenta(cliente, '1', '001', 0);
//const cuentaDeMaria = new Cuenta(cliente2, '2', '002', 0);

const cuentaAhorroLeonardo = new Cuenta(cliente, '9985', '001', 0)

console.log(cuentaDeLeonardo);
console.log(cuentaDeLeonardo.verSaldo());
console.log('Depósito de: ', cuentaDeLeonardo.depositoEnCuenta(1000));
console.log(cuentaDeLeonardo.verSaldo());
console.log("******************");
console.log(cuentaAhorroLeonardo);
console.log(cuentaAhorroLeonardo.verSaldo());
console.log('Depósito de: ', cuentaAhorroLeonardo.depositoEnCuenta(600));
console.log(cuentaAhorroLeonardo.verSaldo());

console.log("********** info cuentas ************");
console.log(cuentaDeLeonardo);
console.log(cuentaAhorroLeonardo);







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




