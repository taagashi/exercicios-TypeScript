"use strict";
// Crie um array de objetos alunos com 3 elementos (baseado na interface do exercício 8). Percorra esse array e imprima o nome dos alunos ativos (ativo === true).
function imprimirAlunosAtivos(alunos) {
    for (const aluno of alunos) {
        if (aluno.ativo == true) {
            console.log(aluno.nome);
        }
    }
}
;
const alunosEscola = new Array;
const lucas = { nome: "lucas", matricula: 20241094040003 };
const adriano = { nome: "adriano", matricula: 202401232002, ativo: true };
const michell = { nome: "michell", matricula: 202512330001, ativo: false };
alunosEscola.push(lucas);
alunosEscola.push(adriano);
alunosEscola.push(michell);
imprimirAlunosAtivos(alunosEscola);
