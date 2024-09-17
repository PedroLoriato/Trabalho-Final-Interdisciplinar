import Album from "../models/Album";
import Musica from "../models/Musica";
import IPesquisavel from "../models/IPesquisavel";

// Função para buscar dados de um álbum pelo ID
const getAlbum = async (id: number): Promise<Album> => {
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
    return new Album(albumData.id, albumData.title, albumData.duration, albumData.upc);
};

// Função para buscar as músicas de um álbum pelo ID
const getMusicas = async (albumId: number): Promise<Musica[]> => {
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

    return musicasData.data.map((musica: any) => {
        return new Musica(musica.id, musica.title, musica.duration, musica.isrc);
    });
};

// Função principal para buscar os álbuns e suas músicas
const buscarDeezerAlbunsMusicas = async (idAlbuns: number[]): Promise<IPesquisavel[]> => {
    // Mapeia cada ID de álbum para uma promessa que busca o álbum e suas músicas
    const albumPromises = idAlbuns.map(async id => {
        try {
            const album = await getAlbum(id);
            const musicas = await getMusicas(id);

            // Adiciona as músicas ao álbum
            musicas.forEach(musica => album.adicionarMusica(musica));

            // Retorna o álbum e suas músicas
            return [album, ...musicas];
        } catch (error) {
            console.error(`Erro ao processar o álbum com ID ${id}:`, error);
            throw error;
        }
    });

    // Processa todas as promessas de álbuns
    const resultados = await Promise.all(albumPromises);
    
    console.log(`Todos os itens recebidos (álbuns e músicas):`, resultados);
    
    return resultados.flat(); // Achata o array de arrays
};

export default buscarDeezerAlbunsMusicas;