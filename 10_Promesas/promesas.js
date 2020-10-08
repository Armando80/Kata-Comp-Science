// cumpleaños de Armando 8 de Diciembre

// 📱 si tengo dinero
// Normalmente cuando las promesas no se cumplen
//vienen con una razon (pretexto)

const promesaCumple = new Promise((resolve, reject) => {
    const dinero = Math.floor(Math.random() * 1000);
    console.log('Esperando el cumpleaños de Armando ...');
    setTimeout(() =>
        dinero >= 500
        //si se cumple
        ? resolve('Feliz Cumpleaños 📲') //true
        //si no se cumple
        : reject('No junte el dinero 🙃') //false
    , 5000)
})

console.log(promesaCumple);

promesaCumple 
// si la promesa se cumple then
.then(result => console.log(result))
// si la promesa no se cumple catch
.catch(error => console.log(error));


/* const MyFunction = () => {
    return new Promise()
} */

