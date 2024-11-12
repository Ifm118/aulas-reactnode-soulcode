console.log("Há quanto HTML, tudo bem?")
console.log(document)
//DOM não é um recurso do node.js pois navega somente no navegador (html)
//document.getElementById() //busca pelo id
//document.getElementByTagName // busca pela tag
//document.getElementByClassName() // pela classe
//document.querySelector() // busca pelo seletor
//document.querySelectorAll() // busca pelo selector

// document.getElementById()

const titulo = document.getElementById("titulo")
console.log(titulo)

const paragrafos = document.getElementById("p")
console.log(paragrafos)

const itens = document.getElementById("item")
console.log(itens)

const titulo2 =document.querySelector("#titulo")
console.log(titulo2)

const itens2 = document.querySelector(".item")
console.log(itens2)

titulo2.innerHTML = "Javascript é <em>mel</em>"

const capa = document.querySelector("#capa")

setTimeout(() => {


    titulo2.style.color = "tomato"
    titulo2.style.fontFamily = "Arial"
    titulo2.style.backgroundColor = "black"
         
    capa.style.border = "5px dashed purple"
    capa.src = "https://images.unsplash.com/photo-1725994390784-1ab5232a387d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
}, 3000)

const msg = document.querySelector("#msg")

setTimeout(() => {
    msg.classList.add("erro")
    msg.innerHTML="Algo deu errado"
}, 2000)

setTimeout(() => {
    msg.classList.remove("erro")
    msg.classList.add("ok")
    msg.innerHTML="Agora está tudo OK!"
}, 4000)

