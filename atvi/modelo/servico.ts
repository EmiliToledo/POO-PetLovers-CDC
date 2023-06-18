export default class Servico {
    private id: string;
    private nome: string;
    private valor: number;
  
    constructor(id: string, nome: string, valor: number) {
      this.id = id;
      this.nome = nome;
      this.valor = valor;
    }
  
    public getId(): string {
      return this.id;
    }
  
    public getName(): string {
      return this.nome;
    }
  
    public getValor(): number {
      return this.valor;
    }
  
    public setValor(valor: number): void {
      this.valor = valor;
    }
  }  