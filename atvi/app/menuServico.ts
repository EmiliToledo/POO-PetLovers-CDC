import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroServico from "../negocio/servico/cadastroServico"
import AtualizacaoServico from "../negocio/servico/atualizacaoServico"
import RemocaoServico from "../negocio/servico/remocaoServico"
import ListagemServico from "../negocio/servico/listagemServico"

export default function menuServico(empresa: Empresa) {
    console.clear();
    let execucao = true
    
    while (execucao) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar serviço`);
        console.log(`2 - Atualizar serviço`);
        console.log(`3 - Remover serviço`)
        console.log(`4 - Listar todos os serviços`);
        console.log(`0 - Sair`);
    
        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
        switch (opcao) {
            case 1:
                console.clear();
                let cadastro = new CadastroServico(empresa.getServicos)
                cadastro.cadastrar()
                break;
            case 2:
                console.clear();
                let atualizacao = new AtualizacaoServico(empresa.getServicos)
                atualizacao.atualizar()
                break;
            case 3:
                console.clear();
                let remocao = new RemocaoServico(empresa.getServicos)
                remocao.remover()
                break;
            case 4:
                console.clear();
                let listagemServicos = new ListagemServico(empresa.getServicos)
                listagemServicos.listar()
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