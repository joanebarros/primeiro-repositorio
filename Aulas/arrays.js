
/**
 * Arrays ou Verores é um tipo especial que te permite armazenar diversos
 * valores em apenas um local.
 */

// Criando um Array
/** let arr = new Array()
   let arr2 = new Array(5) */

/** Posições  de um array
 * 
 * -> Cada posição é representado por um numero
 * -> A primeira posição de um Array é a posição 0
 */
   

/**
 * Sempre que você tentar recuperar uma posição que não existe , ele te informara o valor udefined
 */


let arr = [10, 15, 9.8, `Eu sou um texto dentro de um Array`, `Olá mundo!`, true, false, false]
console.log(arr [6]) // false
arr[6] = `Outro texto`
console.log(arr[6]) // outro texto
console.log(arr[8]) // udefined
arr[8] = `Agora a posição 8 existe dentro do Array`


const lista = [`João, Maria, Paulo, Pedro, Vitória, Augusto, Fabio, Larissa`]
console.log(lista)
lista.push(`Robertar`) // adicionar um valor no final do Array
console.log(lista)
lista.unshift(`Gustavo`) // adicionar um valolr no inicio do Array
console.log(lista)
lista.pop() // remove o ultimo valor do Array
console.log(lista)
lista.shift() // remove o primeito valor do Array
console.log(lista)
console.log(lista.concat(`Julio`)) // cria um novo Array adicionando o valor  passado como parâmetro
console.log(lista)
console.log(lista.join(`->`)) // João-> Maria-> ...




