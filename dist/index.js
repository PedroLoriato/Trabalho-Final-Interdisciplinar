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
    }
    catch (error) {
        console.error("Erro:", error);
    }
}
// Execute a função da aplicação
aplicacao();
//# sourceMappingURL=index.js.map