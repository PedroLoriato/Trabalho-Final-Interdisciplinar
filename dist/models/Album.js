"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Album extends Item_1.default {
    constructor(id, nome, duracao, upc, musicas = []) {
        super(id, nome, duracao);
        this._musicas = [];
        if (!upc || !/^\d{12}$/.test(upc))
            throw new Error("UPC inválido. O UPC deve conter exatamente 12 digitos númericos.");
        this._upc = upc;
        this._musicas = musicas;
    }
    get upc() {
        return this._upc;
    }
    set upc(upc) {
        if (!upc || !/^\d{12}$/.test(upc))
            throw new Error("UPC inválido. O UPC deve conter exatamente 12 digitos númericos.");
        this._upc = upc;
    }
    get musicas() {
        return this._musicas;
    }
    set musicas(musicas) {
        this._musicas = musicas;
    }
    adicionarMusica(musica) {
        const verificarId = this._musicas.find(elemento => elemento.id === musica.id);
        if (verificarId)
            throw new Error(`Música com ID ${musica.id} já existe. Não é possivel adicionar uma nova música com o mesmo ID.`);
        this._musicas.push(musica);
    }
    removerMusica(musica) {
        const verificarId = this._musicas.find(elemento => elemento.id === musica.id);
        if (!verificarId)
            throw new Error(`Música com ID ${musica.id} não está presente no albúm. Não foi possível excluir a música do albúm.`);
        this._musicas = this._musicas.filter((elemento) => elemento.id !== musica.id);
    }
    duracaoEmUnidades() {
        return `${this.duracao} segundos`;
    }
    toString() {
        return (`Albúm:\n` +
            `${super.toString()}\n` +
            `UPC: ${this._upc}\n` +
            `Músicas:\n` +
            (this._musicas.length === 0 ?
                `Não há músicas.\n` :
                `---------------------\n` +
                    `${this._musicas.map(musica => musica.toString()).join("\n")}` +
                    `---------------------\n`));
    }
}
exports.default = Album;
//# sourceMappingURL=Album.js.map