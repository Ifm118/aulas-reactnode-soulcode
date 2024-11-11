const pessoa = {
    nome: "Igor",
    idade: 30,
    cumprimentar: function(){ 
    console.log(`Olá meu nome é ${this.nome}` )
    }

}
console.log(pessoa)
pessoa.cumprimentar()

console.log("*************************")

// funções construtoras -> funcao que cria um novo objeto instancia
//programaçao orientada a objetos => Classe(representação)
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

const pessoa2 = new Pessoa("Daniel", 27);
console.log(pessoa2)

console.log("*************************")

//operador spread (espalhar)

const produto1 = {
    descricao: "Manga vermelha",
    preco: 2.5,
    categoria: "Frutas e Hortaliças"
}
const produto2 = {...produto1}; // copia propriedades do produto1 p produto2

produto1.descricao = "Manga Azul"

console.log(produto1.descricao)
console.log(produto2.descricao)

//desestruturação (Destruct)
const produto3 = {
    descricao:"SSD 521GB",
    preco: 400,
}

// const descricao = produto3.descricao (Ele nao copia outro objeto, somento dos atributos do proprio objeto)
const{descricao} = produto3
console.log(descricao) //SSD 512GB
// console.log(preco)


console.log("*************************")


const pessoa3 = {
    nome: "Estefane",
    endereço: {
        rua: "Rual Aqui perto",
        UF: "CE"
    }
}

const {nome, endereço: { rua, UF}} = pessoa3

console.log(nome)
console.log(rua)
console.log(UF)

// const {handleSubmit, registrer, formState: {erros}}

const venda = {
    cliente: "Bismark Araujo",
    data: "11/11/2024",
    nota: {
        codigo: "0498503485",
        tipo:"XML"
    }
}
const {cliente, nota:{codigo}} = venda
console.log("Cliente:", cliente)
console.log("Código de nota:", codigo)

console.log("*************************")

const nomes = ["Rodrigo", "Thiago", "Leonardo"]
const [primeiro, segundo, terceiro]= nomes
console.log(terceiro)
// console.log(quarto)

console.log("*************************")

const tarefas = [
    {desc: "Estudar Javascript"},
    {desc: "Academia"},
    {desc: "Sair com cachorro"},
]

const [{desc}] = tarefas;
// console.log(tarefas[0].desc)
console.log(desc)

const nomes2 = [...nomes] // copiar uma linha

console.log(nomes)
