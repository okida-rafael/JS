function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('fano')
    var res = document.getElementById('res')
    res.innerHTML = ano
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados!')
    }
    else{
       var fsex = document.getElementsByName('radsex')
       var idade = Number(ano - fano.value)
       var genero = ''
       var img = document.createElement('img')

       if(fsex[0].checked){
          genero = 'Homem' 

        if(idade <=10){
            //crinça   
        img.setAttribute('src', 'imagens/menino.png')
         }
         else if(idade <=21){
        //jovem
        img.setAttribute('src', 'imagens/rapaz.png')
         }
        else if(idade <= 50){
         //adulto
         img.setAttribute('src', 'imagens/homem.png')
         }
         else{
         //idoso
         img.setAttribute('src', 'imagens/velho.png')

         }

       }
       else if(fsex[1].checked){
        genero = 'Mulher' 
        if(idade <=10){
            //crinça   
        img.setAttribute('src', 'imagens/menina.png')
         }
         else if(idade <=21){
        //jovem
        img.setAttribute('src', 'imagens/moca.png')
         }
        else if(idade <= 50){
         //adulto
         img.setAttribute('src', 'imagens/mulher.png')
         }
         else{
         //idoso
         img.setAttribute('src', 'imagens/velha.png')
     }
     
      

    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectado ${genero} de ${idade} anos`
    res.appendChild(img)
}
}