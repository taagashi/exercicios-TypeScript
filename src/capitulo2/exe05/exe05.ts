// Crie um programa que recebe a idade de uma pessoa e determina a obrigatoriedade do voto conforme as regras brasileiras: - Menor de 16 → “Não vota” - 16 ou 17, ou maior de 70 → “Voto facultativo” - De 18 a 70 → “Voto obrigatório”

function votaOuNao(idade: number): string {
    if(idade == 16 || idade == 17) {
        return "Voto facultativo";
    }else if(idade >= 18 && idade <= 70) {
        return "Voto obrigatorio";
    }

    return "Não vota";
}

let resultadoSeVotaOuNao: string = votaOuNao(16);
console.log(resultadoSeVotaOuNao);

resultadoSeVotaOuNao = votaOuNao(35);
console.log(resultadoSeVotaOuNao);

resultadoSeVotaOuNao = votaOuNao(13);
console.log(resultadoSeVotaOuNao);
