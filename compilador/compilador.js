"use strict";
let canal = "Gaveta";
let inscritos = 610234;
//canal = inscritos 
console.log(canal);
//let nome = "pedro" vai me gerar problema pois estamos em um mesmo escopo
function cumprimentar(isManhaL) {
    let saudacao;
    if (isManhaL) {
        saudacao = "bom dia";
    }
    else {
        saudacao = "boa tarde";
    }
    return saudacao;
}
let decisao = true;
console.log(cumprimentar(decisao));
console.log("ola");
//# sourceMappingURL=compilador.js.map