import Album from "./model/Album";
import Musica from "./model/Musica"

const vetMusicas = [new Musica (1, "Song 1", 12345, "123456789098"), new Musica (2, "Song 2", 11111, "098765432112")];

const album = new Album(3, "Album 1", 123456, "111111111111", vetMusicas);

const musica = new Musica (4, "Song 4", 22222, "456789023145");

console.log(vetMusicas.toString());
console.log(album.toString());
// vetMusicas.push(new Musica (5, "Song 5", 22222, "123"));

album.adicionarMusica(musica);
console.log(album.toString());

album.removerMusica(musica);
console.log(album.toString());

// album.adicionarMusica(vetMusicas[0]);
// console.log(album.toString());

// album.removerMusica(musica);
// console.log(album.toString());

