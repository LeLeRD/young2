const corpo = document.getElementsByTagName('body')
const div = document.getElementById('area')




function clicar(){
    div.innerText = 'clicou'
    div.style.background = 'blue'

}

function entrar(){
    div.innerText = 'entrou'
    div.style.background = 'red'

}

function sair(){
    div.innerText = 'sair'
    div.style.background = 'yellow'
    div.style.fontSize = '100px'
}

function Sair(){
    div.innerText = '😭'

}

function dentro(){
    div.innerText = '😁'
}