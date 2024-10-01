const NUMERO = document.querySelector("div span")
const VOLTAR = document.querySelector(".voltar")
const ZERAR = document.querySelector(".zerar")
const AVANCAR = document.querySelector(".avancar")
const MULTIPLICAR = document.querySelector(".multiplicar")

let contador = 1
VOLTAR.addEventListener("click", decrementar)
AVANCAR.addEventListener("click", incrementar)
ZERAR.addEventListener("click", resetar)
MULTIPLICAR.addEventListener("click", multiplicar)
function resetar(){
    contador = 0
    atualizar_visor(contador)
}
function decrementar(){
    if( contador > -10){
        contador--
        atualizar_visor(contador)
    }
}
function multiplicar(){
    contador= contador*2
        atualizar_visor(contador)
        
}
function incrementar(){
    if (contador < 10){
        contador ++
        atualizar_visor(contador)
    }
}
function atualizar_visor(contagem){
    NUMERO.innerHTML = contagem
    if (contador == 10 || contador == -10){
        document.querySelector('body').style.backgroundColor = "red"
    }
    else{
        document.querySelector('body').style.backgroundColor = "lightgreen"
    }
}