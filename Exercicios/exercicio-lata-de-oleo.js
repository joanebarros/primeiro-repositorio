// 8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, 
// dado seu raio e a sua altura.

let raio = Number(prompt("Digite o valor do raio:"))
let altura = Number(prompt("Digete a altura"))

// Se o raio = 5, entao 
// area = (5 * 5) * 3.14

let valume = Math.PI * Math.pow(raio, 2) * altura;

//toFixed(?) quantas casas decimais eu quero

alert("O volume é: " + valume.toFixed(2) + "(m³)")