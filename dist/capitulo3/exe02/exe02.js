"use strict";
// Utilize um laço while para somar os números pares entre 1 e 20 e exibir o resultado no console.
let numero = 1;
let somaPar = 0;
while (numero <= 20) {
    if (numero % 2 == 0) {
        somaPar += numero;
    }
    numero++;
}
console.log(`A soma dos pares de 1 a 20 eh: ${somaPar}`);
