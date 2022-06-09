function tabuada(){

    var enter = document.getElementById('enter')
    var resp = document.getElementById('resp')
    var numero = Number(enter.value)

     if(enter.value.length == 0){
        window.alert('Digite um número')
    }
    else{
        resp.innerHTML = ''
    for(var c = 1; c <=10; c++){
        var resultado = Number(c*numero)
        let item = document.createElement('option')
        item.text = `${numero} x ${c} = ${resultado}`
        item.value = `resp${c}`//pro js não faz diferença
        resp.appendChild(item)
        
    }
}


}