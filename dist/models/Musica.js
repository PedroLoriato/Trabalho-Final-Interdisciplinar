"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Musica extends Item_1.default {
    constructor(id, nome, duracao, isrc) {
        super(id, nome, duracao);
        if (!isrc || !/^[a-zA-Z0-9]{12}$/.test(isrc))
            throw new Error("ISRC inválido. O ISRC deve conter exatamente 12 caracteres alfanuméricos.");
        this._isrc = isrc;
    }
    get isrc() {
        return this._isrc;
    }
    set isrc(isrc) {
        if (!isrc || !/^[a-zA-Z0-9]{12}$/.test(isrc))
            throw new Error("ISRC inválido. O ISRC deve conter exatamente 12 caracteres alfanuméricos.");
        this._isrc = isrc;
    }
    toString() {
        return (`Música:\n` +
            `${super.toString()}\n` +
            `Duração: ${super.duracao} segundos\n` +
            `ISRC: ${this._isrc}\n`);
    }
}
exports.default = Musica;
//# sourceMappingURL=Musica.js.map