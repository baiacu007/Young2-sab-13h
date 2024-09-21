// PASSO 1
const N1 = document.querySelector('.n1')
const N2 = document.querySelector('.n2')
const RESULTADO = document.querySelector('.resultado')
const BOTAO = document.querySelector('button')

//PASSO 2
BOTAO.addEventListener('click', somar)



//PASSO 3
function somar(){
    soma = parseInt(N1.value) * parseInt(N2.value)
    RESULTADO.value = soma
}