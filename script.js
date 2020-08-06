function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    
    var tempo = new Date ()
    var hora = tempo.getHours()
    var minuto = tempo.getMinutes()
    
  
    switch (hora) {
        case 1:
        //Omsk
        img.src = 'imagens/Omsk.png'
        document.body.style.background = '#060a1b'
        msg.innerHTML = 'Agora são ' + (hora + 9 ) + ':' + minuto +' horas em Omsk - Rússia'
        break
        
        case 2:
        //Xangai
        img.src = 'imagens/Xangai.png'
        document.body.style.background = '#252e4f'
        msg.innerHTML = 'Agora são ' + (hora + 11) + ':' + minuto +' horas em Xangai - China'
        break
        
        case 3:
        //Tóquio
        img.src = 'imagens/tokyo.png'
        document.body.style.background = '#01204f'
        msg.innerHTML = 'Agora são ' + (hora + 12) + ':' + minuto +' horas em Tóquio - Japão'
        break
        
        case 4:
        //Sydnei
        img.src = 'imagens/Sydney.png'
        document.body.style.background = '#1cb5c5'
        msg.innerHTML = 'Agora são ' + (hora + 13) + ':' + minuto +' horas em Sydney - Austrália'
        break
        
        case 5:
        //Nouméa Nova caledonia
        img.src = 'imagens/Noumeia.png'
        document.body.style.background = '#0db8bf'
        msg.innerHTML = 'Agora são ' + (hora + 14) + ':' + minuto +' horas em Nouméia - Nova Caledonia'
        break
       
        case 6:
        //Antartida
        img.src = 'imagens/Antartida.png'
        document.body.style.background = '#202524'
        msg.innerHTML = 'Agora são ' + (hora + 15) + ':' + minuto +' horas na Estação McMurdo - Antártida'
        break
        
        case 8:
        //honolulu
        img.src = 'imagens/Honolulu.png'
        document.body.style.background = '#00afce'
        msg.innerHTML = 'Agora são ' + (hora - 7) + ':' + minuto +' horas em Honolulu - EUA'
        break
        
        case 10:
        //Yakutat
        img.src = 'imagens/Yakutat.png'
        document.body.style.background = '#859fd2'
        msg.innerHTML = 'Agora são ' + (hora + 11) + ':' + minuto +' Yakutat - EUA (Alaska)'
        break
        
        case 11:
        //Los Angeles
        img.src = 'imagens/LosAngeles.png'
        document.body.style.background = '#1c5298'
        msg.innerHTML = 'Agora são ' + (hora - 4) + ':' + minuto +' horas em Los Angeles - EUA'
        break
        
        case 12:
        //Denver
        img.src = 'imagens/Denver.png'
        document.body.style.background = '#008ae3'
        msg.innerHTML = 'Agora são ' + (hora - 3) + ':' + minuto +' horas em Denver - EUA'
        break

        case 13:
        //Chicago
        img.src = 'imagens/Chicago.png'
        document.body.style.background = '#2290ab'
        msg.innerHTML = 'Agora são ' + (hora - 2) + ':' + minuto +' horas em Chicago - EUA'
        break
       
        case 14:
        //Bahamas
        img.src = 'imagens/Bahamasspng.png'
        document.body.style.background = '#07b1c5'
        msg.innerHTML = 'Agora são ' + (hora - 1) + ':' + minuto +' horas em Bahamas - Nassau'
        break
        
        case 15:
        //Brasil
        img.src = 'imagens/Brasil.png'
        document.body.style.background = '#f9ce6e'
        msg.innerHTML = 'Agora são ' + hora + ':' + minuto +' horas aqui no Brasil'
        break
        
        case 18:
        //Reiquiavique
        img.src = 'imagens/Reiquiavique.png'
        document.body.style.background = '#004f83'
        msg.innerHTML = 'Agora são ' + (hora + 3)  + ':' + minuto +' horas em Reiquiavique - Islândia'
        break
        
        case 19:
        //Londres
        img.src = 'imagens/Londres.png'
        document.body.style.background = '#506bde'
        msg.innerHTML = 'Agora são ' + (hora + 4) + ':' + minuto +' horas em Londres - Reino Unido'
        break
        
        case 20:
        img.src = 'imagens/Paris.png'
        document.body.style.background = '#fdc222'
        msg.innerHTML = 'Agora são ' + (hora + 5) + ':' + minuto +' horas em Paris - França'
        //Paris
        break
        
        case 21:
        //Bulgária Sofia
        img.src = 'imagens/Bulgaria.png'
        document.body.style.background = '#b3bb82'
        msg.innerHTML = 'Agora são ' + (hora + 6) + ':' + minuto +' horas em Sofia - Bulgária'
        break
        
        case 22:
        //Dubai
        img.src = 'imagens/Dubai.png'
        document.body.style.background = '#0079be'
        msg.innerHTML = 'Agora são ' + (hora + 7) + ':' + minuto +' horas em Dubai - Emirados Árabes Unidos'
        break
        
        case 23:
        //Oral Cazaquistao 
        img.src = 'imagens/Oral.png'
        document.body.style.background = '#915d6f'
        msg.innerHTML = 'Agora são ' + (hora + 8) + ':' + minuto +' horas em Oral - Cazaquistão'
        break
        
        case 00:
        //Urumqi
        img.src = 'imagens/Urumqi.png'
        document.body.style.background = '#8181e1'
        msg.innerHTML = 'Agora são ' + (hora + 11) + ':' + minuto +' horas em Urumqi - China'
        break

        default:
            img.src = 'imagens/Brasil.png'
        document.body.style.background = '#f9ce6e'
        msg.innerHTML = 'Agora são ' + hora + ':' + minuto +' horas aqui no Brasil'
        break
    }
}