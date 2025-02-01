const POKE_NAME = document.querySelector('.poke_name')
const POKE_NUMBER = document.querySelector('.poke_number')
const POKE_IMG = document.querySelector('.poke_img')
const CONTAINER_INPUT = document.querySelector('.container_input')
const INPUT = document.querySelector('input')
const PREV_BTN = document.querySelector('.pre_btn')
const NEXT_BTN = document.querySelector('.next_btn')
const URL = 'https://pokeapi.co/api/v2/pokemon/'

let id_pokemon = 1

const buscar_pokemon = async (pokemon) => {
    let resposta = await fetch(`${URL}${pokemon}`)
    if (resposta.status === 200) {
        const INFO = resposta.json()
        return INFO
    }
}

const mostrar_pokemon = async (pokemon) => {
    const json_pokemon = await buscar_pokemon(pokemon)
    POKE_NUMBER.innerHTML = json_pokemon.id
    POKE_NAME.innerHTML = json_pokemon.name
    POKE_IMG.src = json_pokemon['sprites']['other']['showdown']['front_default']
    INPUT.value = ''
    id_pokemon = json_pokemon.id
}

CONTAINER_INPUT.addEventListener('submit', (event) =>{
    event.preventDefault()
    let pokemon = INPUT.value.toLowerCase()
    mostrar_pokemon(pokemon)
})

PREV_BTN.addEventListener('click', () =>{
    if (id_pokemon > 1){
        id_pokemon -= 1
        mostrar_pokemon(id_pokemon)
    }
})

NEXT_BTN.addEventListener('click', () =>{
    if (id_pokemon < 920){
        id_pokemon += 1
        mostrar_pokemon(id_pokemon)
    }
})

window.unload = mostrar_pokemon(id_pokemon)
