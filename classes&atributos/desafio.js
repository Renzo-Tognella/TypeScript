"use strict";
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
    buzinar() {
        console.log("bibibi");
    }
}
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
class Objeto2D {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
class Retangulo extends Objeto2D {
    constructor(base, altura) {
        super(base, altura);
    }
}
var retangulo = new Retangulo(5, 7);
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        this._primeiroNome = nome;
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map