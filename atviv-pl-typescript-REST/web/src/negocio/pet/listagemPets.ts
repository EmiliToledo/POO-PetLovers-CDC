import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";
import Listagem from "../contratos/listagem";
import Pet from "../../modelo/pet";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log(`\nLista de todos os pets:`);

        this.clientes.forEach(cliente => {
            console.log(`Cliente: ${cliente.getNome()} (ID: ${cliente.getId()})`);

            const pets: Pet[] = cliente.getPets();
            pets.forEach(pet => {
                console.log(`Pet ID: ${pet.getId()}`);
                console.log(`Nome: ${pet.getNome()}`);
                console.log(`Raça: ${pet.getRaca()}`);
                console.log(`Gênero: ${pet.getGenero()}`);
                console.log(`Tipo: ${pet.getTipo()}`);
                console.log("--------------------");
            });

            console.log("");
        });

        this.entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
    }
}