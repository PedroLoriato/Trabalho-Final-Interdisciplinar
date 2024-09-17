"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Album_1 = __importDefault(require("../models/Album"));
const Musica_1 = __importDefault(require("../models/Musica"));
// Função para buscar dados de um álbum pelo ID
const getAlbum = async (id) => {
    console.log(`Buscando álbum com ID ${id}`);
    const response = await fetch(`https://api.deezer.com/album/${id}`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar álbum com ID ${id}: ${response.status} ${response.statusText}`);
    }
    const albumData = await response.json();
    if (albumData.error) {
        throw new Error(`Erro ao buscar álbum com ID ${id}: ${albumData.error.message}`);
    }
    console.log(`Dados do álbum recebidos:`, albumData);
    return new Album_1.default(albumData.id, albumData.title, albumData.duration, albumData.upc);
};
// Função para buscar as músicas de um álbum pelo ID
const getMusicas = async (albumId) => {
    console.log(`Buscando faixas para o álbum ID ${albumId}`);
    const response = await fetch(`https://api.deezer.com/album/${albumId}/tracks`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar músicas do álbum com ID ${albumId}: ${response.status} ${response.statusText}`);
    }
    const musicasData = await response.json();
    if (musicasData.error) {
        throw new Error(`Erro ao buscar músicas do álbum com ID ${albumId}: ${musicasData.error.message}`);
    }
    console.log(`Dados das faixas recebidos:`, musicasData);
    return musicasData.data.map((musica) => {
        return new Musica_1.default(musica.id, musica.title, musica.duration, musica.isrc);
    });
};
// Função principal para buscar os álbuns e suas músicas
const fetchDeezerAlbunsMusicas = async (idAlbuns) => {
    // Mapeia cada ID de álbum para uma promessa que busca o álbum e suas músicas
    const albumPromises = idAlbuns.map(async (id) => {
        try {
            const album = await getAlbum(id);
            const musicas = await getMusicas(id);
            // Adiciona as músicas ao álbum
            musicas.forEach(musica => album.adicionarMusica(musica));
            // Retorna o álbum e suas músicas
            return [album, ...musicas];
        }
        catch (error) {
            console.error(`Erro ao processar o álbum com ID ${id}:`, error);
            throw error;
        }
    });
    // Processa todas as promessas de álbuns
    const resultados = await Promise.all(albumPromises);
    console.log(`Todos os itens recebidos (álbuns e músicas):`, resultados);
    return resultados.flat(); // Achata o array de arrays
};
exports.default = fetchDeezerAlbunsMusicas;
//# sourceMappingURL=ApiService.js.map