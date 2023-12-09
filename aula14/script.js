const NAME_POKE = document.querySelector(".name_poke")
const NUMBER_POKE = document.querySelector(".num_poke")
const IMG_POKE = document.querySelector(".poki_img")
const FOMR = document.querySelector(".forms")
const INPUT = document.querySelector(".input_search")
const PREV = document.querySelector(".pre_btn")
const NEXT_BTN = document.querySelector(".next.btn")

let id_pokemon = 1

const buscar_pokemon = async (pokemon) => {
  resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  if (resposta.status == 200) {
    const info = resposta.json()
    return info
  }
}

const mostrar_pokemon = async (pokemon) => {
  NAME_POKE.innerHTML='pesquisando'
  NUMBER_POKE.innerHTML=''
  const json_pokemon = await buscar_pokemon(pokemon)
  if (json_pokemon) {
    IMG_POKE.src = json_pokemon["sprites"]["versions"]['generation-v']["black-white"]["animated"]["front_default"]
    IMG_POKE.style.display = 'block'
    NAME_POKE.innerHTML = json_pokemon.name
    NUMBER_POKE.innerHTML = json_pokemon.id
    INPUT.value=''
    id_pokemon= json_pokemon.id
  



  }
  else{IMG_POKE.style.display = 'none'
  NAME_POKE.innerHTML = 'not found'
  NUMBER_POKE.innerHTML = ''


    
  }
}

FOMR.addEventListener('submit',(evento)=>{
  evento.preventDefault()
  let pokemon = INPUT.value.toLowerCase()
  mostrar_pokemon(pokemon)

})


PREV.BTN.addEventListener('click',()=>{
  if (id_pokemon>1){
    id_pokemon-= 1
    mostrar_pokemon
  }

})

NEXT_BTN.addEventListener('click',()=>{
  id_pokemon+=1
  mostrar_pokemon(id_pokemon)

})

mostrar_pokemon(id_pokemon)