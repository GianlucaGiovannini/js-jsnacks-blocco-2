/* 
    Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

const nomi = ["Gianluca", "Alessio", "Romeo", "Desiree", "Martina", "Fablo", "mario", "asdrubale", "matteo", 3, 4]

const cognomi = ["Giovannini", "Riccardi", "Carlomusto", "Escobar", "javascript", 1, 2]

console.log("array1 è lungo " + nomi.length + " elementi")
console.log("array2 è lungo " + cognomi.length + " caratteri")

console.log("|||| while loop")

let aggiunta;

while (nomi.length != cognomi.length || cognomi.length != nomi.length) {

    if (nomi.length < cognomi.length) {
        aggiunta = prompt("inserisci un elemento")
        nomi.push(aggiunta)
    } else if (nomi.length > cognomi.length) {
        aggiunta = prompt("inserisci un elemento")
        cognomi.push(aggiunta)
    }
}
console.log(nomi)
console.log(cognomi)

console.log("|||| for loop")

for (let i = 0; i <= nomi.length || i <= cognomi.lenght; i++) {
    if (nomi.length < cognomi.length) {
        aggiunta = prompt("inserisci un elemento")
        nomi.push(aggiunta)
    } else if (nomi.length > cognomi.length) {
        aggiunta = prompt("inserisci un elemento")
        cognomi.push(aggiunta)
    }
}

console.log(nomi)
console.log(cognomi)