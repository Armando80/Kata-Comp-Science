/* const miFunction = () => {
    return 'Hola, soy la función';
}


console.log(1);
console.log(2);
console.log(miFunction());
setTimeout(() => { console.log(3) }, 1000);
console.log(4);
console.log(5); */

/* ¿como funciona la cola de callbacks */

const despuesDeMil = () => {
    console.log('Primer timeout!');
}

const despuesDeQuinientos = () => {
     console.log('Segundo timeout!');
}

const despuesDeDoscientos = () => {
    console.log('Tercer timeout!');
}

console.log('Inicio');
setTimeout(despuesDeMil,1000);
setTimeout(despuesDeQuinientos, 500);
setTimeout(despuesDeDoscientos,200);
console.log("Fin");