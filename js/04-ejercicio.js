function paroimpr(numero){
    if (numero % 2 == 0){
      return("El número ingresado es par")
    }
    else 
  {
      return("El número ingresado es impar")
    }
  }

const numero = parseInt(prompt('Ingresa el número para saber si es par o impar'))

if (!isNaN(numero)){
      const esparoimpar = paroimpr(numero)
      alert(esparoimpar)
    }
    else {
      alert("Ingrese solamente numeros")
    }
