import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"
import Cadastro from "../contratos/cadastro"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);

        let idUsuario: string = "";
        let usuarioEncontrado: Cliente | undefined;

        while (!usuarioEncontrado) {
            idUsuario = this.entrada.receberTexto(`Por favor, informe o ID do usuário para cadastrar o pet: `);

            usuarioEncontrado = this.clientes.find(cliente => cliente.getId() === idUsuario);

            if (!usuarioEncontrado) {
                console.log(`Usuário com ID ${idUsuario} não encontrado. Por favor, tente novamente.`);
            }
        }

        const nomeUsuario = usuarioEncontrado.nome;
        const confirmacao = this.entrada.receberTexto(`Usuário encontrado: ${nomeUsuario}. Deseja cadastrar o pet para este usuário? (s/n): `);

        if (confirmacao.toLowerCase() === 's') {
            console.log(`\nCadastro de pet para o usuário ${nomeUsuario}`);

            let nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet: `);
            let racaPet = this.entrada.receberTexto(`Por favor, informe a raça do pet: `);
            let generoPet = this.entrada.receberTexto(`Por favor, informe o gênero do pet: `);
            let tipoPet = this.entrada.receberTexto(`Por favor, informe o tipo do pet: `);

            const quantidadeTotalPets = this.clientes.reduce((total, cliente) => total + cliente.getPets.length, 0);
            const idPet = (quantidadeTotalPets + 1).toString();

            const pet = new Pet(idPet, nomePet, racaPet, generoPet, tipoPet);
            usuarioEncontrado.getPets().push(pet);

            console.log(`\nCadastro do pet concluído para o usuário ${nomeUsuario} :)\n`);
        } else {
            console.log(`Cadastro do pet cancelado.`);
        }

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}