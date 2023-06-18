import Cliente from "./cliente";
import CPF from "./cpf";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

class Empresa {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;

  constructor() {
    this.clientes = [];
    this.produtos = [];
    this.servicos = [];

    for (let i = 1; i <= 10; i++) {
      const valorProduto = Math.floor(Math.random() * 100) + 1; // Valor aleatório entre 1 e 100
      const produto = new Produto(generateId(), `Produto ${i}`, valorProduto);
      this.produtos.push(produto);
    }
    
    for (let i = 1; i <= 10; i++) {
      const valorServico = Math.floor(Math.random() * 100) + 1; // Valor aleatório entre 1 e 100
      const servico = new Servico(generateId(), `Serviço ${i}`, valorServico);
      this.servicos.push(servico);
    }

    for (let i = 1; i <= 20; i++) {
      const cpf = new CPF(`${i}`, new Date(2023, 5, 18));
      const cliente = new Cliente(generateId(), `Cliente ${i}`, `Social ${i}`, cpf);

      const pet1 = new Pet(generateId(), `Pet ${i}-1`, "Cachorro", "m", "m");
      const pet2 = new Pet(generateId(), `Pet ${i}-2`, "Gato", "f", "p");

      cliente.getPets().push(pet1, pet2);

      const numProdutos = Math.floor(Math.random() * 5) + 1;
      const numServicos = Math.floor(Math.random() * 5) + 1;

      for (let j = 0; j < numProdutos; j++) {
        const produtoIndex = Math.floor(Math.random() * this.produtos.length);
        cliente.getProdutosConsumidos().push(this.produtos[produtoIndex]);
      }

      for (let j = 0; j < numServicos; j++) {
        const servicoIndex = Math.floor(Math.random() * this.servicos.length);
        cliente.getServicosConsumidos().push(this.servicos[servicoIndex]);
      }

      this.clientes.push(cliente);
    }
  }

  public get getClientes(): Array<Cliente> {
    return this.clientes;
  }

  public get getProdutos(): Array<Produto> {
    return this.produtos;
  }

  public get getServicos(): Array<Servico> {
    return this.servicos;
  }

  public adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  public adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  public adicionarServico(servico: Servico): void {
    this.servicos.push(servico);
  }

  public getClientesMaisConsumidores(): Array<Cliente> {
    return this.clientes.sort((a, b) => {
      const totalA = a.getProdutosConsumidos().length + a.getServicosConsumidos().length;
      const totalB = b.getProdutosConsumidos().length + b.getServicosConsumidos().length;
      return totalB - totalA;
    }).slice(0, 10);
  }

  public listarServicosOuProdutosMaisConsumidosPorTipoERacaPet(): Map<string, Map<string, Array<Produto | Servico>>> {
    const servicosPorTipo: Map<string, Map<string, Array<Produto | Servico>>> = new Map();
  
    this.clientes.forEach((cliente) => {
      cliente.getPets().forEach((pet) => {
        const tipoPet = pet.getTipo();
        const racaPet = pet.getRaca();
  
        if (!servicosPorTipo.has(tipoPet)) {
          servicosPorTipo.set(tipoPet, new Map());
        }
  
        const servicosPorRaca = servicosPorTipo.get(tipoPet)!;
  
        if (!servicosPorRaca.has(racaPet)) {
          servicosPorRaca.set(racaPet, []);
        }
  
        const produtosServicos = servicosPorRaca.get(racaPet)!;
  
        cliente.getProdutosConsumidos().forEach((produto) => {
          if (!produtosServicos.includes(produto)) {
            produtosServicos.push(produto);
          }
        });
  
        cliente.getServicosConsumidos().forEach((servico) => {
          if (!produtosServicos.includes(servico)) {
            produtosServicos.push(servico);
          }
        });
      });
    });
  
    return servicosPorTipo;
  }

  public getClientesMaisConsumiramValor(): Cliente[] {
    return this.clientes.sort((a, b) => {
      const totalA = a.calcularValorTotalConsumido();
      const totalB = b.calcularValorTotalConsumido();
      return totalB - totalA;
    }).slice(0, 5);
  }  
}

export default Empresa;