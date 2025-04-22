// Com base em uma variável `nota` de 0 a 10, exiba: - nota >= 7 → “Aprovado” - nota entre 5 e 6.9 → “Recuperação” - nota < 5 → “Reprovado”

function situacaoEscolar(nota: number): string {
    if(nota >= 7) {
        return "Aprovado";
    }else if(nota >= 5 && nota <= 6.9) {
        return "Recuperação";
    }

    return "Reprovado";
}

let situacaoAluno: string = situacaoEscolar(10);
console.log(situacaoAluno);

situacaoAluno = situacaoEscolar(5);
console.log(situacaoAluno);

situacaoAluno = situacaoEscolar(4);
console.log(situacaoAluno);