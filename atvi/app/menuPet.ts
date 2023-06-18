import Entrada from "../io/entrada";
import CadastroPet from "../negocio/pet/cadastroPet"
import AtualizacaoPet from "../negocio/pet/atualizacaoPet"
import RemocaoPet from "../negocio/pet/remocaoPet"
import ListagemPets from "../negocio/pet/listagemPets"

export default function menuPet(clients: any[]) {
    console.clear();
    let execucao = true
    
    while (execucao) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar pet`);
        console.log(`2 - Atualizar pet`);
        console.log(`3 - Remover pet`)
        console.log(`4 - Listar todos os pets`);
        console.log(`0 - Sair`);
    
        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
        switch (opcao) {
            case 1:
                console.clear();
                let cadastro = new CadastroPet(clients)
                cadastro.cadastrar()
                break;
            case 2:
                console.clear();
                let atualizacao = new AtualizacaoPet(clients)
                atualizacao.atualizar()
                break;
            case 3:
                console.clear();
                let remocao = new RemocaoPet(clients)
                remocao.remover()
                break;
            case 4:
                console.clear();
                let listagemPets = new ListagemPets(clients)
                listagemPets.listar()
                break;
            case 0:
                console.clear();
                execucao = false
                console.log(`Até mais`)
                break;
            default:
                console.clear();
                console.log(`Operação não entendida :(`)
        }
    }
}