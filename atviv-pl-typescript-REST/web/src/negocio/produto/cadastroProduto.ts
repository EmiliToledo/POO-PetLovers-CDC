import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "../contratos/cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let valorProduto = this.entrada.receberNumero("Digite o valor do serviço: ");
        let produto = new Produto(this.produtos.length.toString() + 1, nome, valorProduto);
        this.produtos.push(produto);
        console.log(`\nCadastro concluído :)\n`);

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}