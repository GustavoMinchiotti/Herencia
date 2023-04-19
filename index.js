/*Importación de clases*/
import { Cliente } from './Cliente.js'
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';

import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';

import { SistemaAutenticar } from './SistemaAutenticacion.js';



const cliente = new Cliente('Leonardo', '13804050', '123224');
const cliente2 = new Cliente('María', '16979808', '8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001', 0)

//const cuentaSimple = new Cuenta(cliente, '3', '45454', '007') //* ejemplo de instancia con error porque ahora es abstracta    

const cuentaNominaLeonardo = new CuentaNomina(cliente, '9985', '001', 100);


const empleado = new Empleado('Juan Pérez', '30000222', 10000);
const gerente = new Gerente('Pedro Rivas', '25333555', 12000);
const director = new Director('Elena Moreno', '20565999', 15000)

empleado.asignarClave('12345');
console.log(SistemaAutenticar.login(empleado,'12345'));

cliente.asignarClave('1111')
console.log(SistemaAutenticar.login(cliente,'1111'));