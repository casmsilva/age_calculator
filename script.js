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
        var genero = ''
        if(sex[0].checked) {
            genero ='masculino'
        } else if(sex[1].checked) {
            genero ='feminino'
        }
        var idade = ano - Number(fano.value) 
        //window.alert(idade)
       res.innerHTML = `A idade calculada é ${idade} e o sexo ${genero}`

    }
}