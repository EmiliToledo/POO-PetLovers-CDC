import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada"
import Listagem from "../contratos/listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf().getValor}`);
            console.log(`Produtos Consumidos:`);
            cliente.getProdutosConsumidos().forEach(produto => {
                console.log(`- Nome: ${produto.getName()}, ID: ${produto.getId()}`);
            });
            console.log(`Serviços Consumidos:`);
            cliente.getServicosConsumidos().forEach(servico => {
                console.log(`- Nome: ${servico.getName()}, ID: ${servico.getId()}`);
            });
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}