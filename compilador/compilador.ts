let canal: string = "Gaveta"
let inscritos: number = 610234

//canal = inscritos 
console.log(canal)

//let nome = "pedro" vai me gerar problema pois estamos em um mesmo escopo
function cumprimentar(isManhaL: boolean): string{
    let saudacao: string
    if(isManhaL) {
        saudacao = "bom dia"
    } else{
        saudacao = "boa tarde"
    }
    return saudacao
}
let decisao: boolean = true
console.log(cumprimentar(decisao))

console.log("ola")