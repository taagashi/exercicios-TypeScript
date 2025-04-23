// Crie um array chamado cores com 3 strings. Imprima cada cor usando um for...of.

function imprimirCores(cores: string[]): void {
    for(const cor of cores) {
        console.log(cor);
    }
}

const cores: string[] = ["vermelo", "verde", "azul"];

imprimirCores(cores);

