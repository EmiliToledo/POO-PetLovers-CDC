import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import AtualizacaoProduto from "../negocio/produto/atualizacaoProduto";
import RemocaoProduto from "../negocio/produto/remocaoProduto";
import ListagemProdutos from "../negocio/produto/listagemProduto";

export default function menuProduto(empresa: Empresa) {
    console.clear();
    let execucao = true;

    while (execucao) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar produto`);
        console.log(`2 - Atualizar produto`);
        console.log(`3 - Remover produto`);
        console.log(`4 - Listar todos os produtos`);
        console.log(`0 - Sair`);

        let entrada = new Entrada();
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

        switch (opcao) {
            case 1:
                console.clear();
                let cadastro = new CadastroProduto(empresa.getProdutos);
                cadastro.cadastrar();
                break;
            case 2:
                console.clear();
                let atualizacao = new AtualizacaoProduto(empresa.getProdutos);
                atualizacao.atualizar();
                break;
            case 3:
                console.clear();
                let remocao = new RemocaoProduto(empresa.getProdutos);
                remocao.remover();
                break;
            case 4:
                console.clear();
                let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
                listagemProdutos.listar();
                break;
            case 0:
                console.clear();
                execucao = false;
                console.log(`Até mais`);
                break;
            default:
                console.clear();
                console.log(`Operação não entendida :(`);
        }
    }
}