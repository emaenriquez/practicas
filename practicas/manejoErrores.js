

function dividir(num1,num2){

    if(b === 0){
        throw new Error('nose puede dividir por cero');
    }

    return num1,num2;
}

try {
    
    let respuesta = dividir(10,20);
    console.log(respuesta);

} catch (error) {
    console.error(error);
}