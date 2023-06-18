import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Atualizacao from "../contratos/atualizacao"

export default class AtualizacaoServico extends Atualizacao {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do serviço`);
        let id = this.entrada.receberTexto(`Por favor informe o id do serviço a ser atualizado: `);
        let index = this.servicos.findIndex(servico => servico.getId() === id);
        if (index !== -1) {
            let nome = this.entrada.receberTexto(`Por favor informe o novo nome do servico: `);
            let valorServico = this.entrada.receberNumero("Digite o valor do serviço: ");
            let servico = new Servico(id, nome, valorServico);
            this.servicos[index] = servico;
            console.log(`Serviço com ID ${id} atualizado com sucesso!\n`);
        } else {
            console.log(`Serviço com ID ${id} não encontrado!\n`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }    
}