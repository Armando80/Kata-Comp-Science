class Largometraje {
    constructor(titulo, duracion, director){
        this.titulo = titulo;
        this.duracion = duracion + 'minutos';
        this.director = director;
        this.precio = 10 + 'USD'
    }
}

class Pelicula extends Largometraje{
    constructor(titulo, duracion, director, genero){
        super(titulo, duracion, director, genero);
        this.precio = 15 + 'USD';
        this.genero = genero;
    }
}

class Documental extends Largometraje{
    constructor(titulo, duracion, director, narrador){
        super(titulo, duracion, director, narrador)
        this.precio = 8 + 'USD';
        this.narrador = narrador;
    }
}

let halloween = new Pelicula("Halloween Pandemia", 189, 'John Carpenter', 'Terror');
let dontFkillCats = new Documental("Dont F**k with cats", 56, "Mark Lewis", 'John Green');

class Cine{
    constructor(nsalas, nombre){
        this.nsalas = nsalas + 'salas';
        this.nombre = nombre;
    }
    reproducir(largometraje){
        console.log(largometraje);
    }
}

let laGranVia = new Cine(10, 'La Gran Via');
laGranVia.reproducir(halloween);
