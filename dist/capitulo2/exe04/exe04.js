"use strict";
// Utilize o operador ternário para verificar uma variável saldo. Se for maior ou igual a zero, mostre “Saldo OK”; caso contrário, mostre “Saldo negativo”.
function verificarSaldo(saldo) {
    return (saldo >= 0 ? "Saldo Ok" : "Saldo negativo");
}
let statusSaldo = verificarSaldo(12.24);
console.log(statusSaldo);
statusSaldo = verificarSaldo(-1);
console.log(statusSaldo);
