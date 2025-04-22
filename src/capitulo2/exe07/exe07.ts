// Crie um programa que receba:

// - **nome do aluno**
// - três **notas (números de 0 a 10)**
// - a **frequência** em porcentagem (de 0 a 100)

// E com base nesses dados, faça:

// 1. Calcule a **média** das três notas.
// 2. Se a **frequência for menor que 75%**, o aluno estará **reprovado por falta**, independentemente da média.
// 3. Se a frequência for suficiente, aplique as seguintes regras:
//     - Média >= 7: **Aprovado**
//     - Média >= 5 e < 7: **Recuperação**
//     - Média < 5: **Reprovado por nota**7


function calcularMedia(notas: number[]): string | undefined{
    if(notas.length != 3) {
        return undefined;
    }

    let media: number = notas.reduce((acc, n) => acc + n, 0) / notas.length

    if(media >= 7) {
        return "Aprovado";
    }else if(media >= 5 && media < 7) {
        return "Recuperação";
    }

    return "Reprovado por nota"
}

function calcularFrequencia(frequencia: number): boolean {
    return (frequencia > 75);
}

function calcularSituacaoAluno(nome: string, notas: number[], frequencia: number): string | undefined {
    if(!calcularFrequencia(frequencia)) {
        return "Reprovado por falta";
    }

    return `${nome} | ${calcularMedia(notas)}`;
}


type Alunos = {nome: string, notas: number[], frequencia: number};
const amanda: Alunos = {nome: "Amanda", notas: [10, 5, 0], frequencia: 76};

console.log(calcularSituacaoAluno(amanda.nome, amanda.notas, amanda.frequencia));