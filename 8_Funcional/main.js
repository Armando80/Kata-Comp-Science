// Pure Function
const sumaUnoAlNumero = (numero) => numero + 1;
console.log(sumaUnoAlNumero(7));

// Avoid side efect
// Esta función tiene un efectos secundario
const sumaNumeroRandom = (numero) => numero + Math.random();
console.log(sumaNumeroRandom(7));

var temperatura = 21;
const dimeTemperatura = () => `La temperatura es ${temperatura} º`;
console.log(dimeTemperatura());

// FUNCTION COMPOSITION / CALLBACKS
//composicion de funciones

/* function saludar(nombre) {
    alert('Hola' + nombre);
}

function procesarEntradaUsusario(callback) {
    var nombre = prmpt('Por favor ingresa tu nombre.');
    callback(nombre);
}


procesarEntradaUsusario(saludar);
 */

const realizaOperacion = (a, b, callback) => callback(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(realizaOperacion(5, 3, suma));
console.log(realizaOperacion(10, 7, resta));
console.log(realizaOperacion(5, 5, mult));
console.log(realizaOperacion(5, 5, div));

// Avoid mutating state - evita mutear estados

const sensei = Object.freeze({
    nombre: 'gera',
    programa: 'master en coding',
    equipo: Object.freeze({
        modelo: 'Asus',
        ram: 12
    })
});

sensei.nombre = 'Mali';
sensei.programa = 'cinta roja';
sensei.equipo.modelo = 'macBook';

console.log(sensei);
//********************** */
const empleados = [
    ['Luis Torres', 25000],
    ['Maria Arriaga', 42000]
];

const copiaEmpleados = (empleados) => {
    let newEmpleados = new Array();
    empleados.forEach((empleado) => newEmpleados.push([...empleado]))

    return newEmpleados;
}

const cambiarSalario = (empleados, cantidad) => {
    let copEmpleados = copiaEmpleados(empleados);
    copEmpleados.forEach((empleado) => {
        empleado[1] = empleado[1] + cantidad;
    });
    return copEmpleados;
}

const empleadosFelices = cambiarSalario(empleados, 10000);

console.log(empleadosFelices);


