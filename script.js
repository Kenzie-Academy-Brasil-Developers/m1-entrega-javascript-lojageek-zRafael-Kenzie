let objeto = {
    imagem: '',
    nome: 1,
    valor: '',

}

let listFigure = [{
    imagem: "animewoman.jpg",
    nome: "garota de anime",
    valor: 110,
},
{
    imagem: "starwarspersonagem.jpg",
    nome: "Baby Yoda",
    valor: 130,
},
{
    imagem: "dragonballpersonagem.jpg",
    nome: "Goku Super Saiajyn",
    valor: 150,
}
]

let listPainting = [
    {
        imagem: "clock.jpg",
        nome: "Relogio",
        valor: 55,
    },
    {
        imagem: "gamepad.jpg",
        nome: "Gamepad",
        valor: 60,
    },
    {
        imagem: "personagem.jpg",
        nome: "Robo StarWars",
        valor: 70,
    }
]


function createActionItem(img, name, price) {

    objeto.imagem = img
    objeto.nome = name
    objeto.valor = price
    listFigure.push(objeto)
}

function createPaintingItem(img, name, price) {
    objeto.imagem = img
    objeto.nome = name
    objeto.valor = price
    listPainting.push(objeto)
}
let secaolistFigure    = document.getElementsByClassName('lista-de-figures')[0]
let secaolistPainting = document.getElementsByClassName('lista-de-paintings')[0]

function listarFigure(listFigure){
for(let i=0;i<listFigure.length;i++)
{
    let figure= listFigure[i]
    let cardFig =criarTemplateFigure(figure)
    secaolistFigure.appendChild(cardFig)
}

}
function listarPainting(listPainting){
    for(let i=0;i<listPainting.length;i++)
    {
        let painting= listPainting[i]
        let cardPaint =criarTemplatePainting(painting)
        secaolistPainting.appendChild(cardPaint)
        console.log(cardPaint)
    }
}
function criarTemplateFigure(figure){
    let name    =figure.nome
    let precos   =figure.valor
    let imagem  =figure.imagem

let li = document.createElement('li')
let img = document.createElement('img')
let nome = document.createElement('h2')
let preco =document.createElement('p')


img.src=`./assets/img/actions/${imagem}`
img.alt=`./assets/img/actions/${imagem}`
nome.innerText=name
preco.innerText= `R$ ${precos}`.replace(',','.')  

li.appendChild(img)
li.appendChild(nome)
li.appendChild(preco)

return li
}
function criarTemplatePainting(painting){
    let name    =painting.nome
    let precos   =painting.valor
    let imagem  =painting.imagem

let li = document.createElement('li')
let img = document.createElement('img')
let nome = document.createElement('h2')
let preco =document.createElement('p')


img.src=`./assets/img/painting/${imagem}`
img.alt=`./assets/img/painting/${imagem}`
nome.innerText=name
preco.innerText=`R$ ${precos}`.replace(',','.')    


li.appendChild(img)
li.appendChild(nome)
li.appendChild(preco)
console.log(painting)

return li
}
listarPainting(listPainting)
listarFigure(listFigure)