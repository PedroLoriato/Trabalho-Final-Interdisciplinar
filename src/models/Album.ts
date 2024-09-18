import Item from "./Item";
import Musica from "./Musica";

class Album extends Item {
    private _upc: string;
    private _musicas: Musica[] = [];

    constructor(id: number, nome: string, duracao: number, upc: string, musicas: Musica[] = []) {
        super(id, nome, duracao);

        if (!upc || !/^\d{12}$/.test(upc))
            throw new Error("UPC inválido. O UPC deve conter exatamente 12 digitos númericos.");

        this._upc = upc;
        this._musicas = musicas;
    }

    public get upc(): string {
        return this._upc;
    }

    public set upc(upc: string) {
        if (!upc || !/^\d{12}$/.test(upc))
            throw new Error("UPC inválido. O UPC deve conter exatamente 12 digitos númericos.");
        this._upc = upc;
    }

    public get musicas(): Musica[] {
        return this._musicas;
    }

    public set musicas(musicas: Musica[]) {
        this._musicas = musicas;
    }

    public adicionarMusica(musica: Musica): void {
        const verificarId = this._musicas.find(elemento => elemento.id === musica.id);
        if (verificarId)
            throw new Error(`Música com ID ${musica.id} já existe. Não é possivel adicionar uma nova música com o mesmo ID.`);

        this._musicas.push(musica);
    }

    public removerMusica(musica: Musica): void {
        const verificarId = this._musicas.find(elemento => elemento.id === musica.id);
        if (!verificarId)
            throw new Error(`Música com ID ${musica.id} não está presente no albúm. Não foi possível excluir a música do albúm.`);

        this._musicas = this._musicas.filter((elemento) => elemento.id !== musica.id);
    }
    
    public duracaoEmUnidades(): string {
        return `${this.duracao} segundos`;
    }

    public toString(): string {
        return (
            `Albúm:\n` +
            `${super.toString()}\n` +
            `UPC: ${this._upc}\n` +
            `Músicas:\n` +
            (this._musicas.length === 0 ?
                `Não há músicas.\n` :
                `---------------------\n` +
                `${this._musicas.map(musica => musica.toString()).join("\n")}` +
                `---------------------\n`
            )
        );
    }
}

export default Album;