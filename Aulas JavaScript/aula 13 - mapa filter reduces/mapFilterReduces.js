
const distanciaEmMetro = [1000,1500,2000,2500,3000,3500,4000,4500,5000];


//MAP (altera os valores do array)
const distanciaEmKm = distanciaEmMetro.map(distancia => distancia / 1000);
console.log("A distancia em KM: ", distanciaEmKm);


//FILTER (filtra os valores do array)
const itensFiltrados = distanciaEmMetro.filter(distancia => distancia> 2500);
console.log("Itens Filtrados", itensFiltrados);


//REDUCE(reduz todos os valores em um único valor)
const distanciaTotal = distanciaEmMetro.reduce((acc, distancia) =>{
    return acc + distancia;
})
console.log("Distancia Total: ", distanciaTotal);