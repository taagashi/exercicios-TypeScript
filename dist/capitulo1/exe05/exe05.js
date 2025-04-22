"use strict";
// Crie um array chamado notas com 4 números e imprima a média deles.
function realizarMedia(notas) {
    return (notas.reduce((acc, n) => acc + n, 0) / notas.length);
}
const notasAlunos = [10, 7, 8, 3, 9];
const mediaAlunos = realizarMedia(notasAlunos);
console.log(`Notas dos alunos: ${notasAlunos.join(" | ")}`);
console.log(`A média dos ${notasAlunos.length} alunos foram igual ah: ${mediaAlunos}`);
