
const x = 'variavel global';

//escopo de bloco
if (x) {
    const z = 'variavel de bloco';
    console.log("X é uma ", x);
    console.log("Z é uma ", z);
}

//escopo de função

const função = () => {
const a = 'variavel do escopo de funçao'
console.log("Na função, A é ", a);
}
 função();