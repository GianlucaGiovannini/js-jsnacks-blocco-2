/* 
    Il software deve chiedere per 5 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
    Esegui questo programma in due versioni, con il for e con il while.
*/

// ciclo for 

// CHIEDERE PER 5 VOLTE ALL'UTENTE DI INSERIRE UN NUMERO


let somma = 0,
    numero_utente;

for (let index = 0; index < 5; index++) {

    numero_utente = Number(prompt("Inserisci un numero"))

    somma = somma + numero_utente;

    console.log(somma)

}

console.log("trasformazione while")

let i = 0,
    numer_utente2,
    somma2 = 0;

while (i < 5) {

    numero_utente2 = Number(prompt("Inserisci un numero"))

    somma2 = somma2 + numero_utente2;

    i++

    console.log(somma2)
}