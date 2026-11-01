const ciudades = [ ]
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

textoHTML += `<p> Antes de agregar elementos, el arreglo de ciudades tiene ${ciudades.length}${" elementos"}  </p>`
textoHTML += `<p> Elemento primer posición: ${ciudades[0]} </p>`
textoHTML += `<p> Elemento tercer posición: ${ciudades[2]} </p>`
textoHTML += `<p> Elemento última posición: ${ciudades[(ciudades.length - 1)]} </p>`
ciudades.push("PARIS")
textoHTML += `<p> Elemento última posición:${ciudades[(ciudades.length-1)]}</p>`
ciudades[1]= "BARCELONA"
textoHTML += '<h1> Arreglo de ciudades: </h1>' 
//mostrar el vector de salida en pantalla
textoHTML += '<ul>'
for(let j=0; j<(ciudades.length); j++){
      textoHTML += `<li>${ ciudades[j] }</li>`
      console.log(ciudades)
}
textoHTML += '</ul>'

div.innerHTML = textoHTML