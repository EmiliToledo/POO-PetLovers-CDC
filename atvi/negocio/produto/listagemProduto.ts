import Entrada from "../../io/entrada"
import Listagem from "../contratos/listagem";
import Produto from "../../modelo/produto";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`ID: ${produto.getId()}`);
            console.log(`Nome: ${produto.getName()}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}