function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    
  
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundos} horas`

    if(hora >=0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }
    else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9b742'
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
    setTimeout(carregar, 500)
}