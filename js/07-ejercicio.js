function calculatabla(numero){
  div = document.getElementById('pantalla')
  textoHTML += '<table  class="table table-bordered">'

  textoHTML += '<thead>'
  textoHTML += '<tr>'
  textoHTML += '<th class="text-center"> NUMEROS </th>'
  textoHTML += '<th class="text-center"> TABLA</th>'
  textoHTML += '</tr>'
  textoHTML += '</thead>'
        
  textoHTML += '<tbody>'
  textoHTML += '<tr>'
  for (let i = 1; i <= 10; i++) {
    let resultado = i*numero

    textoHTML += `<td class="text-center">${i}</td>`
    textoHTML += `<td class="text-center">${resultado}</td>`
    textoHTML += ' </tr>'

  }

  textoHTML += ' </tbody>'
  textoHTML += ' </table>'
  div.innerHTML = textoHTML
}

const numero = parseInt(prompt('Ingresa el número para mostrar su tabla'))
let textoHTML = ""

if (!isNaN(numero)){
      calculatabla(numero)
    }
    else {
      alert("Ingrese solamente numeros")
    }
