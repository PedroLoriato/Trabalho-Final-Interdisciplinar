"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(id, nome, duracao) {
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
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get duracao() {
        return this._duracao;
    }
    set nome(nome) {
        if (!nome || nome.trim() === "")
            throw new Error("Nome inválido. O nome não pode estar vazio.");
        this._nome = nome;
    }
    set duracao(duracao) {
        if (!duracao || duracao <= 0)
            throw new Error("Duração inválida. A duração deve ser maior que zero.");
        this._duracao = duracao;
    }
    atendeCriterio(criterio) {
        return this._nome.toLowerCase().includes(criterio.toLowerCase());
    }
    toString() {
        return (`ID: ${this._id}\n` +
            `Nome: ${this._nome}\n` +
            `Duração: ${this.duracaoEmUnidades()}`);
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map