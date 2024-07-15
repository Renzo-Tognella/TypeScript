class Moto{
    public velocidade: number = 0
    constructor(public nome: string){}
    
    public acelerar(delta:number): number {
        return this.velocidade = this.velocidade + delta
    }

    public buzinar(): void{
        console.log("bibibi")
    }

}
 
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
class Objeto2D {
    constructor(public base: number, public altura: number){}
    
    public area(): number{
        return this.base * this.altura
    }
}

class Retangulo extends Objeto2D{
    constructor(base: number, altura: number){
        super(base, altura )
    }
}
 

var retangulo = new Retangulo(5,7)
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
class Estagiario{
    private _primeiroNome: string  = ""

    get primeiroNome(): string{
        return this._primeiroNome
    }

    set primeiroNome(nome: string){
        this._primeiroNome = nome
    }
}

const estagiario = new Estagiario()
  
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
