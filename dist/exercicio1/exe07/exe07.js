"use strict";
// Crie um objeto chamado livro com os campos: título (string), autor (string), paginas (number). Imprima uma frase com essas informações.
function exibirInformacoesLivro(livro) {
    console.log(`titulo: ${livro.titulo} \nautor: ${livro.autor} \npaginas: ${livro.paginas}`);
}
const meuLivro = { titulo: "Programação TypeScript", autor: "Microsoft", paginas: 1225 };
exibirInformacoesLivro(meuLivro);
