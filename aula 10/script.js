const nome_INPUT = document.getElementById('nome_input')

const n1_INPUT = document.getElementById('n1_input')

const n2_INPUT = document.getElementById('n2_input')

const n3_INPUT = document.getElementById('n3_input')

const NOME_OUTPUT = document.getElementById('nome')

const MEDIA_OUTPUT = document.getElementById('media')

const STATUS_OUTPUT =document.getElementById('resultado')

FORMULARIO.addEventListener('submit',(e)=>{
e.preventDefault()
media()
console.log(media())
})
function media()
let nome=NOME_INPUT.value
let n1= parseInt(n1_INPUT.value)
let n2= parseInt(n2_INPUT.value)
let n3= parseInt(n3_INPUT.value)

localStorage.setItem('nome',nome)
localStorage.setItem('n1',n1)
localStorage.setItem('n2',n2)
localStorage.setItem('n3',n3)
let resultado = (n1+n2+n3)/3

NOME_OUTPUT.innerHTML= localStorage.getItem('nome')
MEDIA_OUTPUT.innerHTML=resultado

if(resultado>=7){
    STATUS_OUTPUT.innerHTML='aprovado'

}
else if (resultado<=4){
    STATUS_OUTPUT.innerHTML ='reprovado'

}
else{
    STATUS_OUTPUT.innerHTML ='recuperaçao'
}


