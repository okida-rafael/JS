import input from 'readline-sync';


console.log("Aplicação de Juros:\n\n");

let valor_devido = input.question('Informe o valor devido: R$');

if(valor_devido <= 0){
    console.log("O valor da dívida deve ser maior que zero!");
}else{

let dias_atraso = input.question('\nInforme quantos dias se passaram desde o vencimento do boleto: ');

if(dias_atraso == 0){
    console.log("Você está em dia");
}else{
let taxa_juros = 0;

if(dias_atraso > 15){
    taxa_juros = 10;
}else{
    taxa_juros = 5;
};

let valor_total = valor_devido * (1+(taxa_juros/100));

console.log("\n\nValor original da dívida: R$" + valor_devido);
console.log("Dias atrasados: " + dias_atraso);
console.log("Taxa de juros: " + taxa_juros + "%");
console.log("Valor total com juros: R$" + valor_total.toFixed(0));

}
}






