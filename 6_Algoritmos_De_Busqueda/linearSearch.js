/*
    el algoritmo de busqueda lineal recibe como
    argumentos:
    1)lista con elementos
    2)elemento o item a buscar

    Este algoritmo devuelve
        si encuentra el elemento, la posicio (número)
        si no encuentra el elemento, devuelve -1

const linearSearch = (list, itemToFind) => {

    Hallamos el temaño de la lista
    Definir el indice desde donde vamos a Iterar

    size; -> desde donde iteramos
    index; -> hasta donde iteramos

    if index < size
        if list[index] === itemToFind
        si si -> return index (del itemToFind)
        si no -> index + 1;

    return -1
}
*/

const linearSearch = (list, itemToFind) => {
    const size = list.length;
    let index = 0;

    while(index < size) {
        let itemInPosition = list[index];
        if (itemInPosition === itemToFind) {
            return index;
        }
        index++;
    }
    return -1;
}

const myList = [19, 12, 4, 89, 666, 10, 42, 41, 5, 333];

const result = linearSearch(myList, 19);

console.log(`El resultado es: ${result}`);

if (result >= 0) console.log('¡Si existe!');
if (result === -1) console.log('No existe...');