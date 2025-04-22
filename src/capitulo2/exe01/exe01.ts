// Crie um programa que receba uma variável idade e imprima:

function inferirTipoPessoa(idadePessoa: number): string{
    if(idadePessoa <= 12) {
        return "Criança";
    }else if(idadePessoa >= 12 && idadePessoa <= 17) {
        return "Adolescente";
    }

    return "Adulto";
}

const tipoPessoa: string = inferirTipoPessoa(17);

console.log(tipoPessoa);

