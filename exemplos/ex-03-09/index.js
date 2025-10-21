function calculoDiaria(diaria, valorFixo, qtdDias) {
    return diaria * qtdDias + valorFixo;
}

const inputVeiculo = document.querySelector("#input-veiculo");
const inputDiaria = document.querySelector("#input-diaria");
const inputValorFixo = document.querySelector("#input-fixo");
const inputQtdDias = document.querySelector("#input-dias");

const btnCalcular = document.querySelector("#btn-calcular");

btnCalcular.addEventListener("click", (evento) => {
    evento.preventDefault();

    let valorDiaria = inputDiaria.value;
    let valorFixo = inputValorFixo.value;
    let valorDias = inputQtdDias.value;

    let valorLocacao = calculoDiaria(valorDiaria, valorFixo, valorDias);

    document.querySelector("div#resultado").innerHTML = `<p>O valor da locação é R$ ${valorLocacao.toFixed(2)}.</p>`;
});

const somatorio = (...numeros) => {
    let soma = 0;

    for (n of numeros) {
        soma += n;
    }
    return soma;
}

console.log(somatorio(3,4));
console.log(somatorio(3,4,7,12,56));
console.log(somatorio(2,21,43,36,23, 100, 3));