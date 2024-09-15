"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Musica {
    constructor(nome, duracao) {
        this._nome = nome;
        this._duracao = duracao;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get duracao() {
        return this._duracao;
    }
    set duracao(value) {
        this._duracao = value;
    }
    pesquisarPorCriterio(criterio) {
        return this._nome.toLowerCase().includes(criterio.toLowerCase());
    }
    toString() {
        return `Musica:\n Nome: ${this._nome}\n Duração: ${this._duracao} segundos`;
    }
}
exports.default = Musica;
//# sourceMappingURL=Musica.js.map