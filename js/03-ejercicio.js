let dado1 = 0
let dado2 = 0 
let sumadados = 0
let textoHTML =''

let matriz = [];
for (let i = 1; i <= 12; i++) {
  matriz.push(new Array(2).fill(0));
}

/* for (let i = 1; i <= 11; i++) {
  /* matriz[i] = []; */
 /*  for (let j = 1; j <= 2; j++) {
    matriz[i][j] = 0, 0; // Valor inicial
  } */

/* matriz[0][0] = Math.floor(Math.random() * 101); */



for(let i=1; i<=50; i++) {
  dado1 = Math.floor(Math.random() * 6) + 1;
  console.log("dado1" + dado1)
  
  dado2 = Math.floor(Math.random() * 6) + 1;
  console.log("dado2" + dado2)
  sumadados = dado1 + dado2
  console.log("suma dados" + sumadados)
  switch (sumadados) {
    case 2:
      matriz [i][1] = sumadados
      matriz [i][2]++;
      console.log(matriz [i][1]) 
      console.log(matriz [i][2]) 
      break;
   /*  case 3:
      matriz [2, 1] = 3
      matriz [2, 2] ++
      console.log(matriz [2] [2]) 
      break;
    case 4:
      matriz [3, 1] = 4
      matriz [3, 2] ++
      console.log(matriz [3] [2]) 
      break; 
    case 5:
      matriz [4, 1] = 5
      matriz [4, 2] = matriz [4, 2] + 1
      console.log("matriz 4,2" + matriz [4, 2])
      break; 
    case 6:
      matriz [5, 1] = 6
      matriz [5, 2] ++
      console.log(matriz [5] [2]) 
      break;
    case 7:
      matriz [6, 1] = 7
      matriz [6, 2] ++
      console.log(matriz [6] [2]) 
      break;
    case 8:
      matriz [7, 1] = 8
      matriz [7, 2] ++
      console.log(matriz [7] [2])
      break; 
    case 9:
      matriz [8, 1] = 9
      matriz [8, 2] ++
     console.log(matriz [8] [2])       
      break; 
    case 10:
      matriz [9, 1] = 10
      matriz [9, 2] ++
     console.log(matriz [9] [2]) 
      break;
    case 11:
      matriz [10, 1] = 11
      matriz [10, 2] ++
      console.log(matriz [10] [2]) 
      break;
    case 12:
      matriz [11, 1] = 12
      matriz [11, 2] ++
     console.log(matriz [11] [2]) 
      break; */
    default:
      break;
  }

}
div = document.getElementById('pantalla')
textoHTML += '<ul>'
textoHTML += `<li>"SUMA     APARICIONES"</li>`
for(let j=1; j<=(matriz.length); j++){
   console.log(matriz [j][1]) 
   console.log(matriz [j][2]) 
    textoHTML += `<li>${matriz[j][1]}${ matriz[j][2]} </li>`
}
textoHTML += '</ul>'
div.innerHTML = textoHTML