//1
import { soma, multiplica } from "./operacoes.js";

//2
import {subtrai} from "./math.js";
import divide from "./math.js"
// resposta 1
console.log(soma(4,4))
console.log(multiplica(4,4))

//resposta2
console.log(subtrai(8,5))
console.log(divide(8,4))

// resposta 3 

const vetor1 = [2, 4, 6, 8]
const vetor2 = [1, 3, 5, 7]


function combinarVetores (v1, v2){
    return[...v1, ...v2];
}

const vetorCombinado = combinarVetores(vetor1, vetor2)

console.log("Vetor combinado: ", vetorCombinado);

//resposta 4

const usuario = {
    nome: "Igor",
    idade: 31,
    email: "igor.froes@soulasalle.com.br"
};

const usuarioCompleto = {
    ...usuario,
    telefone: "2198489-9386"
};

console.log("Objeto usuario: ", usuario)
console.log("Objeto usuario completo: ", usuarioCompleto)


//resposta 5

const livro = {
    titulo: "Dom quixote",
    autor: "Miguel de Cervantes",
    ano: 1605,
    genero: "Romance "
}

const { titulo, autor} = livro;

console.log("Titulo do livro: ", titulo);
console.log("Autor do livro: ", autor)