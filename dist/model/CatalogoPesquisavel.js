"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogoPesquisavel {
    constructor(itens = []) {
        this._itens = [];
        this._itens = itens;
    }
    get itens() {
        return this._itens;
    }
    set itens(itens) {
        this._itens = itens;
    }
    pesquisarPorCriterio(criterio) {
        return true;
    }
    toString() {
        return this._itens.map(item => item.toString()).join("\n\n");
    }
}
exports.default = CatalogoPesquisavel;
//# sourceMappingURL=CatalogoPesquisavel.js.map