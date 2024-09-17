import Album from "../models/Album";
import Musica from "../models/Musica";
import IPesquisavel from "../models/IPesquisavel";

function fetchDeezerAlbunsMusicas(idAlbuns: number[]): Promise<IPesquisavel[]> {
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

                const album = new Album(albumData.id, albumData.title, albumData.duration, albumData.upc);

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

                        const musicas: Musica[] = musicasData.data.map((musica: any) => {
                            const novaMusica = new Musica(musica.id, musica.title, musica.duration, musica.isrc);
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

export default fetchDeezerAlbunsMusicas;