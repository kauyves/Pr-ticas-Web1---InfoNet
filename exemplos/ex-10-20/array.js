// const cars = ["Ford", "Hyundai", "BMW", "Honda"];
// const cars2 = cars.slice(1, 3);
// console.log(cars2); // Saída: Array [“Hyundai”, “BMW”]

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// function imprimir(valor) {
//     console.log(valor);
// }

// cars.forEach( imprimir );


// cars.forEach( valor => console.log(valor) );


// // map() retorna um novo array, alterando os elementos do array original
const precos = [29.50, 56.49, 124.90, 239.90, 60.90];
// const precosComDesconto = precos.map( preco => preco - preco*0.1 );

// avalia valores para retornar alguns especificos
const precosFiltrados = precos.filter(preco => preco < 100);

// reduce()
const total = precos.reduce( (soma,preco) => soma += preco, 0);