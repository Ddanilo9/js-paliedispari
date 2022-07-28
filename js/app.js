console.log('hola')
// let parola = 'anna';

// let parolaDivisa = parola.split('');
// console.log(parolaDivisa);

// parolaReverse = parolaDivisa.reverse();
// console.log(parolaDivisa);

// let parolaInvertita = parolaDivisa.join('');
// console.log(parolaInvertita);

// if(parola == parolaInvertita){
//     console.log('la parola è palindroma');
//   } else {
//     console.log('la parola non è palindroma');
//   }
  


let parola = 'anna';  //mi creo una variabile con un palindromo

let parolaInversa = invertiParola(parola);   //attivo la funzione su questa variabile

//scrivo la condizione per vedere se la parola inversa è palindroma
if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }

  //creo la funzione
function invertiParola(stringa){
  let stringaInversa = stringa.split('').reverse().join('');  
  return stringaInversa;
}
