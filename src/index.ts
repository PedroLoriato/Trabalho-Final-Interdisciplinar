import Controller from "./controller/Controller";
import fetchDeezerTracks from "./api/ApiMusica";
import CatalogoPesquisavel from "./models/CatalogoPesquisavel";
import Musica from "./models/Musica";

async function iniciarAplicacao() {
    try {
        const musicas = await fetchDeezerTracks(); // Aguarda a resolução da Promise
        const catalogo = new CatalogoPesquisavel(musicas); // Inicializa o catalogo com as musicas
        const controller = new Controller(catalogo); // Inicializa o controller com o catalogo

        const novaMusica = new Musica("darkerside",174)
        novaMusica.toString();

        controller.cadastrar(novaMusica);

        console.log(controller.pesquisarPorCriterio("dark").toString());
    } catch (error: any) {
        console.error(error);
    }
}

// Inicia a aplicação
iniciarAplicacao();