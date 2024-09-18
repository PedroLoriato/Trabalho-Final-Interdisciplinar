"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./controller/Controller"));
const Album_1 = __importDefault(require("./models/Album"));
const Musica_1 = __importDefault(require("./models/Musica"));
const Filme_1 = __importDefault(require("./models/Filme"));
async function aplicacao() {
    try {
        // Inicialização do controlador
        const controller = new Controller_1.default();
        // Criacão de Instâncias de Album e Música 
        const novoAlbum = new Album_1.default(1, "Life", 300, "234567890867");
        const novaMusica = new Musica_1.default(11, "Oceano", 230, "ISRC12345678");
        // Criação de uma nova instância da classe filme para testar os princípios SOLID
        const novoFilme = new Filme_1.default(12, "Piratas do Caribe", 120, "Estados Unidos");
        // Inicialização dos dados da api no catálogo
        await controller.carregarDadosApiCatalogo();
        // Listagem com somente os dados da api
        console.log(controller.listar());
        // Cadastro de novos itens ao catálogo pesquisável
        controller.cadastrar(novoAlbum);
        controller.cadastrar(novaMusica);
        // Cadastro de um novo filme ao catálogo pesquisável
        controller.cadastrar(novoFilme);
        // Adição de uma música cadastrada no catálogo em um albúm
        controller.adicionarMusicaAlbum(1, novaMusica);
        // Remoção de uma música adicionada em um albúm
        controller.removerMusicaAlbum(1, 11);
        // Remoção do albúm cadastrado no catálogo
        controller.remover(1);
        // Listagem com os dados atualizados
        console.log(controller.listar());
        // Busca por um critério de substring no catálogo
        const busca = controller.pesquisarPorCriterio("mr");
        // Listagem com os dados da busca
        console.log(controller.listar(busca));
    }
    catch (error) {
        console.error("Erro:", error);
    }
}
// Execute a função da aplicação
aplicacao();
//# sourceMappingURL=index.js.map