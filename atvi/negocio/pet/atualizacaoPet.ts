import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Atualizacao from "../contratos/atualizacao";

export default class AtualizacaoPet extends Atualizacao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nInício da atualização do pet`);

        let id = this.entrada.receberTexto(`Por favor, informe o ID do pet a ser atualizado: `);
        let petEncontrado: Pet | undefined;

        for (const cliente of this.clientes) {
            const pets = cliente.getPets();
            petEncontrado = pets.find(pet => pet.getId() === id);

            if (petEncontrado) {
                break;
            }
        }

        if (petEncontrado) {
            let nome = this.entrada.receberTexto(`Por favor, informe o nome do pet: `);
            let raca = this.entrada.receberTexto(`Por favor, informe a raça do pet: `);
            let genero = this.entrada.receberTexto(`Por favor, informe o gênero do pet: `);
            let tipo = this.entrada.receberTexto(`Por favor, informe o tipo do pet: `);

            petEncontrado.setNome(nome);
            petEncontrado.setRaca(raca);
            petEncontrado.setGenero(genero);
            petEncontrado.setTipo(tipo);

            console.log(`Pet com ID ${id} atualizado com sucesso!\n`);
        } else {
            console.log(`Pet com ID ${id} não encontrado!\n`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}