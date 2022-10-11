// Operadores logicos

//operador E
// v <- verdadeiros
// F <- Falso

/**
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
 */

// Media precisa ser maior ou igual a 7 E precisa ter, no minimo 80% de precença

const media = (7+ 10 + 10) / 3
const precenca = 0.95

console.log(media >= 7 && precenca >= 0.8) // true

// Operador OU

/**
 * V V -> V
 * F V -> V
 * V F -> V
 * F F -> F
 */

console.log(4 > 7 || 3 < 2) // false
console.log(5 > 3.5 || 7 > 8) // true

const estado = "MG"

console.log(estado == "SP" || estado == "MG")

// Operador NOT

/**
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3 // false

console.log(!resultado) // true
console.log(true)
console.log(false)

const logado = false 

if (logado) {
    console.log("Voce não pode entrar no meu site, saia daqui")
}