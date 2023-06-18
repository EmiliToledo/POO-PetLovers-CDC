import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada"
import Remocao from "../contratos/remocao"

export default class RemocaoPet extends Remocao {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public remover(): void {
        console.log(`\nInício da remoção do pet`);
        let id = this.entrada.receberTexto(`Por favor informe o ID do pet a ser removido: `);
        let petEncontrado = false;

        for (let i = 0; i < this.clientes.length; i++) {
            const client = this.clientes[i];
            const pets = client.getPets();
            
            for (let j = 0; j < pets.length; j++) {
                if (pets[j].getId() === id) {
                    pets.splice(j, 1);
                    petEncontrado = true;
                    break;
                }
            }

            if (petEncontrado) {
                console.log(`Pet com ID ${id} removido com sucesso!\n`);
                break;
            }
        }

        if (!petEncontrado) {
            console.log(`Pet com ID ${id} não encontrado!\n`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}