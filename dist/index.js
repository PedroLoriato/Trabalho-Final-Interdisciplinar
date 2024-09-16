"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./controller/Controller"));
const ApiMusica_1 = __importDefault(require("./api/ApiMusica"));
const CatalogoPesquisavel_1 = __importDefault(require("./models/CatalogoPesquisavel"));
const Musica_1 = __importDefault(require("./models/Musica"));
function iniciarAplicacao() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const musicas = yield (0, ApiMusica_1.default)(); // Aguarda a resolução da Promise
            const catalogo = new CatalogoPesquisavel_1.default(musicas); // Inicializa o catalogo com as musicas
            const controller = new Controller_1.default(catalogo); // Inicializa o controller com o catalogo
            const novaMusica = new Musica_1.default("darkerside", 174);
            novaMusica.toString();
            controller.cadastrar(novaMusica);
            console.log(controller.pesquisarPorCriterio("dark").toString());
        }
        catch (error) {
            console.error(error);
        }
    });
}
// Inicia a aplicação
iniciarAplicacao();
//# sourceMappingURL=index.js.map