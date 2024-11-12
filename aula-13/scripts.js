const linguagem = "JavaScript";
console.log(linguagem[0]);

for(let letra of linguagem){
    console.log(letra);
}

console.log(linguagem);

console.log(linguagem.toLowerCase()); // minusculo 
console.log(linguagem.toUpperCase()); // MAIUSCULO
console.log(linguagem.endsWith("Script"));//true
console.log(linguagem.startsWith("java")); //false 
console.log(linguagem.includes("type")); // true
console.log(linguagem.indexOf("a")); // 1
console.log(linguagem.lastIndexOf("a")); // 3
console.log(linguagem.replace("Java", "Type")); // javascript  
console.log(linguagem.slice(2, 7)); // javascript -> vaScr

// const exEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

const nome = "Gabriel Braga";
const curso = "Full Stack";
console.log("Bem-vindo", nome, "ao curso", curso);
console.log(`Bem vindo ${nome} ao curso ${curso}`);// interpolar

const numero2 = 45;
const numero3 = 15;
console.log(`A soma de ${numero2} e ${numero3} é igual a ${numero2+numero3}` );

const pessoa = {
    nome: "Igor",
    dataNascimento: "00/00/0000",
    cpf: "000.000.000-00",
    altura: 1.75,
    corCabelo: "Castanho escuro"
};
console.log(pessoa);
console.log(pessoa.corCabelo);
console.log(pessoa["corCabelo"]);

console.log(pessoa.curso);// undefine
pessoa.curso = null;
console.log(pessoa.curso) // null

pessoa.email = "igor.froes@soulasalle.com.br"
pessoa.nome = "Igor Fróes"
console.log(pessoa);

delete pessoa.cpf; // apagar o cpf do objeto
console.log(pessoa);

let a1 = {nome: "joão"};
let a2 = a1;

a2.nome = "Maria";

console.log(a1, a2);