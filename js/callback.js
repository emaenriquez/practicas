

// es una funcion que se pasa a otra como un argumento y se ejecuta cuando se alla completado
function modify(arr,callback) {
    arr.push('ema')

    setTimeout(function () {
        callback(arr)
    },3000)

}


const names = ['emanuel','david']

modify(names,function (arr) {
    console.log(`he modificado el arr ahora es de ${arr.length}`)
})