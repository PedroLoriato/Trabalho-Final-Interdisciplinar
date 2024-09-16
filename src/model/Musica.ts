import Item from "./Item";

class Musica extends Item {
    private _ISRC: string;

    constructor(id: number, nome: string, duracao: number, ISRC: string) {
        super(id, nome, duracao);

        if (!ISRC || !/^[a-zA-Z0-9]{12}$/.test(ISRC))
            throw new Error("ISRC inválido. O ISRC deve conter exatamente 12 caracteres alfanuméricos.");

        this._ISRC = ISRC;
    }

    public get ISRC(): string {
        return this._ISRC;
    }

    public set ISRC(ISRC: string) {
        if (!ISRC || !/^[a-zA-Z0-9]{12}$/.test(ISRC))
            throw new Error("ISRC inválido. O ISRC deve conter exatamente 12 caracteres alfanuméricos.");
        this._ISRC = ISRC;
    }

    public toString(): string {
        return `${super.toString()}\nISRC: ${this._ISRC} \n`;
    }
}

export default Musica;