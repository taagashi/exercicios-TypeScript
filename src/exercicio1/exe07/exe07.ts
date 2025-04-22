// Crie um objeto chamado livro com os campos: título (string), autor (string), paginas (number). Imprima uma frase com essas informações.

function exibirInformacoesLivro(livro: Livro): void {
    console.log(`titulo: ${livro.titulo} \nautor: ${livro.autor} \npaginas: ${livro.paginas}`)
}

type Livro = {titulo: string, autor: string, paginas: number};

const meuLivro: Livro = {titulo: "Programação TypeScript", autor: "Microsoft", paginas: 1225};

exibirInformacoesLivro(meuLivro);