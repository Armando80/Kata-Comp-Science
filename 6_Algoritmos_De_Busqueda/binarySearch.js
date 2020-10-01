/*
    Prerequisitos:
    1)Debes contar con una lista PREVIAMENTE ORDENADA
    
    Entradas:
    1)una lista ordenada
    2)El elemento a encontrar en la lista

    salidas:
    Si el elemnto existe:
    si si retornamos el indice donde se encontro
    si no retornamos -1
    
*/

/*
pseudocodigo
    min = el inicio del arreglo (usialmente posicion 0)
    max = el largo del arreglo - 1

    mientras min  <= max
    mid = truncarHaciaAbajo((min + max) / 2)
    guess = lista[punto medio]

    if (guess === itemToFind) {
        return mid
    }

    if (itemToFind > guess){
        min = mid + 1
    }

    if (itemToFind < guess){
        max = mid - 1
    }

    return -1
*/

const binarySearch = (orderedList, itemToFind) => {
    let min = 0,
        max = orderedList.length - 1,
        mid = null,
        guess = null;
    
    while(min <= max){
        mid = Math.floor((min + max) / 2);
        guess = orderedList[mid];

        if (itemToFind === guess){
            return mid;
        }
        if(itemToFind > guess) {
            min = mid + 1;
        }
        if(itemToFind < guess) {
            max = mid - 1;
        }
    }
    return -1;
}

const myList = [4, 7, 10, 11, 55, 71, 89, 100, 2020];

const result = binarySearch(myList, 10);

if (result >= 0) console.log(`¡Si existe se encuentra en la posición ${result}!`);
if (result === -1) console.log('No existe...');