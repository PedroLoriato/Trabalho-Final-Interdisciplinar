import Item from "./Item";

// Classe Filme para testar os princípios SOLID
class Filme extends Item {
    private _paisOrigem: string;

    constructor(id: number, nome: string, duracao: number, paisOrigem: string) {
        super(id, nome, duracao);

        if (!paisOrigem || paisOrigem.trim() === "") 
            throw new Error("O país de origem é inválido. O nome do país de origem não pode estar vazio.");
        if (!/^[a-zA-Z\s]+$/.test(paisOrigem))
            throw new Error("O país de origem é inválido. O nome do país de origem só pode conter letras.");        
        this._paisOrigem = paisOrigem;
    }

    public get paisOrigem(): string {
        return this._paisOrigem;
    }

    public set paisOrigem(paisOrigem: string) {
        if (!paisOrigem || paisOrigem.trim() === "") 
            throw new Error("O país de origem é inválido. O nome do país de origem não pode estar vazio.");
        if (!/^[a-zA-Z]+$/.test(paisOrigem)) 
            throw new Error("O país de origem é inválido. O nome do país de origem só pode conter letras.");        
        this._paisOrigem = paisOrigem;
    }

    public duracaoEmUnidades(): string {
        return `${this.duracao} minutos`;
    }

    public toString(): string {
        return (
            `Filme:\n` +
            `${super.toString()}\n` +
            `País de Origem: ${this._paisOrigem}\n`
        );
    }
    
}

export default Filme;