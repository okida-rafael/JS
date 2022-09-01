import entradaDados from 'readline-sync';



do{
console.log("Conversor de Celsius para Kelvin: \n");

let C = entradaDados.question("Informe o valor em Celsius: ");

let K = Number(C) + 273.15;

console.log(C+"ºC equivale a "+K+"K");

var opcao = entradaDados.question('\n\nDeseja sair? \n\ns = sim ou n = não');

}
while(opcao != 's')