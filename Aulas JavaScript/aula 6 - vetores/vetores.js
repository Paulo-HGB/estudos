
const listaDeConvidados = ["Paulo","Carol","Viviane","Ana Claudia","Marcos","Sigmar","Juliany","Ana Paula","Pedro"];

console.log("Nicolas fez aniversario e convidou: ",listaDeConvidados);
console.log("Quantos convidados: ",listaDeConvidados.length);


console.log("Convidado/a número 1: ", listaDeConvidados[0]);
console.log("Convidado/a número 2: ", listaDeConvidados[1]);
console.log("Convidado/a número 9: ", listaDeConvidados[listaDeConvidados.length - 1]);


console.log("Marcos esta em qual indice do nosso array/vetor? ", listaDeConvidados.indexOf("Marcos"));
console.log("Marcos esta em qual numero da lista? ", listaDeConvidados.indexOf("Marcos") + 1);