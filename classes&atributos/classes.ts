class Data{
    // tipos publicos
    public dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3,11,2003)
aniversario.dia = 4
console.log(aniversario.dia)

const casamento = new Data(25,2,2025)

class DataEsperta{
    constructor(public dia: number, public mes: number, public ano: number){}
}

const aniversarioE = new DataEsperta(10,11,2003)
console.log(aniversarioE.dia)

const casamentoE = new DataEsperta(25,2,2025)

class Produto{
    constructor(public nome: string, public preco: number, public desconto: number = 0){}
    public resumo(): string{
        if(this.desconto > 0){
            return `${this.nome} de R$${this.preco} por  (${this.preco - (this.desconto * this.preco)})`
        }
        else{
            return `${this.nome} por R$${this.preco} `
        }
    }

}
const produto1 = new Produto("Celular", 2500, 0.3)

const produto2 = new Produto("Celular", 3000)
console.log(produto1.resumo())
console.log(produto2.resumo())

class Carro{
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){

    }

    protected alterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima
        
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0            
        }
        return this.velocidadeAtual
    }
     
    public acelerar(): number{
        return this.alterarVelocidade(5)
    }

    public freiar(): number{
        return this.alterarVelocidade(-5)
    }
} 

const carro1 = new Carro("Ford", "Ka", 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(50).fill(0).forEach(() => carro1.freiar())
console.log(carro1.freiar())

class Ferrari extends Carro{
    constructor(modelo: string, velocidadeMaxima: number){
        super("Ferrari", modelo, velocidadeMaxima)
    }
    public acelerar(): number{
        return this.alterarVelocidade(20)
    }

    public freiar(): number{
        return this.alterarVelocidade(-20)
    }
}

const f40 = new Ferrari("F40", 340)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())

class Pessoa{
    private _idade: number = 0
    
    get idade(): number{
        return this._idade
    }

    set idade(valor: number){
        if(valor >= 0 && valor <= 120){
            this._idade = valor
        }else{ 
            console.log("idade invalida")
        }
    
    }
}

const pessoa1 = new Pessoa()
pessoa1.idade = 10
console.log(pessoa1)

class Matematica{
    static PI: number = 3.1416
 
    static areaCirc(raio: number): number{
        return Matematica.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

abstract class X {
   abstract y(a: number): number 
   w(b: number): void{
        console.log(b)
   }
}

abstract class Calculo{
    protected resultado: number = 0
    abstract executar(...numeros: number[]): void

    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo{
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t,a) => t + a)
    }
}

class Multiplicacao extends Calculo{
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t,a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

let c2 = new Multiplicacao()
c2.executar(2,3,4,5)
console.log(c2.getResultado())

class Unico{
    private static instance: Unico = new Unico
    private constructor(){

    }
    
    static getInstance(){
        return Unico.instance
    }

    agora(){
        return new Date
    }
}
   
console.log(Unico.getInstance().agora())

class Aviao{
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('TU-144', 'PT-ABC')
