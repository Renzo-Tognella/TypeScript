var nome: string = 'joao'
console.log(nome)

let idade: number = 27

idade = 27.2
console.log(idade)

let hobbie: boolean = true;
hobbie = false
console.log(hobbie)

console.log(typeof(hobbie))
console.log(typeof(idade))
console.log(typeof(nome))

let hobbies: any[] = ["cozinhas", "esportes"]
hobbies = [20,23,"teste"]
console.log(hobbies)
console.log(typeof hobbies)

//tuplas
let endereco: [string,number] = ["Av principal", 99]
console.log(endereco)

//enums enumeração 
enum Cor{
    Cinza, Verde, Azul, Vermelho = 20, Preto = "Preto"
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Preto)

function retornaMeuNome(): string{
    return nome
}

function digaOi(): void{
    console.log("oi")
}

function multiplicar(numA: number, numB: number): number{
    return numA*numB
}

console.log(retornaMeuNome())
digaOi()

let calculo: (x: number, y: number) => number
calculo = multiplicar
console.log(calculo(5,6))

let usuario: {nome: string, idade:number} = {
    nome: "Joao",
    idade: 28,
}

// usuario = {
//     name: "maria",
//     age = 12
// }
let list = [] 
list.push(usuario)

console.log(usuario)

usuario = {
    nome: "maria",
    idade: 32
}

list.push(usuario)
console.log(usuario) 
console.log(list) 

//alias vulgo apelido
type funcionario = {
    supervisores: string[],
    batePonto: (horas: number) => string    
} 

let funcionario2: funcionario = {
    supervisores: ["Ana", "Lucas"],
    batePonto(horario: number): string {
        if(horario <= 8){
            return 'ponto normal'
        }else{
            return 'atrasado'
        }
    }
}

console.log(funcionario2.supervisores)
console.log(funcionario2.batePonto(8))

let nota: any = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)
// nota = true nao queremos que isso possa ocorrer
let notas: number | string = 10 
console.log(`Minha nota é ${notas}`)
notas = '10'
console.log(`Minha nota é ${notas}`)
//notas = true  // errado
// console.log(notas)

let valor = 30

if(typeof valor === "number"){
    console.log("é um number")
}else{
    console.log(typeof valor)
}

function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: 'sabao',
    preco: 8,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha("precisa ter um nome")
        }
        if(this.preco <= 0){
            falha("preço invalido")
        }
    }
}

produto.validarProduto()
 
let altura: null | number = 12
altura =  null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: "Fulano",
    tel1: '999991293',
    tel2: null
}

const contato2: Contato = {
    nome: "lano",
    tel1: '9999912493',
    tel2: null
}

let lista: Contato[] = []
lista.push(contato1)
lista.push(contato2)
console.log(lista)