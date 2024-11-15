// criando DOM com display e todos botões

const display = document.getElementById("display")
const historico = document.getElementById('historico')

// criar as variáveis para armazenar os valores 

let entradaAtual = ''//   '' => é o espaço a armazenar o valor num
let entradaAnterior = ''
let operador = ''
let expressao = '' //para exibir expressao matematica completa na tela
let lastResultado = null // armazena ultimo resultado
let newExpressao = false // parar controlar o fluxo após clicar em "=" e evitar bug



// funções
function atualizarDisplay(valor){
    display.textContent = valor
}

function atualizarHistorico(valor){
    historico.textContent = valor
}

function clicarNum(numero){
    if(newExpressao){
        limparTela()
        newExpressao = false

    }

    entradaAtual += numero;
    expressao += numero
    atualizarDisplay(expressao)
}

function clicarOperacao(op){
    if(entradaAtual !== ''){
        if (entradaAnterior === '') {
            entradaAnterior = entradaAtual;  // Define entradaAnterior se ainda não existir
        }
        operador = op
        entradaAtual = ''
        expressao += '' + operador + ''
        atualizarDisplay(expressao)
        newExpressao = false // Não permite que a próxima operação seja sobre o resultado
    }
   
}

function limparTela(){
    entradaAtual = ''
    entradaAnterior = ''
    operador = ''
    expressao = ''
    lastResultado = null
    atualizarDisplay('0')
    atualizarHistorico('')

}

function clicarTotal(){
    if(entradaAnterior !== '' && entradaAtual !== ''){
        const num1 = parseFloat(entradaAnterior)
        const num2 = parseFloat(entradaAtual)

        switch(operador){
            case '+':
                resultado = num1 + num2
                break
            case '-':
                resultado = num1 - num2
                break
            case 'x':
                resultado = num1 * num2
                break
            case '÷':
                if(num2 == 0){
                    resultado = 'Erro'
                }else{
                    resultado = num1 / num2 
                }
                break
            default:
                resultado ='Erro'        
                        
        }
        //mostrar o historico da op e resultado
        const storyOperacao = `${expressao} = ${resultado}`
        atualizarHistorico(storyOperacao)
        atualizarDisplay(resultado)


        //resetando todas as variaveis
        entradaAtual = resultado.toString()
        entradaAnterior = ''
        operador = ''
        expressao = ''
        newExpressao = true
    }
}
