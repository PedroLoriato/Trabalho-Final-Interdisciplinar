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
    listar() {
        console.log(this.toString());
    }
    pesquisarPorCriterio(criterio) {
        const resultado = this._itens.filter(item => item.pesquisarPorCriterio(criterio));
        if (resultado.length === 0) {
            throw new Error("Nenhum item correspondente ao critério!");
        }
        return resultado;
    }
    toString() {
        return `Catalogo Pesquisável:\n ${this._itens.map(item => item.toString()).join('\n\n')}`;
    }
}
exports.default = CatalogoPesquisavel;
//# sourceMappingURL=CatalogoPesquisavel.js.map