function mayusminus(cadena){
    let decidemayus = 0
    let decideminus = 0
    if (/[A-Z]/.test(cadena)){
         decidemayus++
        }
    if (/[a-z]/.test(cadena)){
         decideminus++
        }
      
    if ((decidemayus>0) && (decideminus>0))
      {
          return("La cadena de texto ingresada contiene una mezcla de mayúsculas y minúsculas")
      }
      else {
          if (decidemayus>0)
            {
            return("La cadena de texto ingresada contiene sólo letras mayúsculas")
            }
            else {
            return("La cadena de texto ingresada contiene sólo letras minúsculas")
            }
          }
}


const cadena = prompt("Ingrese la cadena de texto")
if (cadena !== null){
        if (!isNaN(cadena)){
          alert("Ingrese solamente texto")
        } else {
          const definicion = mayusminus(cadena)
          alert(definicion)
          } 
        }