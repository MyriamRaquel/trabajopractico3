//Crear un array llamado meses y que almacene el nombre de los doce 
// meses del año. Mostrar por pantalla en forma de lista los doce 
// nombres del arreglo.

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const div = document.getElementById('pantalla')
let textoHTML =''

//mostrar un array
textoHTML += '<h1>Lista de Meses</h1>'
textoHTML += '<ul>'
for(let i=0; i< meses.length; i++){
    textoHTML += `<li>${ meses[i] }</li>`
}
textoHTML += '</ul>'

//mostrar el html en pantalla
div.innerHTML = textoHTML