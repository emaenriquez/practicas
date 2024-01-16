
class Office {

    constructor(nombre,apellido){
        this.nombre = nombre,
        this.apellido = apellido;

        if (typeof Office.instance === 'object') {
            return Office.instance
        }
        
        Office.instance = this

        return this
    
    }

}

const Office1 = new Office('ema','enriquez')
const Office2 = new Office('david','enriquez')

console.log(Office1)
console.log(Office2)


// export default Office1