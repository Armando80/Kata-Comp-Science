/*
    Entradas:
        1)Arreglo desordenado
    
    Salidas:
        1)Arreglo ordenado(de menor a mayor)
*/
const mergeSort = (unorderedArray) => {
/*
    si el arreglo tiene 0 o 1 elementos retorno el arreglo
    pues ya esta ordenado.

    obtenemos el tamaño del arrglo
        size = unorderedArray.lenght
    
    obtenemos el punto medio del arreglo
        middle = truncarHaciaAbajo(size / 2)

    Dividimos el arreglo en mitades a partir del un punto medio
        left = unorderedArray.slice(0, middle);
        right = unorderedArray.slice(middle); -->solo middle porque en automatico se va hasta el final

    Dividimos los arreglos recursivamente hasta obtener la unidad o un arreglo ordenado.
        orderedLeft = mergeSort(left);
        orderedRight = mergeSort(right);
    
    Conquistamos mezclando los arreglos ordenados (orderedLeft y orderedRight)
        orderesArray = merge(orderedLeft, orderedRight);
*/
}

const merge = (orderedLeft, orderedRight) => {
    /*
    Necesitamos saber donde estamos posicionados en el arreglo izquierdo
    indexLeft
    Necesitamos saber donde estamos posicionados en el arreglo derecho
    indexRight
    Necesitamos un arrglo auxiliar donde estaremos insertando el nuevo orden
    auxArray

    Mientras (indexLeft < orderedLeft.length && indexRight < orderedRight)
        if (orderedLeft[indexLeft] < orderedRight[indexRight])
            auxArray.push(orderedLeft[indexLeft])
            leftIndex++
        else
            auxArray.push(orderedRight[indexRight])
            rightIndex++

    Antes de devolver la mezcla (merge) debemos concatenar los posibles excedentes
        resultArray = auxArray
        .concat(orderedLeft.slice(indexLeft))
        .concat(orderedRight.slice(indexRight))

    Retornamos resulArray
    */
}