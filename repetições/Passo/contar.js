function contar(){
var inicio = document.getElementById('inicio')
var end = document.getElementById('fim')
var step = document.getElementById('passo')
var res = document.getElementById('resultado')

var inicio2 = Number(inicio.value)
var end2 = Number(end.value)
var step2 = Number(step.value)


if(inicio.value.length == 0){
    window.alert('Digite um valor inicial')
}
else if(end.value.length == 0){
    window.alert('Digite um valor Final')
}
else if(step.value.length == 0){
    window.alert('Valor de passo não inserido, passo considerado 1!')
    
res.innerHTML = ''
for(var c = inicio2; c <= end2; c++){
    res.innerHTML += `${c} 👉 `
    
}
    res.innerHTML += `🔚`
}
else
{

    res.innerHTML = ''
    for(var c = inicio2; c <= end2; c = c + step2){
        res.innerHTML += `${c} 👉 `
        
    }
        res.innerHTML += `🔚`
}
}
