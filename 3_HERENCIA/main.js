//super clase o clase padre
class Mascota{
    //metodo especial
    //todas las clases la tienen
    //es el primero en ejecutarse cuando se haga una instancia
    constructor(nombre, patas){
        this.nombre = nombre;
        this.patas =patas;
    }
    comer(){
        return `${this.nombre} esta comiendo.`;
    }
}

//subclase o clase hija
class Gato extends Mascota{
    constructor(nombre, patas, colorOjos){
        super(nombre, patas);
        this.vidas = 7;
        this.colorOjos = colorOjos;
    }
    ronronear(){
        return `${this.nombre} de ojos ${this.colorOjos} esta ronroneando`;
    }
}

/* const gato = new Mascota("misifus",4);
console.log(gato);
console.log(gato.comer()); */

const gato = new Gato("misifus",4,'azules');
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());

console.log('*********************');

class Camaleon extends Mascota{
    constructor(nombre, patas){
        super(nombre, patas);
        this.color = 'verde';
    }
    setColor(nuevoColor){
        this.color = nuevoColor;
    }
}

const camaleon = new Camaleon('Rango',4);
console.log(camaleon);
console.log(camaleon.comer());
camaleon.setColor('rojo');
console.log(camaleon);