console.log("______________________________________________________")

const idadePaulo = 33;
const idadeCarol = 32;

console.log("A Carol é mais velha que o Paulo? ", idadeCarol > idadePaulo);
console.log("O Paulo é mais velho que a Carol? ", idadePaulo > idadeCarol);

const maioridade = 18;
console.log("Carol é maior de idade? ", idadeCarol >= maioridade);

const x = 10;
const y = 20;
const z = "10";

console.log("O numero " + x + " é igual a " + y + " ? ", x === y);
console.log("O numero " + x + " é igual a " + z + " ? ", x === z); //operador de igualdade estrita
console.log("O numero " + x + " é igual a " + z + " ? ", x == z); //operador de igualdade frouxo (não recomendado uso)

console.log("O numero " + x + " é diferente de " + y + " ? ", x !== y);
console.log("O numero " + x + " é diferente de " + z + " ? ", x !== z); //estrito de desigualdade
console.log("O numero " + x + " é diferente de " + z + " ? ", x != z); // frouxo de desigualdade
