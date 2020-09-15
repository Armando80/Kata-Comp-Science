//alert ("funciona");

//oracion = " ";
function palindrome(oracion){
    minustext = oracion.toLowerCase();
//   return minustext;
    sinEspaText = minustext.replace(/ /g,"");
//   return sinEspaText;
    espatext = sinEspaText.split("");
//    return espatext;
    dereversa = sinEspaText.split("").reverse();
//    return dereversa;
    for(i in espatext){
    if (dereversa[i] == espatext[i]){
        resultado = true
    } else{
        resultado = false
    }
    console.log(resultado);
  }
}


palindrome("Arriba la birra");
palindrome("Arriba la cerveza");


