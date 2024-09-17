import Album from "../models/Album";
import Musica from "../models/Musica";
import IPesquisavel from "../models/IPesquisavel";
import CatalogoPesquisavel from "../models/CatalogoPesquisavel";
import buscarDeezerAlbunsMusicas from "../api/ApiService";

class Controller {
    private _catalogo: CatalogoPesquisavel = new CatalogoPesquisavel();

    constructor(catalogo: CatalogoPesquisavel = new CatalogoPesquisavel()) {
        this._catalogo = catalogo;
    }

    // Método para carregar os dados da API no catalogo
    async carregarDadosApiCatalogo(): Promise<void> {
        return buscarDeezerAlbunsMusicas([298492162, 600209182])
            .then(albuns => {
                albuns.forEach(item => this._catalogo.adicionar(item));
                console.log('Catálogo carregado com sucesso!');
            })
            .catch(error => {
                throw error;
            });
    }

    cadastrar(item: IPesquisavel): void {
        this._catalogo.adicionar(item);
    }

    remover(id: number): void {
        this._catalogo.remover(id);
    }

    listar(): string {
        return this._catalogo.listar();
    }
    
    // Método para adicionar uma música a um álbum com verificação de duplicidade e existência no catálogo
    adicionarMusicaAlbum(albumId: number, musica: Musica): void {
        // Verifica se a música está cadastrada no catálogo
        const musicaCadastrada = this._catalogo.itens.find(item => item instanceof Musica && item.id === musica.id) as Musica;

        if (!musicaCadastrada) {
            throw new Error(`A música com ID ${musica.id} não está cadastrada no catálogo. Por favor, cadastre a música ao catálogo antes de adicioná-la a um álbum.`);
        }

        // Verifica se a música já está presente em algum outro álbum no catálogo
        const albumComMusica = this._catalogo.itens.find(item =>
            item instanceof Album && item.musicas.some(m => m.id === musica.id)
        ) as Album;

        if (albumComMusica) {
            throw new Error(`A música com ID ${musica.id} já está presente no álbum "${albumComMusica.nome}". Não é possível adicionar a mesma música em outro álbum.`);
        }

        // Caso não esteja, procura o álbum pelo ID e adiciona a música
        const album = this._catalogo.itens.find(item => item instanceof Album && item.id === albumId) as Album;
        if (!album) {
            throw new Error(`Álbum com ID ${albumId} não encontrado.`);
        }

        album.adicionarMusica(musica);
        console.log(`Música ${musica.nome} adicionada ao álbum ${album.nome}`);
    }


    removerMusicaAlbum(albumId: number, musicaId: number): void {
        const album = this._catalogo.itens.find(item => item instanceof Album && item.id === albumId) as Album;
        if (!album) {
            throw new Error(`Álbum com ID ${albumId} não encontrado.`);
        }
        const musica = album.musicas.find(m => m.id === musicaId);
        if (!musica) {
            throw new Error(`Música com ID ${musicaId} não encontrada no álbum.`);
        }
        album.removerMusica(musica);
        console.log(`Música ${musica.nome} removida do álbum ${album.nome}`);
    }

    pesquisarPorCriterio(criterio: string): IPesquisavel[] {
        return this._catalogo.pesquisarPorCriterio(criterio);
    }
}

export default Controller;