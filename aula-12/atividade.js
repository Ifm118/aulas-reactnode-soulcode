//1

let numeros = [12, 90, 22, 17, 56, 49, 46, 34, 10];
let i = 0;
let tamanho = numeros.length;
let soma = 0; 

while (i < tamanho){
    soma += numeros[i];
    i++;
}

console.log("Soma", soma);

console.log("*******************************************")

// 2 

// let index = 0;
// let pares = []


// 3

let supermercado = ["Pães", "Leite", "Papel Higienico", "Ração de cachorro", "Sabão", "Arroz"];
for(let item of supermercado){
    console.log("Item", item);
}


// 4 

let multiplicador = 3;
let fatores = [5, 9, 12, 17, 50, 38, 42, 71];
let resultados = [];
for(let fator of fatores){
    resultados.push(fator * multiplicador)
}
console.log(resultados);
// 5

// const profs = ["Adriano", "Almir", "Gabriel"];
// // profs=["Igor", "Bismark", "José"];
// profs.push("Igor")
// console.log(profs);

let numeros1 = [45, 676, 23, 98, 17, 90, 56, 94, 123];
let maior =[];
for(let numero1 of numeros1){
    if(maior < numero1){
        maior = numero1;
    }

}
console.log("Maior", maior);