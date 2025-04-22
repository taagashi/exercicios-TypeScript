// Crie uma função descreverPessoa que receba um objeto com nome, idade e profissao, e retorne uma frase descritiva.

function descreverPessoa(pessoa: Pessoa): void {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.profissao}`);
}


type Pessoa = {nome: string, idade: number, profissao: string};
const thauaGabriel: Pessoa = {nome: "Thaua Gabriel Sousa e Silva", idade: 19, profissao: "programador"};

descreverPessoa(thauaGabriel);