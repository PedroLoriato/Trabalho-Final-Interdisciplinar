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

    public pesquisarPorCriterio(criterio: string): boolean {
        return true;
    }

    public toString(): string {
        return `ID: ${this._id}\nNome: ${this._nome}\nDuração: ${this._duracao}`;
    }
}

export default Item;