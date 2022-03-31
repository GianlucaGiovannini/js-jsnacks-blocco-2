/* 
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.   
*/

let richiestaNumero = Number(prompt("Scrivi un numero"));


if (richiestaNumero % 2 == 0) {
    console.log(richiestaNumero)
} else {
    richiestaNumero++
    console.log(richiestaNumero)
}