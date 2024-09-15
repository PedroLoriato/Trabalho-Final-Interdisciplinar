import Controller from "./controller/Controller";
import fetchDeezerTracks from "./api/ApiMusica";
import CatalogoPesquisavel from "./models/CatalogoPesquisavel";
import Musica from "./models/Musica";

async function iniciarAplicacao() {
    try {
        const musicas = await fetchDeezerTracks(); // Aguarda a resolução da Promise
        const catalogo = new CatalogoPesquisavel(musicas); // 
        const controller = new Controller(catalogo); // Passa as músicas para o controlador

        const novaMusica = new Musica("darkerside",174)

        controller.cadastrar(novaMusica);

        console.log(controller.pesquisarPorCriterio("dark"));
    } catch (error: any) {
        console.error(error);
    }
}

// Inicia a aplicação
iniciarAplicacao();