//alert('todo cool');

class Animal{
    constructor(nombre, tipo, numPatas){
        this.nombre = nombre;
        this.tipo = tipo;
        this.numPatas = numPatas;
    }
    comer(comida){
        return `${this.nombre} esta comiendo ${comida}`;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(newName) {
        return this.nombre = newName;
    }
}

const animal = new Animal(
    "Ayudante de Santa",
    "perro",
    4);

console.log(animal);

const gato = new Animal("titi", "felino",2);
console.log(gato);