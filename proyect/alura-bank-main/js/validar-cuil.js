export default function esUnCuil(campo) {
    const cuil = campo.value.replace(/[-\/]/g, "");
    

    if(tieneNumerosRepetidos(cuil)){
        console.log("Valores repetidos");
        campo.setCustomValidity("Valores repetidos")
        }else{
            if(validarPrimerosDigitos(cuil)  && validarDigitoVerificador (cuil)){
                console.log("Cuil valido");
                }else{
                    console.log("Cuil no existe");
                    campo.setCustomValidity("Cuil no existe")
            }
    }  
}


function tieneNumerosRepetidos(cuil) {
    const numerosRepetidos = [
        "0000000000",
        "1111111111",
        "2222222222",
        "3333333333",
        "4444444444",
        "5555555555",
        "6666666666",
        "7777777777",
        "8888888888",
        "9999999999",
    ];

    return numerosRepetidos.includes(cuil);
}
function validarPrimerosDigitos(cuil) {
    let primerosDigitos = cuil.substr(0, 2);
    let digitosValidos = ['20', '23', '24', '27', '30', '33', '34'];
    return digitosValidos.includes(primerosDigitos)
}

function validarDigitoVerificador(cuil) {
    let acumulado= 0;
    const factores= [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]

    for (let i = 0; i < 10; i++) {
        acumulado += parseInt(cuil[i], 10) * factores[i];
    }

    let verificadorTeorico = 11 - (acumulado % 11);

    if (verificadorTeorico === 11) {
        verificadorTeorico = 0;
    }else if (verificadorTeorico === 10) {    
        verificadorTeorico = 9;
    }

    const digitoVerificador = parseInt(cuil[10], 10);

    return digitoVerificador === verificadorTeorico;
}