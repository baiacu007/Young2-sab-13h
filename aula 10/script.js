const QUESTOS_QUIZ = [
{
    questao:"quanto é 1+1?",
    a: "2",
    b: "11",
    c: "0",
    d: "3",
    correta: 'b',
},
{
    questao:"quanto é 9+9?",
    a: "99",
    b: "18",
    c: "10",
    d: "73",
    correta: 'a',
},
{
    questao:"quanto é 1+21?",
    a: "12",
    b: "22",
    c: "121",
    d: "20",
    correta: 'c'
}

]

const QUIZ_TITULO = document.querySelector("h1")

const ALTERNATIVA_A = document.querySelector('#texto_a')
const ALTERNATIVA_B = document.querySelector('#texto_b')
const ALTERNATIVA_C = document.querySelector('#texto_c')
const ALTERNATIVA_D = document.querySelector('#texto_d')
const BOTAO = document.querySelector('button')
const QUIZ_CONTAINER = document.querySelector('.container')
const ALTERNATIVAS = document.querySelectorAll('.resposta')

let verificou = false
let acerto = 0
let questao_atual = 0

window.onload = carregar_quiz()
BOTAO.addEventListener('click', verificar)

function carregar_quiz(){
const QUESTAO = QUESTOS_QUIZ[questao_atual]


ALTERNATIVAS.forEach((alternativa) =>{
    alternativa.checked = false
    document.querySelector(`label[for=${alternativa.id}]`).classList.remove('correta', 'incorreta')
})

QUIZ_TITULO.innerText = QUESTAO.questao
ALTERNATIVA_A.innerText = QUESTAO.a
ALTERNATIVA_B.innerText = QUESTAO.b
ALTERNATIVA_C.innerText = QUESTAO.c
ALTERNATIVA_D.innerText = QUESTAO.d
BOTAO.inner = 'verificar'
verificou = false
}
function verificar(){
    if (verificou == false) {
        verificar_resposta()
    }
    else {
        proxima_pergunta()
    }
}

function verificar_resposta(){
    const RESPOSTA_CORRETA = QUESTOS_QUIZ[questao_atual].correta
    const RESPOSTA_JOGADOR = pegar_resposta()

    ALTERNATIVAS.forEach((alternativa)=>{
        const LABEL = document.querySelector(`label[for=${alternativa.id}]`)
        if(alternativa.id == RESPOSTA_CORRETA){
            LABEL.classList.add('correta')
        }
        else if(alternativa.checked){
            LABEL.classList.add('incorreta')
        }
    })

    if(RESPOSTA_CORRETA == RESPOSTA_JOGADOR){
        acerto++
    }
    BOTAO.innerText = 'Próxima'
    verificou = true
}
function pegar_resposta(){
    let resposta = undefined
    
    ALTERNATIVAS.forEach((alternativa) =>{
        if(alternativa.checked == true){
            resposta = alternativa.id
        }
    })
return resposta
}
function proxima_pergunta(){
    questao_atual++
    maximo_perguntas = QUESTOS_QUIZ.length
    if(questao_atual < maximo_perguntas){
        carregar_quiz()
    }
    else{
        QUIZ_CONTAINER.innerHTML = `<h1 id="questao"> você acertou ${acerto} de ${maximo_perguntas} perguntas!<h1>`
    }
}