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
        if (verificarId) 
            throw new Error(`Item com ID ${(item as Item).id} já existe. Não é possível adicionar um novo item com o mesmo ID.`);

        this._itens.push(item);
        console.log(`Item ${(item as Item).nome} adicionado com sucesso!`);
    }
    
    public remover(id: number): void {
        const verificarId = this._itens.find(elemento => (elemento as Item).id === id);
        if (!verificarId)
            throw new Error(`Item com ID ${id} não está presente no catálogo. Não foi possível remover o item do catálogo.`);

        this._itens = this._itens.filter((elemento) => (elemento as Item).id !== id);
        console.log(`Item com ID ${id} removido com sucesso!`);
    }

    public listar(): string {
        if (this._itens.length === 0)
            throw new Error("Não existe itens no catálogo.");

        return this.toString();
    }

    public pesquisarPorCriterio(criterio: string): IPesquisavel[] {
        const resultados = this._itens.filter((elemento) => elemento.atendeCriterio(criterio));

        if (resultados.length === 0) {
            throw new Error(`Nenhum item encontrado para o critério: ${criterio}`);
        }
        return resultados;
    }

    public toString(): string {
        return (this._itens.map(item => item.toString()).join("\n"));
    }
}

export default CatalogoPesquisavel;