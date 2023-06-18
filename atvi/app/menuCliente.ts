import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import AtualizacaoCliente from "../negocio/cliente/atualizacaoCliente";
import RemocaoCliente from "../negocio/cliente/remocaoCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";

export default function menuCliente(empresa: Empresa) {
  console.clear();
  let execucao = true;

  while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Atualizar cliente`);
    console.log(`3 - Remover cliente`);
    console.log(`4 - Listar todos os clientes`);
    console.log(`5 - Listar clientes que mais consumiram`);
    console.log(`6 - Serviços ou Produtos mais consumidos por tipo e raça de pets`)
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
      case 1:
        console.clear();
        let cadastro = new CadastroCliente(empresa.getClientes);
        cadastro.cadastrar();
        break;
      case 2:
        console.clear();
        let atualizacao = new AtualizacaoCliente(empresa.getClientes);
        atualizacao.atualizar();
        break;
      case 3:
        console.clear();
        let remocao = new RemocaoCliente(empresa.getClientes);
        remocao.remover();
        break;
      case 4:
        console.clear();
        let listagem = new ListagemClientes(empresa.getClientes);
        listagem.listar();
        break;
      case 5:
        console.clear();
        console.log(`Clientes que mais consumiram produtos ou serviços:`);
        const clientesMaisConsumidores = empresa.getClientesMaisConsumidores();
        clientesMaisConsumidores.forEach((cliente, index) => {
          console.log(`${index + 1}. Nome: ${cliente.getNome()}`);
          console.log(`   Produtos Consumidos: ${cliente.getProdutosConsumidos().length}`);
          console.log(`   Serviços Consumidos: ${cliente.getServicosConsumidos().length}`);
          console.log(`   Total: ${cliente.getProdutosConsumidos().length + cliente.getServicosConsumidos().length}`);
          console.log(`-------------------------------`);
        });
        entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
        break;
      case 6:
        console.clear();
        console.log(`Serviços ou Produtos mais consumidos por tipo e raça de pets:`);
        const servicosPorTipoPet = empresa.listarServicosOuProdutosMaisConsumidosPorTipoERacaPet();
        servicosPorTipoPet.forEach((item, tipoPet) => {
          console.log(`Tipo de Pet: ${tipoPet}`);
          item.forEach((subItem, racaPet) => {
            console.log(`   Raça do Pet: ${racaPet}`);
            console.log(`   Produtos/Serviços:`);
            subItem.forEach((produtoOuServico, index) => {
              console.log(`   ${index + 1}. Nome: ${produtoOuServico.getName()}`);
            });
            console.log(`-------------------------------`);
          });
        });
        entrada.receberTexto(`Pressione qualquer tecla para continuar`);
        console.clear();
        break;
        case 7:
          console.clear();
          console.log(`Clientes que mais consumiram em valor:`);
          const clientesMaisConsumiramValor = empresa.getClientesMaisConsumiramValor();
          clientesMaisConsumiramValor.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.getNome()}`);
            console.log(`   Valor Total Consumido: R$ ${cliente.calcularValorTotalConsumido().toFixed(2)}`);
            console.log(`-------------------------------`);
          });
          entrada.receberTexto(`Pressione qualquer tecla para continuar`);
          console.clear();
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