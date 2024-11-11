// bibliotecas / modulos

import { dividir, multiplicar as multi, somar, } from "./calculadora.js"; 
import calculadora from"./calculadora.js"

// Math => tan, sin, cos
console.log(Math.sqrt(121))// sqare root
console.log(Math.ceil(4.4)) // arrendonda pra cima
console.log(Math.floor(4.4))// arrendonda pra baixo
console.log(Math.ceil(100/3))
console.log(Math.round(4.4)) // Mais próximo
console.log(Math.cos(1.5708)) // cos 90
console.log(Math.pow(6,3)) // 216
console.log(Math.cbrt(64)) // cubic root
console.log(Math.abs(-9)) // valor absoluto
console.log(Math.random()) // aleatorio / randomico / pseudoaleatorio

const rand = Math.random()
console.log(Math.floor(rand*10))+1
console.log(Math.max(1, 6, 9, 3)) // 9
console.log(Math.min(1, 6, 9, 3)) // 1


console.log(multi(4, 5)) //20
console.log(dividir(21,3)) //7
console.log(somar(2,3))
console.log(dividir(6,2))
console.log(calculadora(23, 23))

// funcoes recursivas
//fatorial !5 = 5 * 4 * 3 * 2 * 1

function fatorial (numero) {
    if (numero == 1){
        return 1;
    } else{
        numero * fatorial(numero-1)
    }
}

console.log(fatorial(5))

console.log("**********************************")


