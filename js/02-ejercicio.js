const ciudades = [ ]
const ciudadesamostrar = [ ]
let div = document.getElementById('pantalla')
let textoHTML =''
let i = 0
do {
    const cadenatexto = prompt ("Ingrese el nombre de una ciudad")
    if (cadenatexto !== null){
        alert("Debe ingresar al menos 3 ciudades")
        if (!isNaN(cadenatexto)){
          alert("Ingrese solamente texto")
        } else {
          const cadenatextomay = cadenatexto.toUpperCase()
          ciudades[i]= cadenatextomay
          i++
        } 
      }
  } while (confirm("¿Deseas agregar otra ciudad?") || (i<2));

textoHTML += `<p> El arreglo de ciudades tiene ${ciudades.length}${" elementos"}  </p>`
textoHTML += `<p> Elemento primer posición: ${ciudades[0]} </p>`
textoHTML += `<p> Elemento tercer posición: ${ciudades[2]} </p>`
textoHTML += `<p> Elemento última posición: ${ciudades[(ciudades.length - 1)]} </p>`
textoHTML += `<p> Elemento última posición: PARIS</p>`

div.innerHTML = textoHTML
/* Arma vector de salida */
i=0
for(let j=0; j<=(ciudades.length); j++){
    if (j==1){
      ciudadesamostrar[1]= "BARCELONA"
    }
    else {
      ciudadesamostrar[j]=ciudades[i] 
      i++
    }
  }
  ciudadesamostrar[(ciudades.length+1)]="PARÍS"
div = document.getElementById('pantalla')
textoHTML += '<h1> Arreglo de ciudades: </h1>' 
//mostrar el vector de salida en pantalla
textoHTML += '<ul>'
for(let j=0; j<(ciudadesamostrar.length); j++){
      textoHTML += `<li>${ ciudadesamostrar[j] }</li>`
      console.log(ciudadesamostrar)
}
textoHTML += '</ul>'

div.innerHTML = textoHTML