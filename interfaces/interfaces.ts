interface Humano{
    nome: string
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log("Olá, " + pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = "Joana"
}

const pessoa = {
    nome: "João",
    idade: 28 
}

// saudarComOla({nome: "Renzo", idade: 28, altura: 1.9})
// mudarNome(pessoa)
// saudarComOla(pessoa)

class Cliente implements Humano{
    nome: string = ""
    ultimaCompra: Date = new Date()
    saudar(sobrenome: string){
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome)

    }
}
const meuCliente = new Cliente()
meuCliente.nome = "Renzo"
saudarComOla(meuCliente)
meuCliente.saudar("solo")
console.log(meuCliente.ultimaCompra)

interface Calculos{
    (a: number, b: number): number
}

let potencia: Calculos

potencia = function(base: number, exp: number): number {
    return Math.pow(base, exp)
}

console.log(potencia(2,3))

// Herança 
interface A{
    a(): void
}

interface B{
    b(): void
}

interface ABC extends A, B{
    c(): void
}

class RealAB implements A, B{
    a(): void{}
    b(): void{}
}

class realABC implements ABC{
    a(): void{}
    b(): void{}
    c(): void{}
}

function teste(b:B){

}

teste(new realABC)

interface Object {
    log(): void
}

Object.prototype.log = function(){
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

console.log(x)
console.log(y)
console.log(z)

x.log()
y.log()
z.log()

const cliente = {
    nome: "Pedro ", 
    toString(){
        return this.nome
    }
}
cliente.log()