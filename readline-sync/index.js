import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
console.log("Olá, " + nome);

console.log("Calculadora de soma entre x e y: \n")

let x = entradaDados.question("Informe o valor de x: ")
let y = entradaDados.question("Informe o valor de y: ")

let soma = Number(x) + Number(y);

console.log(x+" + "+y+" = "+soma);