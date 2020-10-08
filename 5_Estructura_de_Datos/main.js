const pila = [];

//push agragar elementos al final

console.log(pila.push('federico'));
console.log(pila.push('alfredo'));
console.log(pila.push('alexis'));
console.log(pila);

//pop elimina al ultimo elemento
console.log(pila.pop());
console.log(pila);

const pila2 = [];
const text = `{{{{{{ }}}}}}}}`;

let balance = true;
for (const letter of text) {
    if(letter === '{'){
        pila2.push(letter);
    }else if(letter ==='}'){
        if(pila.length === 0) balance = false;
        pila2.pop();
    }
//   console.log(pila2);
}
//condicion ternario
// ? (en caso de ser verdadero) lo que pasa si es verdader
// : (en caso de ser falso) lo que pasa si es falso
pila2.length === 0 && balance === true
? console.log('todo esta balanceado')
: console.log(`no estan cerrandose ${pila.length} parentesis`);
