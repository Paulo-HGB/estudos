// Valores Falsy e Thruty são diferentes de false e true


// valores falsy: 0, "" (string vazia), undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
//...

console.log("______________________________");

//exemplos de valores truty

console.log(Boolean(1));
console.log(Boolean(-10));
console.log("String",Boolean("Ola Mundo"));
console.log("Objeto: ",Boolean({}));
console.log("Array", Boolean([]));

console.log("______________________________");

const nomes = ["Carol","Nicolas","","Paulo"];
console.log("Nomes: ", nomes);

const nomesFiltrados = nomes.filter((nome) => nome);
console.log("Nomes Filtrados: ", nomesFiltrados);

console.log("______________________________");


const x = 10;
const y = NaN;

if (x) {
    console.log("X é truthy");
}

if (y) {
    console.log("Y é truthy");
}