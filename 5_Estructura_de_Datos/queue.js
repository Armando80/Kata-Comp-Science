class Queue{
    constructor(){
        this.collection = [];
    }
    enqueue(item){
        this.collection.push(item);
        return this.collection.length;
    }
    dequeue(){
        return this.collection.shift();
    }
    length(){
        return this.collection.length;
    }
    isEmpty(){
        return this.collection.length === 0;
    }
    front(){
        return this.collection[0];
    }
}



const filaDeAsesorias = new Queue();
// cuando arregle mis asesorias
filaDeAsesorias.enqueue('Federico');
filaDeAsesorias.enqueue('Gera');
filaDeAsesorias.enqueue('Cesar');
filaDeAsesorias.enqueue('Keneth');

//aqui estoy esperando a que entren en la llamada pero quien es el primer0?
console.log('Esperando a',filaDeAsesorias.front());
console.log('Atendiendo a ',filaDeAsesorias.dequeue());
console.log('Cuantos quedan por atender ',filaDeAsesorias.length());
