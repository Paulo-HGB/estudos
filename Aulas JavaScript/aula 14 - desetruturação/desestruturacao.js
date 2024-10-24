//Desestruturação de Arrays
const nomes = ["Carol", "Nicolas", "Paulo"];

//desestruturar um array e definir uma variavel para cada nome
const [nome1, nome2, nome3] = nomes;
console.log("Nome 1: ", nome1);
console.log("Nome 2: ", nome2);
console.log("Nome 3: ", nome3);

const casais = [["Carol", "Paulo"], ["Greice","Rodrigo"]];
const [casal1,casal2] = casais;
console.log("Casal 1: ", casal1);
console.log("Casal 2: ", casal2);

const [[esposa1, marido1],[esposa2,marido2]] = casais;
console.log("Esposa 1: ", esposa1);
console.log("Marido 2: ", marido2);

console.log("_________________________________");

//Desestruturação de Objetos
//const pessoa = {
//    nome: "Paulo",
//    sobrenome: "Barbosa",
//    familia: ["Carol", "Nicolas"]
//}

//const { nome: primeiroNome, sobrenome: segundoNome, familia} = pessoa;
//console.log(primeiroNome, segundoNome,familia);


const pessoa = {
    nomeCompleto: {
    nome: "Paulo Henrique",
    sobrenome: "Barbosa",
},
familia: ["Carol", "Nicolas"]
}
const { nomeCompleto: {nome, sobrenome}, familia} = pessoa;
console.log(nome, sobrenome,familia);