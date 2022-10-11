/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10% */




// Recebendo o preço do produto e transformando o valor para decimal
let precoProduto = parseFloat(prompt('Qual o preço do produto?'))


while (isNaN(precoProduto) == true || precoProduto <= 0) {
    alert(`O preço digitado é invalido . Por favor informe o preço do produto paneas com números.`)
    precoProduto = parseFloat(prompt(`Qual o preço do produto?`))
}



const mensagem = `
Imforme o métado de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digete 3 para pagamento em cartão

`
let metadoDePagamento = prompt(mensagem)

while (metadoDePagamento == 0 || metadoDePagamento > 3) {
    alert(`Escolha a forma de pagamento 1, 2 ou 3`)
    metadoDePagamento = (prompt(`Qual o metado de pagamento?`))
}

console.log(precoProduto)
console.log(metadoDePagamento)

if (metadoDePagamento == 1 || metadoDePagamento == 2) {
    const precoFinal = precoProduto * 0.9
    alert(`O preço final do pagamento é ${precoFinal}`)

} else if (metadoDePagamento == 3) {
const parcelas = parseInt(prompt(`Informe a quantidade de parcelas`))

    if (parcelas == 1) {
        const precoFinal = precoProduto * 0.85
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    } else if (parcelas == 2) {
        const precoFinal = precoProduto - (precoProduto * 0.15)
        alert(`O preço final do produto é ${precoFinal} reais`)
    } else if (parcelas == 3) {
        const precoFinal = precoProduto + (precoProduto * 0.10)
        alert(`O preço final do produto é ${precoFinal} reais`)
    } else {
        const precoFinal = precoProduto * 1.1
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    }


}
