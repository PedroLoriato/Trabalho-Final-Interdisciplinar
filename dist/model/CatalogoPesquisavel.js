"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatalogoPesquisavel {
    constructor(itens = []) {
        this._itens = [];
        this._itens = itens;
    }
    adicionar(item) {
        this._itens.push(item);
    }
    remover(id) {
        this._itens = this._itens.filter(item => {
            if ('id' in item) {
                return item.id !== id;
            }
            else {
                throw new Error('Id não encontrado!');
            }
        });
    }
    pesquisarPorCriterio(criterio) {
        if (!this._itens.some(item => item.pesquisarPorCriterio(criterio))) {
            throw new Error("Nenhum item encontrado!");
        }
        return this._itens.filter(item => item.pesquisarPorCriterio(criterio));
    }
}
exports.default = CatalogoPesquisavel;
//# sourceMappingURL=CatalogoPesquisavel.js.map