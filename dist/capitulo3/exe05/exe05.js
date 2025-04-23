"use strict";
// Crie uma **função** chamada `verificarAprovacao` que recebe um **array de objetos** com nome e notas de alunos. Cada aluno tem 3 notas.
// A função deve:
// 1. Calcular a **média** das notas de cada aluno.
// 2. Verificar se a média é **maior ou igual a 7**.
// 3. Exibir no console a seguinte mensagem para cada aluno:
function verificarAprovacao(alunos) {
    let media;
    let situacao;
    for (const aluno of alunos) {
        media = aluno.notas.reduce((acc, n) => acc + n, 0) / aluno.notas.length;
        situacao = media >= 7 ? "Aprovado(a)" : "Reprovado(a)";
        console.log(`${aluno.nome} - média: ${Math.round(media)} - Situação: ${situacao}`);
    }
}
const alunoss = [
    { nome: "Maria", idade: 19, notas: [10, 5, 7] },
    { nome: "Thaua", idade: 19, notas: [9, 8, 10] },
    { nome: "Jobson", idade: 15, notas: [10, 10, 10] },
    { nome: "Micael", idade: 18, notas: [5, 4, 10] }
];
verificarAprovacao(alunoss);
