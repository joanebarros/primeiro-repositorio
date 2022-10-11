// Delimitação de Strings
const aspasSimples = 'Olá Mundo!'
console.log(aspasSimples)

// Caracteres de Escape
// \n Quebra linha

const aspasDuplas = "Olá eu sou o \nJavaScript. Eu sou melhor que o \nPython"
console.log(aspasDuplas) 

const textoComCrase = "Olá eu sou JavaScript. eu sou melhor que Python"
console.log(textoComCrase) 

// Metados da String

const texto = "O javaScript foi criado alguns anos após o Python. No entanto o JavaScript é bem mais bacana."

console.log(texto)
console.log(texto.toUpperCase)
console.log(texto.toLocaleLowerCase)
console.log(texto.concat("A linguagem C é a mãe de todas as linguagens."))
// console.log(texto[5], texto[17])
console.log(texto.substring(1, 12))
console.log(texto.replace("JavaScript" , "Rust")) // subistitua a primeira ocorrencia da pesquisa
console.log(texto.replaceAll("JavaScript", "Kotlin"))
console.log(texto.replace(/JavaScript/gi, PHP))

const html = "<! DOCTAPE html>\n<html><html>"

console.log(html.startsWith("<!DOCTAPE html>"))

console.log(html.endsWith("</dody"))

const mensagem = "                              Olá mundo!"
console.log(mensagem)
console.log(mensagem.trim())

let senha = "sonic"
console.log(senha.length >= 8)



