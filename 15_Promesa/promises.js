/* const promesa = new Promise((resolve, reject) => {
//    reject("No se cumplio...")
      resolve("🐸")
}); */

/* promesa
// el then esta casado con el resolve de la promesa
    .then((mensaje) =>{
        console.log("Este es el mensaje, se cumplio la promesa!:")
        console.log(mensaje);
    })
    .catch((error) => {
        console.log("este es el error:")
        console.log(error);
    }) */

/* 
    ejemplo de promesa con numero aleatorio
 */

const numberPromise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(() => {
        number > 5
        ? resolve(number)
        : reject(new Error('Menor a 5'));
    },1000);
});

numberPromise .then(number => console.log(number)) .catch(error => console.log(error));