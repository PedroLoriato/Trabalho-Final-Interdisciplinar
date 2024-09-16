interface IPesquisavel {
    pesquisarPorCriterio(criterio: string): boolean;
    toString(): string;
}

export default IPesquisavel;