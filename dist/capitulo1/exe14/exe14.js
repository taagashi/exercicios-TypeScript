"use strict";
// Crie uma função descreverPessoa que receba um objeto com nome, idade e profissao, e retorne uma frase descritiva.
function descreverPessoa(pessoa) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.profissao}`);
}
const thauaGabriel = { nome: "Thaua Gabriel Sousa e Silva", idade: 19, profissao: "programador" };
descreverPessoa(thauaGabriel);
