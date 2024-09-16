interface IPesquisavel {
    atendeCriterio(criterio: string): boolean;
    toString(): string;
}

export default IPesquisavel;