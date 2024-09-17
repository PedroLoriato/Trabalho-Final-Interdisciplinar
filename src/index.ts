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
        await controller.inicializaCatalogo();

        // Listagem com somente os dados da api
        console.log(controller.listar());

        // Busca por um critério de substring no catálogo
        console.log(controller.pesquisarPorCriterio("Life").toString());

        // Cadastramento de novos itens ao catálogo pesquisável
        controller.cadastrar(novoAlbum);
        controller.cadastrar(novaMusica);

        // Adicionando uma música cadastrada no catálogo em um albúm
        controller.adicionarMusicaAoAlbum(1, novaMusica);
        console.log(controller.listar());

        // Removendo a música adicionada em um albúm
        controller.removerMusicaDoAlbum(1, 11);
        console.log(controller.listar());

        // Remoção do albúm cadastrado no catálogo
        controller.remover(1);
        console.log(controller.listar());
    } catch (error: any) {
        console.error("Erro:", error);
    }
}

// Execute a função da aplicação
aplicacao();