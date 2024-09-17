"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./controller/Controller"));
const Album_1 = __importDefault(require("./models/Album"));
const Musica_1 = __importDefault(require("./models/Musica"));
async function aplicacao() {
    try {
        // Inicialize o controlador
        const controller = new Controller_1.default();
        // 
        const novoAlbum = new Album_1.default(1, "Life", 300, "234567890867");
        const novaMusica = new Musica_1.default(11, "Oceano", 230, "ISRC12345678");
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
    }
    catch (error) {
        console.error("Erro:", error);
    }
}
// Execute a função da aplicação
aplicacao();
//# sourceMappingURL=index.js.map