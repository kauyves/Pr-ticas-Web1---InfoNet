// let idade = prompt("Fale sua idade: ");

// console.log(idade);

// document.writeln("Idade informada: " + idade);
// let info_idade = document.getElementById("idad");
// document.writeln("Idade Ifnormada: " + info_idade);
// document.querySelector("p-idade").innerHTML = "Idade Informada: " + idade;
// const info_idade = idad_input.value;
// document.getElementById("resultado").textContent = "A idade informada foi: " + info_idade;

let formulario = document.getElementById("formulario");
let idad_input = document.getElementById("idade");
let paragrafoIdade = document.getElementById("saida");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let valor = idad_input.value
    paragrafoIdade.innerHTML = "Idade Informada: " + valor;
});
