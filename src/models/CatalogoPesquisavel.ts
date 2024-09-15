import IPesquisavel from "./IPesquisavel";

class CatalogoPesquisavel {
    _itens: IPesquisavel[] = [];

    constructor(itens: IPesquisavel[] = []) {
        this._itens = itens;
    }

    adicionar(item: IPesquisavel): void {
        this._itens.push(item);
    }

    remover(id: number): void {
        this._itens = this._itens.filter(item => {
            if ('id' in item) {
                return item.id !== id;
            } else {
                throw new Error('Id não encontrado!');
            }
        });
    }

    listar(): void {
        console.log(this.toString());
    }

    pesquisarPorCriterio(criterio: string): IPesquisavel[] {
        const resultado = this._itens.filter(item => item.pesquisarPorCriterio(criterio));

        if (resultado.length === 0) {
            throw new Error("Nenhum item correspondente ao critério!")
        }
        return resultado;
    }

    toString(): string {
        return `Catalogo Pesquisável:\n ${this._itens.map(item => item.toString()).join('\n\n')}`;
    }    
}

export default CatalogoPesquisavel;