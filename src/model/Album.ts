import Item from "./Item";
import Musica from "./Musica";

class Album extends Item {
    private _UPC: string;
    private _dataLancamento: Date;
    private _musicas: Musica[] = [];

    constructor(id: number, nome: string, duracao: number, UPC: string, dataLancamento: Date, musicas: Musica[] = []) {
        super(id, nome, duracao);

        if (!UPC || !/^\d{12}$/.test(UPC))
            throw new Error("UPC inválido. O UPC deve conter exatamente 12 dígitos.");
        if (!dataLancamento || dataLancamento.getTime() === 0)
            throw new Error("Data inválida. Digite uma data de lançamento neste formato aaaa-mm-dd");

        this._UPC = UPC;
        this._dataLancamento = dataLancamento;
        this._musicas = musicas;
    }

    public get UPC(): string {
        return this._UPC;
    }

    public set UPC(UPC: string) {
        if (!UPC || !/^\d{12}$/.test(UPC))
            throw new Error("UPC inválido. O UPC deve conter exatamente 12 dígitos.");
        this._UPC = UPC;
    }

    public get dataLancamento(): Date {
        return this._dataLancamento;
    }

    public set dataLancamento(dataLancamento: Date) {
        if (!dataLancamento || dataLancamento.getTime() === 0)
            throw new Error("Data inválida. Digite uma data de lançamento neste formato aaaa-mm-dd");
        this._dataLancamento = dataLancamento;
    }

    public get musicas(): Musica[] {
        return this._musicas;
    }

    public set musicas(musicas: Musica[]) {
        this._musicas = musicas;
    }

    public adicionarMusica(musica: Musica): void {
        const verificarId = this._musicas.find(elemento => elemento.id === musica.id);
        if (verificarId) {
            throw new Error(`Música com ID ${musica.id} já existe. Não é possivel adicionar uma nova música com o mesmo ID.`);
        }
        this._musicas.push(musica);
    }

    public removerMusica(musica: Musica): void {
        const verificarId = this._musicas.find(elemento => elemento.id === musica.id);
        if (!verificarId) {
            throw new Error(`Música com ID ${musica.id} não está presente no albúm. Não foi possível excluir a música do albúm.`);
        }
        this._musicas = this._musicas.filter((elemento) => elemento.id !== musica.id);
    }

    public toString(): string {
        return `${super.toString()}\nUPC: ${this._UPC}\nData de lançamento: ${this._dataLancamento.toLocaleDateString("pt-BR")}\nMusicas: \n${this._musicas.map(musica => musica.toString()).join("\n")}\n`;
    }
}

export default Album;