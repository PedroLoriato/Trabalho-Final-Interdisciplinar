import Musica from '../models/Musica';

async function fetchDeezerTracks(): Promise<Musica[]> {
    return fetch('https://api.deezer.com/album/302127/tracks')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            // Usa map para transformar cada item da lista em uma instância de Musica
            const listaMusica = data.data.map((musica: any) => {
                const novaMusica = new Musica(musica.title, musica.duration);
                return novaMusica;
            });
            return listaMusica; // Retorna a lista de Musica
        })
        .catch(error => {
            console.error('Erro:', error);
            throw new Error('Não foi possivel realizar a requisição.' + error.message);
        });
}

export default fetchDeezerTracks;