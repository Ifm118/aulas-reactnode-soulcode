// 1. Considerando as variáveos x = 7 e y = 8, crie um código que mostre:
// A soma dos números.
// A diferença entre os números.
// A multiplicação dos números.
// A divisão dos números.
// Dica: Utilize os operadores +, -, * e /.

let x = 10; // ou o valor que você precisa para x
let y = 20; // ou o valor que você precisa para y
console.log("x = ", x, "y =", y);
console.log("Soma:",x+y);
console.log("Subtração: ", x - y);
console.log("Multiplicação", x * y);
console.log("Divisão ", x / y);
console.log("Exponenciação: ", x ** y);



// 2. Dado o valor let x = 10, utilize operadores de atribuição para modificar e exibir o valor de x da seguinte forma:
// Adicione 5 a x.
// Subtraia 3 de x.
// Multiplique x por 2.
// Divida x por 4.
// Dica: Utilize operadores como +=, -=, *=, e /=.

x=10;
x += 5;
x -= 3;
x *= 2;
x /= 4;

console.log("X = ", x);


// 3. Escreva um código que tenha duas strings e verifica:
// Se as duas strings são iguais (utilizando ==).
// Se as duas strings são diferentes (utilizando !=).

const text1 = "Java";
const text2 = "Javascript";
const iguais = text1 == text2;
const diferentes = text1 !== text2;
console.log("palavra 1 : ", text1)
console.log("palavra 2 : ", text2)
console.log("são iguais?  ", iguais)
console.log("São diferentes : ", diferentes)



// 4. Escreva um código que tenha dois numeros e verifica:
// Se o primeiro numero é maior que o segundo.
// Se o primeiro numero é menor ou igual ao segundo.

let a = 10;
let b =11;
console.log("a =", a);
console.log("b =", b);
console.log("a é maior que b ? ", a > b);
console.log("a é menor ou igual que b ? ", a <= b);
console.log("a é par? ", a % 2);


// 5. Crie um código que tenha três valores booleanos e mostre:
// A conjunção de todos eles.
// A disjunção de todos eles.
// A negação da disjunção de todos eles.
// Utilize os operadores lógicos &&, || e !