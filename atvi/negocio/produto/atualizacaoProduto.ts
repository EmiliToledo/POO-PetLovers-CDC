import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Atualizacao from "../contratos/atualizacao"

export default class AtualizacaoProduto extends Atualizacao {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do produto`);
        let id = this.entrada.receberTexto(`Por favor informe o id do produto a ser atualizado: `);
        let index = this.produtos.findIndex(produto => produto.getId() === id);
        if (index !== -1) {
            let nome = this.entrada.receberTexto(`Por favor informe o novo nome do produto: `);
            let valorProduto = this.entrada.receberNumero("Digite o valor do produto: ");
            let produto = new Produto(id, nome, valorProduto);
            this.produtos[index] = produto;
            console.log(`Produto com ID ${id} atualizado com sucesso!\n`);
        } else {
            console.log(`Produto com ID ${id} não encontrado!\n`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }    
}