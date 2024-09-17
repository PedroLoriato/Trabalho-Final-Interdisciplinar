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
    adicionar(item) {
        const verificarId = this._itens.find(elemento => elemento.id === item.id);
        if (verificarId)
            throw new Error(`Item com ID ${item.id} já existe. Não é possível adicionar um novo item com o mesmo ID.`);
        this._itens.push(item);
        console.log(`Item ${item.nome} adicionado com sucesso!`);
    }
    remover(id) {
        const verificarId = this._itens.find(elemento => elemento.id === id);
        if (!verificarId)
            throw new Error(`Item com ID ${id} não está presente no catálogo. Não foi possível remover o item do catálogo.`);
        this._itens = this._itens.filter((elemento) => elemento.id !== id);
        console.log(`Item com ID ${id} removido com sucesso!`);
    }
    listar() {
        if (this._itens.length === 0)
            throw new Error("Não existe itens no catálogo.");
        return this.toString();
    }
    pesquisarPorCriterio(criterio) {
        const resultados = this._itens.filter((elemento) => elemento.atendeCriterio(criterio));
        if (resultados.length === 0) {
            throw new Error(`Nenhum item encontrado para o critério: ${criterio}`);
        }
        return resultados;
    }
    toString() {
        return (this._itens.map(item => item.toString()).join("\n"));
    }
}
exports.default = CatalogoPesquisavel;
//# sourceMappingURL=CatalogoPesquisavel.js.map