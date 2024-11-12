
// soma(5, 8);
// soma(1, 12);
// soma(53, 7);

function calcularMedia(n1,n2,n3){
    const media = (n1 + n2 + n3) / 3;
    console.log(`A média é: ${media}`);
    return media;
}

const mediaAluno = calcularMedia(6, 8, 9);
console.log(`A média do aluno é ${mediaAluno}`);

if(mediaAluno < 7){
    console.log("Reprovado");
}else{
    console.log("aprovakdo");
}


function obterDiaSemana(dia){
    switch(dia){
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-Feira";        
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";      
    }
}
console.log(obterDiaSemana(4));
console.log(obterDiaSemana(9));

//funçoes com parametros
//funções sem Parametros
//Funçoes com retorno
//Funçoes sem retorno

function calcularIMC(peso, altura){

    return peso / (altura**2)

}

const imc1 = calcularIMC(70);
console.log(imc1);
const imc2 = calcularIMC(70, 1.8);
console.log(imc2);

function despedir(nome) {
console.log(`Até logo, ${nome}!`)
}


function despedir (nome = "Amigo(a)"){
console.log(`Até logo,${nome}!`);
}
despedir();
despedir("Gabriel");

function calcularAreaCirculo(raio){
return 3.14 *(raio ** 2);
}

console.log(calcularAreaCirculo(17)); //NaN
console.log(calcularAreaCirculo())

// função Anonima //geralmente c callback
function subtrair (n1, n2)  {
    return n1 - n2;
}

const somar = function (n1, n2){
    return n1 + n2;
}

console.log(subtrair(10, 5));
console.log(somar(10, 5));

// callback - funçao passada como entrada da outra funçao

function calcular(operacao, n1, n2){
    return operacao(n1, n2);
}

calcular(function(n1, n2){return n1 + n2}, 12, 8);

// server.get("/", function(req, res, netx)){
    
// }

const numeros = [3, 6, 4, 1, 7];
numeros.forEach(function(n) {
 console.log(n);
})

//arrow functions - funcoes de seta -> funcao anonima
const funcaoSemSeta = function() {}
const funcaoComSeta = () => {}

console.log("*********************")

numeros.forEach(n => console.log(n));

const ola = () => console.log("Olá!");
ola();

function potencia(base, expo){
    return base**expo;
}

const potenciaArrow = (base, expo) => base**expo;

console.log(potencia(3, 4));
console.log(potenciaArrow(3,4));