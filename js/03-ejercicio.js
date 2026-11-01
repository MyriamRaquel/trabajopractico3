let dado1 = 0
let dado2 = 0 
let sumadados = 0
let textoHTML =''
// llena de ceros el vector//
let sumaveces = [];
for (let i = 0; i <= 10; i++) {
  sumaveces[i] = 0
}

for(let i=1; i<=50; i++) {
  dado1 = Math.floor(Math.random() * 6) + 1;
  
  dado2 = Math.floor(Math.random() * 6) + 1;
  sumadados = dado1 + dado2
  if (sumadados>1 && sumadados<13){
   sumaveces[sumadados-2]++
  }
}

div = document.getElementById('pantalla')
textoHTML += '<table  class="table table-bordered">'

textoHTML += '<thead>'
textoHTML += '<tr>'
textoHTML += '<th class="text-center"> SUMA</th>'
textoHTML += '<th class="text-center"> APARICIONES</th>'
textoHTML += '</tr>'
textoHTML += '</thead>'
      
let i=2
textoHTML += '<tbody>'
textoHTML += '<tr>'

  for(let j=0; j<=10; j++){
    textoHTML += `<td class="text-center">${i}</td>`
    textoHTML += `<td class="text-center">${sumaveces[j]}</td>`
    textoHTML += ' </tr>'
    i++
}

textoHTML += ' </tbody>'
textoHTML += ' </table>'
div.innerHTML = textoHTML
