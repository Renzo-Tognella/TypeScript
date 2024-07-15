const somar = function(n1:number, n2:number): number{
    return n1 + n2
}

const subtrair = (n1: number, n2:number) => n1 - n2
console.log(subtrair(10,2))

const cumprimenta = () => console.log("bom dia")
cumprimenta()

const falarCom = (pessoa:string) => console.log("olá " + pessoa)
falarCom("joao")

// function normalComThis(){
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis.bind({nome: "ana"})
// normalComThisEspecial()

function contagemRegressiva(inicio: number = 3): void{
    console.log(inicio)
        while(inicio > 0) {
            inicio--
            console.log(inicio)
        }
        console.log("fim")
}
contagemRegressiva()
contagemRegressiva(4)

//operadores Spread & rest
const numbers = [1,10,99,-5]

console.log(Math.max(...numbers)) //operador spread

const turmaA: string[] = ['joao', 'maria', 'fernanda']
const turmaB: string[] = ['joao', 'maria', 'fernanda', ...turmaA]

console.log(turmaB)

function retornarArray(...args: number[]): number[]{
    return args
}

const numeros = retornarArray(1,2,3,4,5)
console.log(numeros)
retornarArray(...numeros)
console.log(numeros)

const tupla: [number,string,boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void{
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number,string,boolean]): void{
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructing array

const caracs = ["motor 2.0 turbo", 2020]
//const motor = caracs[0]
//const ano = caracs[1]


const [motor, ano] = caracs
console.log(motor)
console.log(ano)

// Destructing objetos
const item = {
    nome: "SSD 480gb",
    preco: 200
}
const {nome: n, preco: p} = item

// //callback function

// function wait3Seconds(){
//     setTimeout(() => {
//         console.log("3 segundos depois")
//     }, 3000)
// }

// wait3Seconds()

// function wait3sPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() =>{
//             resolve('3s depois...')
//         }, 3000)
//     })
// }

// wait3sPromise().then(dado => console.log(dado))

// fetch("https://swapi.dev/api/films/")
//     .then(response => response.json())
//     .then(filme => console.log(filme.results[1]))

