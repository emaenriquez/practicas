
let input = document.querySelector('.contenedor_input_type')

let buttonAdd = document.querySelector('.contenedor_button_add')

let tareas = document.querySelector('.contenedor_tareas')


buttonAdd.addEventListener('click',(e)=>{

    let elemento = document.createElement('p')
    const valor = input.value

    if(valor === ' '){
        alert('ingrese una tareas validad')
    } else {
        elemento.innerHTML = `
            <p>${valor}</p>
            <button class='btn_remove'>delete</button>
        `
        tareas.appendChild(elemento)
        input.value = ' '
    }

})