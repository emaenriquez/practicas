"use strict";
console.log('srcipt.ts');
let dev = {
    nombre: 'emanuel',
    edad: 20,
    tecnologias: ['javascript', 'react js', 'svetle'],
    tomaMate: true
};
let dev2 = {
    nombre: 'adrian',
    edad: 20,
    tecnologias: ['html', 'css'],
    tomaMate: null
};
// diferencias de interface y type
function enviar_cv(programador) {
    console.log(`curriculumn de ${programador.nombre}`);
}
enviar_cv(dev);
enviar_cv(dev2);
