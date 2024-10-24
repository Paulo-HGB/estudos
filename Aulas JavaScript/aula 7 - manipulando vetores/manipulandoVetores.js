const listaDeConvidados = ["Paulo","Carol","Viviane","Ana Claudia","Marcos","Sigmar","Juliany","Pedro","Ana Paula"];
console.log(listaDeConvidados);

listaDeConvidados.pop();
console.log(listaDeConvidados);

listaDeConvidados.push("Lavinia");
console.log(listaDeConvidados);

listaDeConvidados.unshift("Nicolas");
console.log(listaDeConvidados);

listaDeConvidados.shift();
console.log(listaDeConvidados);

console.log("Ana Paula está na lista? ", listaDeConvidados.includes("Ana Paula"));