import CatalogoPesquisavel from "../model/CatalogoPesquisavel";
import IPesquisavel from "../model/IPesquisavel";
import Item from "../model/Item";

class Controller {
    private _catalogo: CatalogoPesquisavel;

    constructor(catalogo: CatalogoPesquisavel = fetchDeezer()) {
        this._catalogo = catalogo;
    }

    cadastrar(item: IPesquisavel): void {
        const verificarId = this._catalogo.find(elemento => (elemento as Item).id === (item as Item).id);
    
        if (verificarId) {
            throw new Error(`Item com ID ${(item as Item).id} já existe. Não é possível adicionar um novo item com o mesmo ID.`);
        }
        this._catalogo.push(item);
    }
}