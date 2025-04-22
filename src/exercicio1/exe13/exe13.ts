// Crie uma função chamada filtrarProdutosDisponiveis que receba um array de produtos com: nome (string), emEstoque (boolean), e retorne apenas os que estão em estoque.

function filtrarProdutos(produtos: Produto[]): Produto[] {
    return (produtos.filter(produto => produto.emEstoque == true))
}

type Produto = {nome: string, emEstoque: boolean};
const produtos: Produto[] = [{nome: "skate", emEstoque:true}, {nome: "bolsa", emEstoque: false}, {nome: "lapis", emEstoque: true}];

console.log(filtrarProdutos(produtos));