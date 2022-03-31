/* 
    Il software deve chiedere per 5 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
    Esegui questo programma in due versioni, con il for e con il while.
*/


// Esegui questo programma con il for
// Il software deve chiedere per 5 volte all’utente di inserire un numero.

let somma = 0,
    numero_utente;

for (let index = 0; index < 5; index++) {

    numero_utente = Number(prompt("Inserisci un numero per il ciclo for"))

    somma = somma + numero_utente;

}

// Il programma stampa la somma di tutti i numeri inseriti.
console.log(somma)

// Esegui questo programma con il while.
console.log("trasformazione while")

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
let i = 0,
    numer_utente2,
    somma2 = 0;

while (i < 5) {

    numero_utente2 = Number(prompt("Inserisci un numero per il ciclo while"))

    somma2 += numero_utente2;

    i++

}
// Il programma stampa la somma di tutti i numeri inseriti.
console.log(somma2)