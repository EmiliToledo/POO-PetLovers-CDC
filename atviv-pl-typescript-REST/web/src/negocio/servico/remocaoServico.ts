import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Remocao from "../contratos/remocao"

export default class RemocaoServico extends Remocao {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }     
    public remover(): void {
        console.log(`\nInício da remoção do servico`);
        let idServico = this.entrada.receberTexto(`Por favor informe o id do servico a ser removido: `);
        let index = this.servicos.findIndex(servico => servico.getId() === idServico);
        if (index !== -1) {
            this.servicos.splice(index, 1);
            console.log(`Servico com ID ${idServico} removido com sucesso!\n`);
        } else {
            console.log(`Servico com ID ${idServico} não encontrado!\n`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}