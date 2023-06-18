import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Atualizacao from "../contratos/atualizacao"

export default class AtualizacaoCliente extends Atualizacao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do cliente`);
        let id = this.entrada.receberTexto(`Por favor informe o ID do cliente a ser atualizado: `);
        let index = this.clientes.findIndex(cliente => cliente.getId() === id);
        if (index !== -1) {
            let nome = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `);
            let nomeSocial = this.entrada.receberTexto(`Por favor informe o novo nome social do cliente: `);
            let valor = this.entrada.receberTexto(`Por favor informe o novo número do CPF: `);
            let data = this.entrada.receberTexto(`Por favor informe a nova data de emissão do CPF, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/');
            let ano = new Number(partesData[2].valueOf()).valueOf();
            let mes = new Number(partesData[1].valueOf()).valueOf();
            let dia = new Number(partesData[0].valueOf()).valueOf();
            let dataEmissao = new Date(ano, mes, dia);
            let cpf = new CPF(valor, dataEmissao);
            let cliente = new Cliente(id, nome, nomeSocial, cpf);
            this.clientes[index] = cliente;
            console.log(`Cliente com ID ${id} atualizado com sucesso!\n`);
        } else {
            console.log(`Cliente com ID ${id} não encontrado!\n`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }    
}