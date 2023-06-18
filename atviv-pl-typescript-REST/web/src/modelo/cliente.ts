import CPF from "./cpf";
import Pet from "./pet";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

export default class Cliente {
    private id!: string;
    public nome: string;
    public nomeSocial: string;
    private cpf: CPF;
    private rgs: Array<RG>;
    private dataCadastro: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;
    private pets: Array<Pet>;

    constructor(id: string, nome: string, nomeSocial: string, cpf: CPF) {
        this.id = id;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.pets = [];
    }

    public getId(): string {
        return this.id;
    }

    public getNome(): string {
        return this.nome
    }

    public getCpf(): CPF {
        return this.cpf;
    }

    public getRgs(): Array<RG> {
        return this.rgs;
    }

    public getDataCadastro(): Date {
        return this.dataCadastro;
    }

    public getTelefones(): Array<Telefone> {
        return this.telefones;
    }

    public getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    }

    public getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    }

    public getPets(): Array<Pet> {
        return this.pets;
    }

    public calcularValorTotalConsumido(): number {
        let valorTotal = 0;
      
        // Somar o valor de cada produto consumido
        this.produtosConsumidos.forEach((produto) => {
          valorTotal += produto.getValor();
        });
      
        // Somar o valor de cada serviço consumido
        this.servicosConsumidos.forEach((servico) => {
          valorTotal += servico.getValor();
        });
      
        return valorTotal;
    }      
}