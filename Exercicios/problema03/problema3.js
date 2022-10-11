// 3. Dado o tamanho do raio de uma circunferencia, calcular a area e o perimetro da mesma

let raioCircun = Number (prompt("Qual è o raio da circunferencia?"))

let areaCircun = Math.PI*raioCircun*raioCircun
let perimetroCircun = 2*Math.PI*raioCircun

alert("A area da circunferencia è: " + areaCircun )
alert("O perimetro da circunferencia è: " + perimetroCircun)