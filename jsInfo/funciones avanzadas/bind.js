

// La función bind en JavaScript se utiliza para crear una nueva función que, cuando es llamada, tiene su propio contexto (this) vinculado al valor proporcionado, con una secuencia de argumentos dados precediendo cualquier argumento proporcionado cuando la nueva función es llamada.


// const nuevaFuncion = funcionOriginal.bind(nuevoThis, arg1, arg2, ...);

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    obtenerDetalles: function() {
        console.log(`${this.marca} ${this.modelo}`);
    }
};

const obtenerDatos = coche.obtenerDetalles.bind(coche)

obtenerDatos()