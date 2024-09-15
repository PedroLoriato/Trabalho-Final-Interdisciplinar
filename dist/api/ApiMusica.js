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
const Musica_1 = __importDefault(require("../models/Musica"));
function fetchDeezerTracks() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch('https://api.deezer.com/album/302127/tracks')
            .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
            .then(data => {
            // Usa map para transformar cada item da lista em uma instância de Musica
            const listaMusica = data.data.map((musica) => {
                const novaMusica = new Musica_1.default(musica.title, musica.duration);
                return novaMusica;
            });
            return listaMusica; // Retorna a lista de Musica
        })
            .catch(error => {
            console.error('Erro:', error);
            throw error;
        });
    });
}
exports.default = fetchDeezerTracks;
//# sourceMappingURL=ApiMusica.js.map