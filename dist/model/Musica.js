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
        if (!this.nome.includes(criterio)) {
            throw new Error("Nome não contém o criterio");
        }
        return this;
    }
    toString() {
        return `${this._nome} - ${this._duracao}`;
    }
}
exports.default = Musica;
//# sourceMappingURL=Musica.js.map