// Async Await

// async function showData(){
//     const json = await getData()

//     console.log(json.title)
// }

// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json =>{json})
// }

// showData()


const data = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await respuesta.json()

        console.log('los datos obtenidos son: ', data)
        recorido(data)

    } catch (error) {
        console.error("Error:", error);
    }
}


data()

function recorido(arr) {
    arr.forEach(item => {
        document.write(` 
            <p style="color:red;">el body es: ${item.body} </p>
            <p style="color:#000;">el titulo es: ${item.title} </p>
        `)
    });
}