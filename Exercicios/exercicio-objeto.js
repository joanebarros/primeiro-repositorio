
let estoque = []

let produto = {
    nome: ``,
    marca: ``,
    imagem: ``,
    valor: 0,
    estoque: 0,

}

for( let i = 1; i <=2; i++) {
    produto.nome = (prompt(`Informe o nome do ${i} produto: `)) 
    produto.marca = (prompt(`Informe a marca do ${i} produto: `))
    produto.imagem = (prompt(`Informe o link da imagem do ${i} produto:`))
    produto.valor =  parseFloat(prompt(`Insira o link da imagem do ${i} produto:`))
    produto.estoque = parseInt(prompt(`Para fianalizar, informe a quantidade em ${i} estoque:`))
    produto.push(infoproduto)

    document.write(`nome do produto: ${produto[i].nome} marca: ${produto[i].produto} imagem; <img src="${produto[i].imagem}">
    preco: R$ ${produto[i].preco} estoque: ${produto[i].estoque}`)
    
}
