
/*
1- chiedendo all'utente quanti elementi dovrà contenere 
2- verifico che il valore datomi sia valido
3- creo i numeri casuali
4- stampo gli ultimi 5


*/




// Chiedi all'utente quanti elementi inserire nell'array
const numberElements = parseInt(prompt('Quanti elementi devo inserire ?'));

// Verifica se l'input è un numero valido
if (isNaN(numberElements) || numberElements <= 0 || numberElements < 5) {
    console.log('Inserisci un numero valido.');
}
else {
    // Creazione dell'array 
    const randomNumber = [];

    for (let i = 0; i < numberElements; i++) {
        //Generazione dei numeri casuali
        randomNumber.push(Math.floor(Math.random() * 100) + 1);
        console.log(randomNumber)
        // Prendo gli utlimi 5 numeri dell'array
        lastFive = randomNumber.slice(-5)
        console.log(lastFive)
    }
}

