function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')

    var res = document.querySelector('div#res')
    
    /* Condições */

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Ano inválido! Verifique os dados preenchidos.')

    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked) {
            genero ='masculino'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', './images/menino.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', './images/moço.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', './images/adulto.jpg')
            }else {
                img.setAttribute('src', './images/idoso.jpg')
            }
        } else if(sex[1].checked) {
            genero ='feminino'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', './images/menina.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', './images/moça.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', './images/adulta.jpg')
            }else {
                img.setAttribute('src', './images/idosa.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        //window.alert  (idade)
        res.innerHTML = `A idade calculada é ${idade} e o sexo ${genero}`
        res.appendChild(img)
    }
}