

// son un obj de javascript que va a devolver el resultado cuando lo tengan listo
const student = [
    {
        name: "pedro",
        age: 25
    },
    {
        name: "lucia",
        age: 30
    }
]

const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject(student)
        },3000)
    })
}

// console.log(getDatos())

getDatos().then( (data) =>{
    console.log(data)
}).catch( (err) =>{
    console.log(err)
})







