import IPesquisavel from "./IPesquisavel";
import Item from "./Item";

class CatalogoPesquisavel {
    private _itens: IPesquisavel[] = [];

    constructor(itens: IPesquisavel[] = []) {
        this._itens = itens;
    }

    public get itens(): IPesquisavel[] {
        return this._itens;
    }

    public set itens(itens: IPesquisavel[]) {
        this._itens = itens;
    }

    public adicionar(item: IPesquisavel): void {
        const verificarId = this._itens.find(elemento => (elemento as Item).id === (item as Item).id);
    
        if (verificarId) {
            throw new Error(`Item com ID ${(item as Item).id} já existe. Não é possível adicionar um novo item com o mesmo ID.`);
        }
        this._itens.push(item);
    }
    
    public remover(id: number): void {
        this._itens = this._itens.filter((elemento) => (elemento as Item).id !== id);
    }

    public listar(): void {
        this.toString()
    }

    public pesquisarPorCriterio(criterio: string): IPesquisavel[] {
        const resultados = this._itens.filter((elemento) => (elemento as Item).atendeCriterio(criterio));

        if (resultados.length === 0) {
            throw new Error(`Nenhum item encontrado para o critério: ${criterio}`);
        }
        return resultados;
    }

    public toString(): string {
        return this._itens.map(item => item.toString()).join("\n\n");
    }
}

export default CatalogoPesquisavel;