
const btn = document.querySelector('button')


const random = (number) => {
    return Math.floor(Math.random() * (number + 1))
}

const chageBack = () => {
    const rncol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor =  rncol
}

btn.addEventListener('click',chageBack)