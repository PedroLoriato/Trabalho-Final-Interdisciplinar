"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Album_1 = __importDefault(require("../models/Album"));
const Musica_1 = __importDefault(require("../models/Musica"));
const CatalogoPesquisavel_1 = __importDefault(require("../models/CatalogoPesquisavel"));
const ApiService_1 = __importDefault(require("../api/ApiService"));
class Controller {
    constructor(catalogo = new CatalogoPesquisavel_1.default()) {
        this._catalogo = new CatalogoPesquisavel_1.default();
        this._catalogo = catalogo;
    }
    // Método para carregar os dados da API no catalogo
    async carregarDadosApiCatalogo() {
        return (0, ApiService_1.default)([298492162, 600209182])
            .then(albuns => {
            albuns.forEach(item => this._catalogo.adicionar(item));
            console.log('Catálogo carregado com sucesso!');
        })
            .catch(error => {
            throw error;
        });
    }
    cadastrar(item) {
        this._catalogo.adicionar(item);
    }
    remover(id) {
        this._catalogo.remover(id);
    }
    listar() {
        return this._catalogo.listar();
    }
    // Método para adicionar uma música a um álbum com verificação de duplicidade e existência no catálogo
    adicionarMusicaAoAlbum(albumId, musica) {
        // Verifica se a música está cadastrada no catálogo
        const musicaCadastrada = this._catalogo.itens.find(item => item instanceof Musica_1.default && item.id === musica.id);
        if (!musicaCadastrada) {
            throw new Error(`A música com ID ${musica.id} não está cadastrada no catálogo. Por favor, cadastre a música ao catálogo antes de adicioná-la a um álbum.`);
        }
        // Verifica se a música já está presente em algum outro álbum no catálogo
        const albumComMusica = this._catalogo.itens.find(item => item instanceof Album_1.default && item.musicas.some(m => m.id === musica.id));
        if (albumComMusica) {
            throw new Error(`A música com ID ${musica.id} já está presente no álbum "${albumComMusica.nome}". Não é possível adicionar a mesma música em outro álbum.`);
        }
        // Caso não esteja, procura o álbum pelo ID e adiciona a música
        const album = this._catalogo.itens.find(item => item instanceof Album_1.default && item.id === albumId);
        if (!album) {
            throw new Error(`Álbum com ID ${albumId} não encontrado.`);
        }
        album.adicionarMusica(musica);
        console.log(`Música ${musica.nome} adicionada ao álbum ${album.nome}`);
    }
    removerMusicaDoAlbum(albumId, musicaId) {
        const album = this._catalogo.itens.find(item => item instanceof Album_1.default && item.id === albumId);
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
    pesquisarPorCriterio(criterio) {
        return this._catalogo.pesquisarPorCriterio(criterio);
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map