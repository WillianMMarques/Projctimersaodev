function calcular() {

    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value)
    var segundaNota = parseFloat(document.getElementById("segundaNota").value)
    var terceiraNota = parseFloat(document.getElementById("terceiraNota").value)
    var quartaNota = parseFloat(document.getElementById("quartaNota").value) 
    
    
    var nota = (primeiraNota + segundaNota + terceiraNota + quartaNota)/4

   
    var elementomediaFinal = document.getElementById("mediaFinal")
    var mediaFinal = nota
    
    elementomediaFinal.innerHTML = mediaFinal


   
    
      console.log(nota)
    
    



}