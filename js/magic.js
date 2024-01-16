export const msjObject = Object.freeze({
    error: Symbol(),
    warning: Symbol(),
    info: Symbol()
})
  
  
function imprimirMsj(msj){
    if(msj === msjObject.error) console.log('errore')
    else if(msj === msjObject.warnig) console.log('warning')
    else if(msj === msjObject.info) console.log('informacion')
    else{
        console.log('msj no encontrado')
    } 
}
  
imprimirMsj(msjObject.info)
