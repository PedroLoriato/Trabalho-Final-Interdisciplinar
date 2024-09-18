"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
// Classe Filme para testar os princípios SOLID
class Filme extends Item_1.default {
    constructor(id, nome, duracao, paisOrigem) {
        super(id, nome, duracao);
        if (!paisOrigem || paisOrigem.trim() === "")
            throw new Error("O país de origem é inválido. O nome do país de origem não pode estar vazio.");
        if (!/^[a-zA-Z\s]+$/.test(paisOrigem))
            throw new Error("O país de origem é inválido. O nome do país de origem só pode conter letras.");
        this._paisOrigem = paisOrigem;
    }
    get paisOrigem() {
        return this._paisOrigem;
    }
    set paisOrigem(paisOrigem) {
        if (!paisOrigem || paisOrigem.trim() === "")
            throw new Error("O país de origem é inválido. O nome do país de origem não pode estar vazio.");
        if (!/^[a-zA-Z]+$/.test(paisOrigem))
            throw new Error("O país de origem é inválido. O nome do país de origem só pode conter letras.");
        this._paisOrigem = paisOrigem;
    }
    duracaoEmUnidades() {
        return `${this.duracao} minutos`;
    }
    toString() {
        return (`Filme:\n` +
            `${super.toString()}\n` +
            `País de Origem: ${this._paisOrigem}\n`);
    }
}
exports.default = Filme;
//# sourceMappingURL=Filme.js.map