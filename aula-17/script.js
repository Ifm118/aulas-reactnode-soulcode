// programação Assíncrona() => Funcoes executando de forma PAralelas

console.log("Antes")
setTimeout(() => {
    console.log("Atrasado")
}, 2000)

console.log("Depois")

console.log("*********************")

let a = 2
a++;
setTimeout(() => ++a, 1000)

console.log(a)

// async e await
//promise = promessa (instruções que executam de forma assincrona)


// axios.get("https://api.github.com/users/gabriel-soulcode").then(resposta => {
//     console.log(resposta);
// });

async function buscarDadosGithub() {
   const resposta = await axios.get("https://api.github.com/users/gabriel-soulcode")
   console.log(resposta)
}

buscarDadosGithub()

console.log("Depois da requisão")