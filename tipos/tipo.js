"use strict";
var nome = 'joao';
console.log(nome);
let idade = 27;
idade = 27.2;
console.log(idade);
let hobbie = true;
hobbie = false;
console.log(hobbie);
console.log(typeof (hobbie));
console.log(typeof (idade));
console.log(typeof (nome));
let hobbies = ["cozinhas", "esportes"];
hobbies = [20, 23, "teste"];
console.log(hobbies);
console.log(typeof hobbies);
//tuplas
let endereco = ["Av principal", 99];
console.log(endereco);
//enums enumeração 
var Cor;
//enums enumeração 
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Vermelho"] = 20] = "Vermelho";
    Cor["Preto"] = "Preto";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Preto);
function retornaMeuNome() {
    return nome;
}
function digaOi() {
    console.log("oi");
}
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(retornaMeuNome());
digaOi();
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
let usuario = {
    nome: "Joao",
    idade: 28,
};
// usuario = {
//     name: "maria",
//     age = 12
// }
let list = [];
console.log(usuario);
usuario = {
    nome: "maria",
    idade: 32
};
console.log(usuario);
console.log(list);
let funcionario2 = {
    supervisores: ["Ana", "Lucas"],
    batePonto(horario) {
        if (horario <= 8) {
            return 'ponto normal';
        }
        else {
            return 'atrasado';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.batePonto(8));
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// nota = true nao queremos que isso possa ocorrer
let notas = 10;
console.log(`Minha nota é ${notas}`);
notas = '10';
console.log(`Minha nota é ${notas}`);
//notas = true  // errado
// console.log(notas)
let valor = 30;
if (typeof valor === "number") {
    console.log("é um number");
}
else {
    console.log(typeof valor);
}
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabao',
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("preço invalido");
        }
    }
};
produto.validarProduto();
let altura = 12;
altura = null;
const contato1 = {
    nome: "Fulano",
    tel1: '999991293',
    tel2: null
};
const contato2 = {
    nome: "lano",
    tel1: '9999912493',
    tel2: null
};
let lista = [];
lista.push(contato1);
lista.push(contato2);
console.log(lista);
//# sourceMappingURL=tipo.js.map