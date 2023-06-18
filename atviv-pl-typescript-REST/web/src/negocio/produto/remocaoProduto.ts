import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Remocao from "../contratos/remocao"

export default class RemocaoProduto extends Remocao {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }     
    public remover(): void {
        console.log(`\nInício da remoção do produto`);
        let idProduto = this.entrada.receberTexto(`Por favor informe o id do produto a ser removido: `);
        let index = this.produtos.findIndex(produto => produto.getId() === idProduto);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Produto com ID ${idProduto} removido com sucesso!\n`);
        } else {
            console.log(`Produto com ID ${idProduto} não encontrado!\n`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}