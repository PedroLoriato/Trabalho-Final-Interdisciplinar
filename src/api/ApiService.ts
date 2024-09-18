import Album from "../models/Album";
import Musica from "../models/Musica";
import IPesquisavel from "../models/IPesquisavel";

// Função para buscar dados de um álbum pelo ID
const getAlbum = async (id: number): Promise<Album> => {
    console.log(`Buscando álbum com ID ${id}`);

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
            return new Album(albumData.id, albumData.title, albumData.duration, albumData.upc);
        })
        .catch(error => {
            throw error;
        });
};

// Função para buscar as músicas de um álbum pelo ID
const getMusicas = async (albumId: number): Promise<Musica[]> => {
    console.log(`Buscando faixas para o álbum ID ${albumId}`);

    return fetch(`https://api.deezer.com/album/${albumId}/tracks`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao buscar músicas do álbum com ID ${albumId}: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(musicasData => {
            if (musicasData.error) {
                throw new Error(`Erro ao buscar músicas do álbum com ID ${albumId}: ${musicasData.error.message}`);
            }
            console.log(`Dados das faixas recebidos:`, musicasData);

            return musicasData.data.map((musica: any) => {
                return new Musica(musica.id, musica.title, musica.duration, musica.isrc);
            });
        })
        .catch(error => {
            throw error;
        });
};

// Função principal para buscar os álbuns e suas músicas
const buscarDeezerAlbunsMusicas = async (idAlbuns: number[]): Promise<IPesquisavel[]> => {
    const resultados: IPesquisavel[] = []; // Array que conterá álbuns e músicas

    // Mapeia cada ID de álbum para uma promessa que busca o álbum e suas músicas
    const albumPromises = idAlbuns.map(async id => {
        try {
            const album = await getAlbum(id);
            const musicas = await getMusicas(id);

            // Adiciona as músicas ao álbum
            musicas.forEach(musica => album.adicionarMusica(musica));

            // Adiciona o álbum e as músicas diretamente ao array de resultados
            resultados.push(album, ...musicas);
        } catch (error) {
            console.error(`Erro ao processar o álbum com ID ${id}:`, error);
        }
    });

    // Espera todas as promessas serem resolvidas ou alguma ser rejeitada.
    await Promise.all(albumPromises);
    console.log(`Todos os itens recebidos (álbuns e músicas):`, resultados);
    return resultados;
};
export default buscarDeezerAlbunsMusicas;