/**
 * 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;
 */

let maiorAltura = 0;
let menorAltura = 0;

for (let i = 1; i <= 15; i++) {
    const altura = parseFloat(prompt(`Informe a altura: `))
    
    if (i == 1) {
        maiorAltura = altura;
        menorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }

    if (altura < menorAltura) {
        menorAltura = altura;
    }
}

alert(`A maior altura informada foi: ${maiorAltura.toFixed(2)}`)
alert(`A menor altura informada foi: ${menorAltura}`)