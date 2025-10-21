const alunos = ["Ivande", "Kauyves", "David", "Andreza"];

//alunos[4] = "Jhon"; - é possivel, mas não é recomendado adicioanr nesse metodo
alunos.push("Jhon"); // adiciona no fim da llista
console.log(alunos);

let removido = alunos.pop(); //remove ultimo elemento e o retorna também
console.log(alunos);
console.log("Item removido: ", removido);

alunos.unshift("Lucas"); // adiciona no inicio
console.log(alunos);

removido = alunos.shift(); // remove o primeiro elemento e o retorna também
console.log(alunos);
console.log("Item removido: ", removido);

delete alunos[1]; // remove algum elemento sem alterar a ordem
console.log(alunos);

const copiaAlunos = alunos;
copiaAlunos.push("Ana");
console.log(copiaAlunos);