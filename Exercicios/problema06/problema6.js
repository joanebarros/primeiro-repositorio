// 6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

let numeroInt1 = Number(prompt("Qual è o primeiro numero inteiro "))
let numeroInt2 = Number(prompt("Qual è o segundo numero inteiro: "))

let resultadoDiv = Math.floor(numeroInt1/numeroInt2)
let restoDaDiv = numeroInt1%numeroInt2

alert("O resultado final è: " + resultadoDiv + "E o resto è: " + restoDaDiv)
