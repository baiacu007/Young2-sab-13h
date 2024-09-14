// PASSO 1 - IDENTIFICAR ELEMENTO
const DIV = document.querySelector('div')

// PASSO 2 - CRIAR UM EVENTO
DIV.addEventListener('mouseenter', entrei)
DIV.addEventListener('mouseout', sai)
DIV.addEventListener('click', quando_clicar)

// PASSO 3 - CRIAR A FUNÇÃO DO EVENTO
function entrei(){
    DIV.innerText = 'ENTROU'
    
}

function sai(){
    DIV.innerText = 'saiu'
}

function quando_clicar(){
    DIV.innerText = 'clique aqui'
    const butao = document.createElement("Button")
    const texto = document.createTextNode("voltar")
    butao.appendChild(texto)
    DIV.appendChild(butao)

}