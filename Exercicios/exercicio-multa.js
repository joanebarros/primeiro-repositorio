/**
 * 9. Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista
estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são
pagos: 
    a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida (ex.: velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h); 
    b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida. c) 200 reais, se estiver
    acima de 31km/h da velocidade permitida.
 */
const veloMaxima = parseInt(prompt(`Informe a velocidade máxima`))
const veloMotorista = parseInt(prompt(`Digite a velocidade do condutor`))

const teste = veloMaxima + 10

if (veloMotorista>veloMaxima && veloMotorista <= teste) {
    alert("Você vai pagar 50 reais de multa")
}
else if(veloMotorista>veloMaxima && veloMotorista >= veloMaxima + 11 &&
    veloMotorista <= veloMaxima + 30) {
        alert("Você vai pagar 100 reais de multa")
    }
    else if(veloMotorista > veloMaxima && veloMotorista >= veloMaxima +31) {
        alert("Você vai pagar 200 reais de multa")
    }
    else {
        alert("VOCÊ NÃO RECEBEU NENHUMA MULTA ")
    }