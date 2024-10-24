const notasFinais = [
    {nome: "Paulo", nota: 5},
    {nome: "Nicolas", nota: 9},
    {nome: "Carol", nota: 8},
    {nome: "Martilda", nota: 4},
]

//for (let i = 0; i < notasFinais.length; i++){
//   if (notasFinais[i].nota >= 6){
//        console.log(`O aluno ${notasFinais[i].nome} está aprovado com a nota ${notasFinais[i].nota}`)
//    } else {
//        console.log(`O aluno ${notasFinais[i].nome} está reprovado com a nota ${notasFinais[i].nota}`)
//}
//}

//for (let aluno of notasFinais){
//    if (aluno.nota >= 6){
//        console.log(`O aluno ${aluno.nome} está aprovado com a nota ${aluno.nota}`)
//    } else {
//        console.log(`O aluno ${aluno.nome} está reprovado com a nota ${aluno.nota}`)
//}
//}

notasFinais.forEach(aluno => {
    if (aluno.nota >= 6){
        console.log(`O aluno ${aluno.nome} está aprovado com a nota ${aluno.nota}`)
    } else {
        console.log(`O aluno ${aluno.nome} está reprovado com a nota ${aluno.nota}`)
}

})