//função sem parametro e sem retorno

//function imprimir(){
 //   console.log("Olá Mundo");
//}

//imprimir();

//function imprimir(impressao){
  //  console.log(impressao);
//}

const imprimir = function(impressao){
    console.log(impressao);
}
imprimir("Olá mundo!!");


//function calcularSoma (valor1, valor2){
  //  return valor1 + valor2;
//}

const calcularSoma = function(valor1,valor2){
    return valor1+valor2;
}
const valor1 = 2;
const valor2 = 4;
imprimir(`A soma entre ${valor1} e ${valor2} é: ${valor1+valor2}`);
