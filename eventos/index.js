/**
 * Criar uma função responsavel por mostrar o alerta na tela
 */

function mostrarAlerta(){
    /**
     * O objeto documet é um objeto que faz um arepresentação 
     * do HTML do seu site dentro do JavaScript.
     */

    /**
     * getElementById serve para recuperar um elemento HTML pelo sei id.
     */

    /**
     * A propriedade classList retorna o array com todas as classes CSS 
     * que um elemento possui.
     */

    /**
     * classList.add() serve para adicionar novas classes dinamicamente dentro
     * de um elemento HTML.
     */
    const divAlerta = document.getElementById(`alerta`)
    divAlerta.classList.add(`mostrar`)
}
function fecharAlerta() {
    const divAlerta = document.getElementById(`alerta`)
    divAlerta.classList.remove(`mostrar`)
}


const btnMostrar = document.getElementById(`mostrar`)
const btnFechar = document.getElementById(`fechar`)



btnMostrar.addEventListener(`click`, mostrarAlerta)
btnFechar.addEventListener(`click`, fecharAlerta)