// Crie uma função chamada dobro que receba um número e retorne o dobro dele.

function dobro(numero: number): number {
    return (numero * 2);
}

const meuNumero: number = 2;
const meuNumeroDobrado: number = dobro(meuNumero);

console.log(`O dobro de ${meuNumero} eh igual a ${meuNumeroDobrado}`);