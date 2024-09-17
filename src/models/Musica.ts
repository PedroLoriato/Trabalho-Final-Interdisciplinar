import Item from "./Item";

class Musica extends Item {
    private _isrc: string;

    constructor(id: number, nome: string, duracao: number, isrc: string) {
        super(id, nome, duracao);

        if (!isrc || !/^[a-zA-Z0-9]{12}$/.test(isrc))
            throw new Error("ISRC inválido. O ISRC deve conter exatamente 12 caracteres alfanuméricos.");
        this._isrc = isrc;
    }

    public get isrc(): string {
        return this._isrc;
    }

    public set isrc(isrc: string) {
        if (!isrc || !/^[a-zA-Z0-9]{12}$/.test(isrc))
            throw new Error("ISRC inválido. O ISRC deve conter exatamente 12 caracteres alfanuméricos.");
        this._isrc = isrc;
    }

    public toString(): string {
        return (
            `Música:\n` +
            `${super.toString()}\n` + 
            `Duração: ${super.duracao} segundos\n` +
            `ISRC: ${this._isrc}\n`
        );
    }
    
}

export default Musica;