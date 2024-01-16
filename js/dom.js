const page = document.getElementById('#page') // <div id="page"></div>

const items = document.getElementsByClassName('item')

console.log(items[0])
// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.getElementsByName('name')
// Obtiene todos los elementos <div> de la página
const divs = document.getElementsByTagName('div')


const page2 = document.querySelector('#page')
const info = document.querySelector('.main')


const infos = document.querySelectorAll('.info')
// const nicknames = document.querySelectorAll('[name="nicknames"]')


// const divs = document.querySelectorAll('div')


const div = document.createElement('div')
div.textContent = 'elemento 1'

const div2 = div.cloneNode()
div2.textContent = 'elemento 2'

const span = document.createElement('span')
const img = document.createElement('img')

const comment = document.createComment('hola mundi')
const text = document.createTextNode('hola')

const fragment = document.createDocumentFragment()

for (let i = 0; i < 5000; i++) {
    
    const div = document.createElement('div')
    div.textContent = `Item número ${i}`
    fragment.appendChild(div)

}

document.body.appendChild(fragment)

// atributos

const elemento = document.querySelector('div')

elemento.id = 'page'
elemento.style = 'color: red'
elemento.className = 'data'

// const element = document.querySelector('#page')

// element.setAttribute('data-numbr','10')
// element.removeAttribute('id')
// element.setAttribute('id','page')

// element.toggleAttribute('diasble') // si es exist lo elemina sino lo añade

// const element = document.querySelector("#page");

// // ¿Qué clases tiene?
// element.classList;              // ["info", "data", "dark"] (DOMTokenList)
// element.classList.value;        // "info data dark" (String)
// element.classList.length;       // 3

// // Convertirlas a array
// Array.from(element.classList)   // ["info", "data", "dark"] (Array)
// [...element.classList];         // ["info", "data", "dark"] (Array)

// // Consultarlas
// element.classList.item(0);      // "info"
// element.classList.item(1);      // "data"
// element.classList.item(3);      // null

const element = document.querySelector('message')

// element.textContent = 'hola todos'

const insertar = document.querySelector('.insertar')
const container = document.querySelector('.container')

const im = document.createElement('img')
im.src = "https://lenguajejs.com/assets/logo.svg"
im.alt = "logo"

insertar.appendChild(im)

const element1 = document.createElement('div')
element1.textContent = 'nuevo item'

// A) Inserta antes de .container
container.before(element1);
// B) Inserta después de .container
container.after(element1);
// A) Inserta antes del primer hijo de .container
container.prepend(element);
// B) Inserta después del último hijo de .container
container.append(element);
// A) Reemplaza por todos sus hijos
container.replaceChildren(element);
// B) El container es reemplazado por el nuevo item hijo
container.replaceWith(element);

// Navegar a través de elementos
document.body.children.length;  // 1
document.body.children;         // <div id="app">
document.body.parentElement;    // <html>

const app = document.querySelector("#app");

app.children;                   // [div.header, p, a]
app.firstElementChild;          // <div class="header">
app.lastElementChild;           // <a href="/">

const a = app.querySelector("a");

a.previousElementSibling;       // <p>
a.nextElementSibling;           // null

// Navegar a través de nodos
document.body.childNodes.length;  // 3
document.body.childNodes;         // [text, div#app, text]
document.body.parentNode;         // <html>

const ap1 = document.querySelector("#app");

ap1.childNodes;                   // [text, div.header, text, p, text, a, text]
ap1.firstChild.textContent;       // "                             "
ap1.lastChild.textContent;        // "                             "

const a1 = app.querySelector("a");

a1.previousSibling;                // #text
a1.nextSibling;                    // #text