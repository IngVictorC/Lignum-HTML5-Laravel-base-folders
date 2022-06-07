class EventEmitter {
    constructor(eventoNombre) {
        
        this.eventoNombre = eventoNombre;
    }
    on() {
        return 'El evento se ejecuto';
    }    
    emit() {
        
    }
    off() {
       
    }
}

class Movie extends EventEmitter {
    constructor(eventoNombre,titulo, año, duracion) {
        super(eventoNombre);
        this.titulo = titulo;
        this.año = año;
        this.duracion = duracion;
    }
    play() {
        return 'Se emitio el evento play'
    }
    pause() {

    }
    resume() {

    }
    addCast() {

    }

}

//probando evento on
//

    var boton = document.querySelector("#btnEvent");
    boton.addEventListener("click", listEvent);
    function listEvent() {
        console.log('funciona el click');
        var igr = document.getElementById('event').value;
        var eventoNombre = new EventEmitter(igr);
        console.log(eventoNombre.on(eventoNombre));       
        
    }




class Actor {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


class Logger {
    constructor() { }
    log(info) { }
}

const pelicula = new Movie('estreno','Rapidos y furiosos', 1995, '2hs');

console.log(pelicula);

