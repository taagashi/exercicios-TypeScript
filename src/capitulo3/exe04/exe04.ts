// Dado o objeto abaixo, use `for...in` para imprimir todas as propriedades no formato: `"<chave>: <valor>"`

const pessoa = { nome: "João", idade: 30 };

for (const chave in pessoa) {
    const valor = pessoa[chave as keyof typeof pessoa];
    console.log(`${chave}: ${valor}`);
}


  