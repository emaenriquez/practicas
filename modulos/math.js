export const secret_number = 30

export function sumar(x,y){
    return x + y
}

export function restar(x,y){
    return x - y
}

export function dividir(x,y){
    return x / y
}

export function multiplicar(x,y){
    return x * y
}

export class Math{
    double(x){
        return x * x
    }
}

// export default secret_number

// export default {
//     name: 'emanuel',
//     edad: 20
// }

export default {
    sumar,
    restar,
    dividir,
    multiplicar,
}