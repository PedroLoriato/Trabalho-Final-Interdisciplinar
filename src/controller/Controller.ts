import CatalogoPesquisavel from "../models/CatalogoPesquisavel";
import IPesquisavel from "../models/IPesquisavel";

class Controller {
    private _catalogo: CatalogoPesquisavel;

    constructor(catalogo: CatalogoPesquisavel) {
        this._catalogo = catalogo;
    }

    cadastrar(item: IPesquisavel): void {
        this._catalogo.adicionar(item);
    }

    remover(id: number): void {
        this._catalogo.remover(id);
    }

    listar(): void {
        this._catalogo.listar();
    }

    pesquisarPorCriterio(criterio: string): IPesquisavel[] {
        return this._catalogo.pesquisarPorCriterio(criterio);
    }
}

export default Controller;