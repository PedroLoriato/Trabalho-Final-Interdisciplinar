import Controller from "./controller/Controller";
import Album from "./models/Album";
import Musica from "./models/Musica";

async function aplicacao() {
    try {
        // Inicialize o controlador
        const controller = new Controller();

        // 
        const novoAlbum = new Album(1, "Life", 300, "234567890867");
        const novaMusica = new Musica(11, "Oceano", 230, "ISRC12345678");

        // Inicialização dos dados da api no catálogo
        await controller.carregarDadosApiCatalogo();

        // Listagem com somente os dados da api
        console.log(controller.listar());


        // Cadastramento de novos itens ao catálogo pesquisável
        controller.cadastrar(novoAlbum);
        controller.cadastrar(novaMusica);

        // Adicionando uma música cadastrada no catálogo em um albúm
        controller.adicionarMusicaAoAlbum(1, novaMusica);

        // Removendo a música adicionada em um albúm
        controller.removerMusicaDoAlbum(1, 11);

        // Remoção do albúm cadastrado no catálogo
        controller.remover(1);

        // Listagem com os dados atualizados
        console.log(controller.listar());

        // Busca por um critério de substring no catálogo
        console.log(controller.pesquisarPorCriterio("darker").toString());
    } catch (error: any) {
        console.error("Erro:", error);
    }
}

// Execute a função da aplicação
aplicacao();