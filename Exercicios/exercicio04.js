// Criar um novo array
const nums = []

// Criar um loop que repita 6 vezes
for (let i = 1; i <= 6; i++) {
    const n = parseInt(prompt(`Digite o ${i}  numero`))
    nums.push(n)
}

// separar os valores pares e impares
const pares = []
const impares = []

// Percorrer o array com os numeros informados
// Criar uma variavel que guardara oa valores de cada possição do array
// O array que iremos percorrer

for (let numero of nums) {
/**
 * Separa os valores pares dos impares
 * Colocando cada valor no seu respectivo array
 */

 if (numero % 2 == 0) {
    pares.push(numero)
} else {
    impares.push(numero)
  }
}

alert(`Nós temos ${pares.length} valores pares: ${pares.join(`,`)}`)
alert(`Nós temos ${impares.length} valores impares: ${impares.join(`,`)}`)

