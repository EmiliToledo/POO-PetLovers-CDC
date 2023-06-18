import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "../contratos/cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `);
        let valorServico = this.entrada.receberNumero("Digite o valor do serviço: ");
        let servico = new Servico(this.servicos.length.toString(), nome, valorServico);
        this.servicos.push(servico);
        console.log(`\nCadastro concluído :)\n`);

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}