export default class Telefone {
    private ddd: string;
    private numero: string;
  
    constructor(ddd: string, numero: string) {
      this.ddd = ddd;
      this.numero = numero;
    }
  
    public getDdd(): string {
      return this.ddd;
    }
  
    public getNumero(): string {
      return this.numero;
    }
  
    public setDdd(ddd: string): void {
      this.ddd = ddd;
    }
  
    public setNumero(numero: string): void {
      this.numero = numero;
    }
  
    public toString(): string {
      return `(${this.ddd}) ${this.numero}`;
    }
  }
  