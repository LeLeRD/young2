const DIAS_EL = document.querySelector('.dias')
const HORAS_EL = document.querySelector('.horas')
const MINUTOS_EL = document.querySelector('.minutos')
const SEGUNDOS_EL= document.querySelector('.segundos')

const DATA_NIVER = '20 march 2024'


function contagem(){
    const DATA_FORMATADA=new Date (DATA_NIVER)
    const DATA_ATUAL = new Date ()
    const TOTAL_SEGUNDOS= (DATA_FORMATADA-DATA_ATUAL)/1000



    let dias = Math.floor (TOTAL_SEGUNDOS/3600/24)
    let horas =Math.floor(TOTAL_SEGUNDOS/3600)%24
    let minutos = Math.floor(TOTAL_SEGUNDOS/60)%60
    let segundos = Math.floor( TOTAL_SEGUNDOS)%60

    console.log(dia,hora,minutos,segundos)


    DIAS_EL.innerHTML=dia
    HORAS_EL.innerHTML =horas
    MINUTOS_EL.innerHTML = minutos
    SEGUNDOS_EL.innerHTML= segundos
    
}

contagem()