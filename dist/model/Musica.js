"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Musica extends Item_1.default {
    constructor(id, nome, duracao, ISRC) {
        super(id, nome, duracao);
        if (!ISRC || !/^[a-zA-Z0-9]{12}$/.test(ISRC))
            throw new Error("ISRC inválido. O ISRC deve conter exatamente 12 caracteres alfanuméricos.");
        this._ISRC = ISRC;
    }
    get ISRC() {
        return this._ISRC;
    }
    set ISRC(ISRC) {
        if (!ISRC || !/^[a-zA-Z0-9]{12}$/.test(ISRC))
            throw new Error("ISRC inválido. O ISRC deve conter exatamente 12 caracteres alfanuméricos.");
        this._ISRC = ISRC;
    }
    toString() {
        return `${super.toString()}\nISRC: ${this._ISRC} \n`;
    }
}
exports.default = Musica;
//# sourceMappingURL=Musica.js.map