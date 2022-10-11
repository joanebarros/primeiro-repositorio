/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/**
 * Parametros
 * 
 * São valores que passamos para as funções para que elas utilizem esses valores dentro delas
 */

// Passar um valor com parâmetros para mostra-los dento do alerte
function cumprimentar(mensagem, repetir = 1) {
    for (let i = 1; i <= repetir; i++)
    alert(mensagem.toUpperCase())
}

function soma(num, num2) {
    return num + num2
}

function maiorValor(a,b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

let resultado = soma(4, 7)
console.log(`O valor da varialvel resultado é ${resultado}`)

const num1 = parseInt(promp(`Informe o primeiro número`))
const num2 = parseInt(prompt(`Informe o segundo número`))
alert(`O maior número entre esses é ${maiorValor(num1,num2)}`)

//cumprimentar(`Olá mundo!`)
/*cumprimentar(`Eu gosto muito do JavaScript`)
cumprimentar(`JavaScript sola o C#`) */