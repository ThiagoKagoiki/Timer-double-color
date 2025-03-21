// const horas = document.getElementById('horas').value
// const minutos = document.getElementById('minutos').value
const segundos = document.getElementById('segundos')
// const milesimos = document.getElementById('milesimos').value
const play = document.getElementById('myBtn')
// const pause = document.getElementById('myBtn2').value

var filtroTeclas = function(event) {
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
  }

let tempo_segundo = segundos;
let intervalo_segundo;

function atualizaSegundo(){
    tempo_segundo--;
    segundos.textContent = tempo_segundo;
    if(tempo_segundo === 0){
        clearInterval(intervalo_segundo)
    }
    console.log(tempo_segundo)
}

play.addEventListener("click", function(){
    intervalo_segundo = setInterval(atualizaSegundo, 1000)
})