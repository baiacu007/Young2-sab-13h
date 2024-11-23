const GARRAFA = document.querySelector('img')
const LISTA_REGISTRO = document.querySelector('ul')
const SOM_BEBER_AGUA = document.querySelector('#som-beber')
const SOM_MICKEY = document.querySelector('#som-mickey')

let tempo_intervalo
let alerta

SOM_BEBER_AGUA.loop = true

window.addEventListener('click', iniciar_alarme, { once: true })
GARRAFA.addEventListener('click', parar_alarme)

function parar_alarme() {
    // PAUSA O SOM
    SOM_BEBER_AGUA.pause()
    // REINICIA O TEMPORIZADO DO SOM
    SOM_BEBER_AGUA.currentTime = 0
    SOM_MICKEY.currentTime = 0
    SOM_MICKEY.play()
    // HORARIO ATUAL
    const TEMPO_AGORA = new Date()
    const HORAS = String(TEMPO_AGORA.getHours()).padStart(2, '0')
    const MINUTOS = String(TEMPO_AGORA.getMinutes()).padStart(2, '0')
    const TEMPO = `${HORAS}:${MINUTOS}`

    // ADICIONAR NA LISTA
    const LI_ELEMENTO = document.createElement('li')
    LI_ELEMENTO.textContent = `Bebi água às: ${TEMPO}`
    LISTA_REGISTRO.appendChild(LI_ELEMENTO)

}

function dispara_alarme() {
    SOM_BEBER_AGUA.play()
}

function iniciar_alarme() {
    if (!tempo_intervalo) {
        tempo_intervalo = setInterval(dispara_alarme, 1 * 60 * 1000)
        alert('Alerta iniciado')
    }
}