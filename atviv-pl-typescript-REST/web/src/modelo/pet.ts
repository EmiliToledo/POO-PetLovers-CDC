export default class Pet {
    private id!: string;
    private nome: string;
    private tipo: string;
    private raca: string;
    private genero: string;

    constructor(id: string, nome: string, raca: string, genero: string, tipo: string) {
        this.id = id;
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
    }

    public getId(): string {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getRaca(): string {
        return this.raca;
    }

    public setRaca(raca: string): void {
        this.raca = raca;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }
}