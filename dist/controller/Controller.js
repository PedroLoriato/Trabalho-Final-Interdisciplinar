"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(catalogo) {
        this._catalogo = catalogo;
    }
    cadastrar(item) {
        this._catalogo.adicionar(item);
    }
    remover(id) {
        this._catalogo.remover(id);
    }
    listar() {
        this._catalogo.listar();
    }
    pesquisarPorCriterio(criterio) {
        return this._catalogo.pesquisarPorCriterio(criterio);
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map