"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Album_1 = __importDefault(require("../models/Album"));
const Musica_1 = __importDefault(require("../models/Musica"));
function fetchDeezerAlbunsMusicas(idAlbuns) {
    // Mapeia cada ID de álbum para uma promessa
    const albumPromises = idAlbuns.map(id => {
        console.log(`Buscando álbum com ID ${id}`);
        // Fetch do álbum
        return fetch(`https://api.deezer.com/album/${id}`)
            .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao buscar álbum com ID ${id}: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
            .then(albumData => {
            if (albumData.error) {
                throw new Error(`Erro ao buscar álbum com ID ${id}: ${albumData.error.message}`);
            }
            console.log(`Dados do álbum recebidos:`, albumData);
            const album = new Album_1.default(albumData.id, albumData.title, albumData.duration, albumData.upc);
            // Fetch das músicas
            console.log(`Buscando faixas para o álbum ID ${id}`);
            return fetch(`https://api.deezer.com/album/${id}/tracks`)
                .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao buscar músicas do álbum com ID ${id}: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
                .then(musicasData => {
                if (musicasData.error) {
                    throw new Error(`Erro ao buscar músicas do álbum com ID ${id}: ${musicasData.error.message}`);
                }
                console.log(`Dados das faixas recebidos:`, musicasData);
                const musicas = musicasData.data.map((musica) => {
                    const novaMusica = new Musica_1.default(musica.id, musica.title, musica.duration, musica.isrc);
                    album.adicionarMusica(novaMusica);
                    return novaMusica;
                });
                // Retorna o álbum e suas músicas
                return [album, ...musicas];
            });
        });
    });
    // Processa todas as promessas de álbuns
    return Promise.all(albumPromises)
        .then(resultados => {
        console.log(`Todos os itens recebidos (álbuns e músicas):`, resultados);
        return resultados.flat(); // Achata o array de arrays
    })
        .catch(error => {
        console.error('Erro ao processar álbuns e músicas:', error);
        throw error;
    });
}
exports.default = fetchDeezerAlbunsMusicas;
//# sourceMappingURL=ApiService.js.map