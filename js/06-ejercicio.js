function calculaperimetro(ladoa, ladob){
    const perimetro = 2*(ladoa +ladob)
    return(perimetro)
  }

const ladoa = parseInt(prompt('Ingresa la medida del lado A'))
const ladob = parseInt(prompt('Ingresa la medida del lado B'))

if (!isNaN(ladoa) && !isNaN(ladob)){
      const perimetro = calculaperimetro(ladoa, ladob)
      alert("El perímetro del rectángulo ingresado es: " + perimetro)
    }
    else {
      alert("Ingrese solamente numeros")
    }
