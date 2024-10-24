//Operação Spread é usado para fazer copia do itens, dentro dos arrays:

const listaNicolas = ["Ana Claudia","Viviane","Marcos","Sigmar"];

const listaCarol = ["Pedro","Paulo", ...listaNicolas];
console.log("Lista da Carol: ", listaCarol);

console.log("_____________________________");

const listaCarol2 = [...listaCarol];
listaCarol2.push("Lavinia");

console.log(listaCarol2);

console.log("_____________________________");


//Operação Spread é usado para fazer copia do itens, dentro dos objetos:

const professor1 = {
    nome: "Ana Claudia",
    escola: "EE Cleophania",
    materia: "Matematica",
}

const professor2 = {
    ...professor1,
    nome: "Marcos",
    materia: "Portugues",
}

console.log("Professor 1: ", professor1);
console.log("Professor 2: ", professor2);