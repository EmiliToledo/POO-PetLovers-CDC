import Entrada from "../../io/entrada"
import Listagem from "../contratos/listagem";
import Servico from "../../modelo/servico";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nLista de todos os servicos:`);
        this.servicos.forEach(servico => {
            console.log(`ID: ${servico.getId()}`);
            console.log(`Nome: ${servico.getName()}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}