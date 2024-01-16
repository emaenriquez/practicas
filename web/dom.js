const contenedorLista = document.querySelector('.contenedor')
const btnAnadirElementos = document.querySelector('.elementos_lista')

const lista = ["manzana","banana","pera"]

lista.forEach(item => {
    // console.log(item)
    const lis = `los ingredientes son ${item}`
    
    const elementosLista = document.createElement('p')
    const texNode = document.createTextNode(lis)
    elementosLista.appendChild(texNode)

    contenedorLista.appendChild(elementosLista)
});

btnAnadirElementos.addEventListener('click',()=>{
    const elementoAnadir = prompt('ingrese un elemento')

    const elementosLista = document.createElement('p')
    const texNode = document.createTextNode(elementoAnadir)
    elementosLista.appendChild(texNode)

    contenedorLista.appendChild(elementosLista)

})