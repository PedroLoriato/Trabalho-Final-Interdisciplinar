import IPesquisavel from "./IPesquisavel";

abstract class Item implements IPesquisavel {
    private _id: number;
    private _nome: string;
    private _duracao: number;

    constructor(id: number, nome: string, duracao: number) {
        if (id <= 0)
            throw new Error("ID inválido. O ID deve ser maior que zero.");
        if (!nome || nome.trim() === "")
            throw new Error("Nome inválido. O nome não pode estar vazio.");
        if (!duracao || duracao <= 0)
            throw new Error("Duração inválida. A duração deve ser maior que zero.");
        this._id = id;
        this._nome = nome;
        this._duracao = duracao;
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get duracao(): number {
        return this._duracao;
    }

    public set nome(nome: string) {
        if (!nome || nome.trim() === "")
            throw new Error("Nome inválido. O nome não pode estar vazio.");
        this._nome = nome;
    }

    public set duracao(duracao: number) {
        if (!duracao || duracao <= 0)
            throw new Error("Duração inválida. A duração deve ser maior que zero.");
        this._duracao = duracao;
    }

    public atendeCriterio(criterio: string): boolean {
        return this._nome.toLowerCase().includes(criterio.toLowerCase()); 
    }

    // Método abstrato para subclasses definirem a unidade de duração
    public abstract duracaoEmUnidades(): string;

    public toString(): string {
        return (
            `ID: ${this._id}\n` +
            `Nome: ${this._nome}\n` +
            `Duração: ${this.duracaoEmUnidades()}`
        );
    }
}

export default Item;