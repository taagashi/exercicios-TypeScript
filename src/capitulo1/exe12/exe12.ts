// Crie uma função que receba um parâmetro do tipo string | number. Use typeof para identificar o tipo e imprimir uma mensagem adequada.

function identificarTipo(dado: string | number): void {
    if(typeof dado == "string") {
        console.log("O dado enviado eh uma string")
    }

    if(typeof dado == "number") {
        console.log("O dado enviado eh um numero")
    }
}

identificarTipo(12);
identificarTipo("pessoa");