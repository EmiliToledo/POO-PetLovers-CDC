import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import MenuCliente from "./menuCliente";
import MenuPet from "./menuPet";
import menuProduto from "./menuProduto";
import menuServico from "./menuServico";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

console.clear();
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Pets`);
    console.log(`3 - Produtos`);
    console.log(`4 - Serviços`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            console.clear();
            MenuCliente(empresa);
            break;
        case 2:
            console.clear();
            MenuPet(empresa.getClientes);
            break;
        case 3:
            console.clear();
            menuProduto(empresa);
            break;
        case 4:
            console.clear();
            menuServico(empresa);
            break;
        case 5:
            console.clear();
            cadastrarProduto();
            break;
        case 6:
            console.clear();
            cadastrarServico();
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

function cadastrarProduto() {
    let entrada = new Entrada();
    let produtoId = entrada.receberTexto("Digite o ID do produto: ");
    let produtoNome = entrada.receberTexto("Digite o nome do produto: ");
    let valorProduto = entrada.receberNumero("Digite o valor do produto: ");
    let novoProduto = new Produto(produtoId, produtoNome, valorProduto);
    empresa.getProdutos.push(novoProduto);
    console.log(`Produto '${novoProduto.getName}' cadastrado com sucesso!`);
}

function cadastrarServico() {
    let entrada = new Entrada();
    let servicoId = entrada.receberTexto("Digite o ID do serviço: ");
    let servicoNome = entrada.receberTexto("Digite o nome do serviço: ");
    let valorProduto = entrada.receberNumero("Digite o valor do serviço: ");
    let novoServico = new Servico(servicoId, servicoNome, valorProduto);
    empresa.getServicos.push(novoServico);
    console.log(`Serviço '${novoServico.getName}' cadastrado com sucesso!`);
}