

document.addEventListener('DOMContentLoaded',()=>{
    const nombre = prompt('ingrese su nombre')
    const apellido = prompt('ingrese su apellido')
    const colorFavorito = prompt('ingrese su color favorito')
    const divContrasena = document.getElementById('info-contrasena')
    
    console.log(divContrasena)
    
    const num = 30
    
    const result = `
        <p>Nombre ${nombre}</p>
        <p>apellido ${apellido}</p>
        <p style="color:${colorFavorito}">contraseña: ${nombre}${apellido}${colorFavorito}${num}</p> `
    
    
    divContrasena.innerHTML = result

})


