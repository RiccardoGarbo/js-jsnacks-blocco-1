
/*
1- chiedendo all'utente quanti elementi dovrà contenere 
2- verifico che il valore datomi sia valido
3- creo i numeri casuali
4- stampo gli ultimi 5


*/




// Chiedi all'utente quanti elementi inserire nell'array
let numeroElementi = parseInt(prompt('Quanti elementi devo inserire ?'));

// Verifica se l'input è un numero valido
if (isNaN(numeroElementi) || numeroElementi <= 0) {
    console.log('Inserisci un numero valido.');

}