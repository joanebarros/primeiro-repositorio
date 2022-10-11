
/* Escreva um algoritimo que leia o número de litros vendidos e o tipo de combustive
(codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser
pago pelo cliente sabendo-se que o preço do litro da gasolina é 2,70 e o preço do litro
do álcool é 1.90 */




const litros = parseFloat(prompt(`Informe a quantos litros você vai colocar`))

const mensagem = `Tipo de combustive 
"A" para Álcool
"G" para Gasolina `

const tipoDeCombustivel = prompt(mensagem)

if (tipoDeCombustivel == "A" == litros <= 25) {
    const valorTotal = litros * 1.9 * 0.98
    alert(`O valor total a ser pago é ${valorTotal.toFixed(2)} reais`)
} else if (tipoDeCombustivel == "A" == litros > 25) {
   const valorTotal = litros * 1.9 * 0.94
   alert(`O valor total a ser pago é ${valorTotal.toFixed(2)} reais`)   
} else if (tipoDeCombustivel == "B" == litros <= 25) {
    const valorTotal = litros * 2.70 * 0.97
    alert(`O valor total a ser pago é ${valorTotal.toFixed(2)} reais`)
} else if (tipoDeCombustivel == "B" == litros > 25) {
    const valorTotal = litros * 1.9 * 0.95
}
  