/**
 * Objeto é uma estrutura que permite organizar dados na forma de 
 * chave-valor
 */

 let end = {
    rua: `Rua`,
    numero: 456,
    estado: `PE`,
    complemento: `Sem complemento`,
    cep: `123000-00`,
 }

let pessoa = {
    nome: `Joane`,
    idade: 27,
    cpf: `123-123-123-12`,
    altura: 154,
    endereco:{...end},
    solteiro: true,
    habilidades: [`React`, `Java`, `Javascript`, `Golang`, `Rust`],
    cumprimentar() {

        /**
         * Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, eu utilizo
         * a palavra chave `this`
         */

        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}
 /* console.log(end)
  console.log(pessoa.endereco.estado)*/
  pessoa.cumprimentar()
  pessoa.nome = `Pablo Escobar`
  pessoa.cumprimentar()
  pessoa.habilidades.push(`Angula`)
  console.log(pessoa.habilidades)
  console.log(pessoa[`cpf`])


