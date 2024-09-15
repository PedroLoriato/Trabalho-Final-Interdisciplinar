    import IPesquisavel from "./IPesquisavel";

    class Musica implements IPesquisavel {
        _nome: string;
        _duracao: number;

        constructor( nome: string, duracao: number) {
            this._nome = nome;
            this._duracao = duracao;
        }

        get nome(): string {
            return this._nome;
        }
        set nome(value: string) {
            this._nome = value;
        }

        get duracao(): number {
            return this._duracao;
        }
        set duracao(value: number) {
            this._duracao = value;
        }

        pesquisarPorCriterio(criterio: string): boolean {
            return this._nome.toLowerCase().includes(criterio.toLowerCase());
        }

        toString(): string {
            return `Musica:\n Nome: ${this._nome}\n Duração: ${this._duracao} segundos`;
        }
    }   

    export default Musica;