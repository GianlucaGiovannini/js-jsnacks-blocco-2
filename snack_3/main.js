/* 
    Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
    e da queste vuole generare una falsa lista di invitati con nome e cognome. 
*/


const nomi = ["Gianluca", "Alessio", "Romeo", "Desiree", "Martina", "Fablo", ]

const cognomi = ["Giovannini", "Riccardi", "Carlomusto", "Escobar", "javascript"]

const listaInvitatiInventati = []

let listaInvitati;

/* for (let i = 0; i < 10; i++) {
    listaInvitati = nomi[Math.floor(Math.random() * nomi.length)] + " " + cognomi[Math.floor(Math.random() * cognomi.length)];

    console.log(listaInvitati);

    listaInvitatiInventati.push(listaInvitati);
} */

/* ciclo while  */

let i = 0;

while (i < 10) {

    listaInvitati = nomi[Math.floor(Math.random() * nomi.length)] + " " + cognomi[Math.floor(Math.random() * cognomi.length)];

    console.log(listaInvitati);

    listaInvitatiInventati.push(listaInvitati);

    i++
}