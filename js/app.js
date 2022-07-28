// console.log('hola')
// // let parola = 'anna';

// // let parolaDivisa = parola.split('');
// // console.log(parolaDivisa);

// // parolaReverse = parolaDivisa.reverse();
// // console.log(parolaDivisa);

// // let parolaInvertita = parolaDivisa.join('');
// // console.log(parolaInvertita);

// // if(parola == parolaInvertita){
// //     console.log('la parola è palindroma');
// //   } else {
// //     console.log('la parola non è palindroma');
// //   }
  


// let parola = 'anna';  //mi creo una variabile con un palindromo

// let parolaInversa = invertiParola(parola);   //attivo la funzione su questa variabile

// //scrivo la condizione per vedere se la parola inversa è palindroma
// if(parola == parolaInversa){
//     console.log('la parola è palindroma');
//   } else {
//     console.log('la parola non è palindroma');
//   }

//   //creo la funzione
// function invertiParola(stringa){
//   let stringaInversa = stringa.split('').reverse().join('');  
//   return stringaInversa;
// }

//********************************************************************************************************************* */

let ilTuoNumero = document.getElementById('num');
let numeroPc = 0;
let iniziaAgiocare = document.getElementById('start');
let somma = 0
let pariDispari = document.querySelector('input[type="radio"]').value
console.log(pariDispari)


function isEven(num){
    return num % 2 === 0
}


iniziaAgiocare.addEventListener("click", function(){ 
    if (pariDispari === 'Pari'){
        console.log(pariDispari)

        if (isNaN(ilTuoNumero.value) || ilTuoNumero.value > 5 || ilTuoNumero.value < 1) {
            alert('Inserisci un numero da 1 a 5')
        console.log('il tuo numero '+ (parseInt(ilTuoNumero.value)));
        }
        

        numeroPc = Math.floor(Math.random() * 5 + 1)
        console.log('il numero del pc ' + (parseInt(numeroPc)));

        somma = (parseInt(ilTuoNumero.value)) + (parseInt(numeroPc));
        console.log('la somma è ' + (parseInt(somma)));

        if (isEven(somma)) {
            alert('hai vinto')
        }   else {
            alert('hai perso')
        }
    }  
})


