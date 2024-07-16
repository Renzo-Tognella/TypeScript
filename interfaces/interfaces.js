"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 28
};
// saudarComOla({nome: "Renzo", idade: 28, altura: 1.9})
// mudarNome(pessoa)
// saudarComOla(pessoa)
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Renzo";
saudarComOla(meuCliente);
meuCliente.saudar("solo");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(2, 3));
class RealAB {
    a() { }
    b() { }
}
class realABC {
    a() { }
    b() { }
    c() { }
}
function teste(b) {
}
teste(new realABC);
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
const cliente = {
    nome: "Pedro ",
    toString() {
        return this.nome;
    }
};
cliente.log();
//# sourceMappingURL=interfaces.js.map