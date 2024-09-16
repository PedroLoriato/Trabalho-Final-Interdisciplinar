import IPesquisavel from "./IPesquisavel";

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
    }

    public remover(id: number): void {
    }

    public listar(): void {
    }

    public pesquisarPorCriterio(criterio: string): boolean {
        return true;
    }

    public toString(): string {
        return this._itens.map(item => item.toString()).join("\n\n");
    }
}

export default CatalogoPesquisavel;