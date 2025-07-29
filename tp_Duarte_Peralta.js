let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un número menor o igual a 50: "));


if (Number.isInteger(numero) && numero > 0 && numero <= 50) {

    for (let i = 1; i <= numero; i++) {
        let linea = "";

        for (let j = 1; j <= i; j++) {
            linea = linea + j + "++";
        }

        console.log(linea);
    }

} else {
    console.log("Número inválido. Debe ser un número entero entre 1 y 50.");
}
