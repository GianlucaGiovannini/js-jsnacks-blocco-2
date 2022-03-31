/* 
    Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const numeri = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15]

console.log(numeri)

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i];

    if (i % 2 != 0) {
        somma += numero;
    }
}
console.log(`la somma dei numeri in posizione dispari è ${somma}`)

/* CICLO WHILE */

let somma2 = 0;
let c = 0;

while (c < numeri.length) {
    const numero2 = numeri[c];

    if (c % 2 == 0) {
        somma2 += numero2;
    }

    c++
}
console.log(`la somma dei numeri in posizione pari è ${somma2}`)