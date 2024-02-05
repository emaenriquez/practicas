

console.log('srcipt.ts')



interface Programador{
    nombre:string,
    tecnologias: string[],
    edad: number,
    tomaMate?: boolean | null
}

let dev: Programador = {
    nombre:'emanuel',
    edad: 20,
    tecnologias: ['javascript','react js','svetle'],
    tomaMate: true
}

let dev2: Programador = {
    nombre: 'adrian',
    edad: 20,
    tecnologias: ['html','css'],
    tomaMate: null
}

// diferencias de interface y type

function enviar_cv(programador:Programador) {
    console.log(`curriculumn de ${programador.nombre}`)
}

enviar_cv(dev)
enviar_cv(dev2)