// Usando `switch`, crie um programa que dado o número de uma linguagem imprima: - 1 → "TypeScript" - 2 → "JavaScript" - 3 → "Python" - qualquer outro valor → "Linguagem não cadastrada"

function escolherLinguagem(numeroLinguagem: number): string {
    let linguagem: string = "";

    switch (numeroLinguagem) {
        case 1:
            linguagem = "TypeScript";
            break;

        case 2:
            linguagem = "JavaScript";
            break;

        case 3:
            linguagem = "Python";
            break;
        
        default:
            linguagem = "Linguagem não cadastrada"
            break;
    }

    return linguagem;
}

let linguagem: string = escolherLinguagem(1)

console.log(linguagem);

linguagem = escolherLinguagem(10);

console.log(linguagem);