"use strict";
// Crie uma interface Aluno com as propriedades: nome (string), matricula (number), ativo (boolean). Crie um objeto baseado nessa interface.
function exibirInformacoesAlunos(alunos) {
    for (const aluno of alunos) {
        console.log(`nome: ${aluno['nome']} matricula: ${aluno['matricula']}, ativo: ${aluno['ativo']}`);
    }
}
;
const alunos = new Array;
const thaua = { nome: "thaua", matricula: 20241094040003 };
const marcos = { nome: "marcos", matricula: 202401232002, ativo: true };
alunos.push(thaua);
alunos.push(marcos);
exibirInformacoesAlunos(alunos);
