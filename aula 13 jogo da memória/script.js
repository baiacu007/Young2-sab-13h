

// ELEMENTOS NA TELA

const NIVEL_DISPLAY = document.querySelector('#nivel')

const VIDAS_DISPLAY = document.querySelector('#vidas')

const MENSAGEM_CONTAINER = document.querySelector('#mensagem')

const MENSAGEM_TEXTO = document.querySelector('#mensagem-texto')

const GAME_CONTAINER = document.querySelector('#game-container')

const REINICIAR_BOTAO = document.querySelector('button')

// VARIÁVEIS DE INICIO DO JOGO

let nivel = 1

let vidas = 3

let pares_encontrados = 0

let quadrados_virados = []

let bloqueio_clique = false


// CONFIGURAÇÃ DE CADA NÍVEL

const NIVEIS = [

    { quadrados: 4, vidas: 3 },

    { quadrados: 6, vidas: 4 },

    { quadrados: 8, vidas: 5 },

    { quadrados: 10, vidas: 6 },

    { quadrados: 14, vidas: 7 },

    { quadrados: 25, vidas: 10 },


]



// FUNÇÃO PARA INICIAR O JOGO

function iniciar_nivel() {

    const CONFIG = NIVEIS[nivel - 1]

    vidas = CONFIG.vidas

    pares_encontrados = 0

    quadrados_virados = []

    bloqueio_clique = false


    VIDAS_DISPLAY.textContent = vidas

    NIVEL_DISPLAY.textContent = nivel

    GAME_CONTAINER.innerHTML = ''

    GAME_CONTAINER.style.gridTemplateColumns = `repeat(${Math.ceil(CONFIG.quadrados / 2)}, 100px)`

    

    const NUMEROS = gerar_pares_aleatorios(CONFIG.quadrados)

    NUMEROS.forEach(numero => {

        const QUADRADO = document.createElement('div')

        QUADRADO.classList.add('quadrado')

        QUADRADO.dataset.number = numero

        QUADRADO.addEventListener('click', revelar_quadrado)

        GAME_CONTAINER.appendChild(QUADRADO)

    })

}

function gerar_pares_aleatorios(total) {

    const PARES = Array.from({ length: total / 2 }, (_, i) => i + 1)

    const NUMEROS = [...PARES, ...PARES]

    NUMEROS.sort(() => Math.random() - 0.5)

    return NUMEROS

}



function revelar_quadrado(event) {

    if (bloqueio_clique) return

    const QUADRADO = event.target

    if (quadrados_virados.includes(QUADRADO) || QUADRADO.textContent != '') return

    

    QUADRADO.textContent = QUADRADO.dataset.number

    quadrados_virados.push(QUADRADO)

    if (quadrados_virados.length == 2) {
        verificar_pares()

    }

}

function verificar_pares(){
    const [primeiro, segundo] = quadrados_virados
    bloqueio_clique = true
    if (primeiro.dataset.number === segundo.dataset.number){
        pares_encontrados++
        quadrados_virados = []
        bloqueio_clique = false

        if (pares_encontrados === NIVEIS[nivel - 1].quadrados / 2){
            avancar_nivel()
        }
    } 
    else{
        vidas--
        VIDAS_DISPLAY.textContent = vidas
        setTimeout(() => {
            primeiro.textContent = ''
            segundo.textContent = ''
            quadrados_virados = []
            bloqueio_clique = false
            if (vidas === 0){
                derrota('Game over🤫')
            }
        }, 1000)
    }
}

function avancar_nivel(){
    if (nivel < NIVEIS.length){
        nivel++
        iniciar_nivel()
    }
    else{
        derrota('You Win!🔥')
    }
}


function derrota(mensagem){
    MENSAGEM_TEXTO.textContent = mensagem
    MENSAGEM_CONTAINER.id = ''
    Array.from(document.querySelector('.quadrado')).forEach(quadrado => {quadrado.style.display = 'none'}) 
    reiniciar_jogo()
}
function reiniciar_jogo(){
    nivel = 1
    iniciar_nivel()
    MENSAGEM_CONTAINER.id = 'mensagem'
}

REINICIAR_BOTAO.addEventListener('click', reiniciar_jogo)

iniciar_nivel()




