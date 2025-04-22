// Crie um array com 5 nomes de cidades. Use `for...of` para exibir no console:

function exibirCidades(cidades: string[]): void {
    for(const cidade of cidades) {
        console.log(cidade);
    }
}

const cidades: string[] = ["Rafael Godeiro", "Patu", "Almino Afonso", "Mossoro", "Natal"];

exibirCidades(cidades);