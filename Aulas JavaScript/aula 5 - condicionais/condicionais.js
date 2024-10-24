
const idadeMaria = 16;
const maioridade = 18;

console.log("Maria pode dirigir?");

if (idadeMaria >=18){
    console.log("Maria pode dirigir!");
} else {
    const anosFaltantes = maioridade - idadeMaria;
    console.log("Maria NÂO pode dirigir!");
    console.log(`Faltam ${anosFaltantes} anos para Maria poder dirigir.`)
}

//Operadores ternários
// if  ?
// else :

idadeMaria >= maioridade ? console.log("Maria pode dirigir") : console.log("Maria NÃO pode dirigir.");

console.log("______________________________________________________")

// usar else if quando tiver que fazer varias comparaçoes
const idadePessoa = 75;

if (idadePessoa >= 0 && idadePessoa <=12){
    console.log("Infancia");
} else if (idadePessoa >= 13 && idadePessoa <=17){
    console.log("Adolescencia");
} else if (idadePessoa >= 18 && idadePessoa <=15){
    console.log("Jovem Adulto");
} else if (idadePessoa >= 26 && idadePessoa <=60){
    console.log("Adulto");
} else {
    console.log("Idosa");
}

console.log("______________________________________________________")

const diaDaSemana = 2;
let nomeDoDia;

switch (diaDaSemana){
    case 0:
        nomeDoDia = "Domingo";
break;
    case 1:
        nomeDoDia = "Segunda";
break;
    case 2:
        nomeDoDia = "Terça";
break;
     case 3:
        nomeDoDia = "Quarta";
break;
    case 4:
        nomeDoDia = "Quinta";
break;
    case 5:
        nomeDoDia = "Sexta";
break;
    case 6:
        nomeDoDia = "Sábado";
break;
}

console.log("O dia da semana é " + nomeDoDia);