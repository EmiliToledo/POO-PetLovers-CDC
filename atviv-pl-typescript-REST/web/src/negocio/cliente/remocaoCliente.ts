import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Remocao from "../contratos/remocao"

export default class RemocaoCliente extends Remocao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }     
    public remover(): void {
        console.log(`\nInício da remoção do cliente`);
        let cpf = this.entrada.receberTexto(`Por favor informe o CPF do cliente a ser removido: `);
        let index = this.clientes.findIndex(cliente => cliente.getCpf.toString() === cpf);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cliente com CPF ${cpf} removido com sucesso!\n`);
        } else {
            console.log(`Cliente com CPF ${cpf} não encontrado!\n`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}