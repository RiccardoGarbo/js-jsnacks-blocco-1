/* 
 1-Creo un array con gli elementi in 'frigorifero'
 2-Aggiungo la pesca al 'frigorifero'
 3-Verico se anche il cocomero è presente nel 'frigorifero'
 4-Se è presente posso fare il coctail
 4.5- Altrimenti vado a comprarlo

*/



//  Creo  l'array con la frutta del frigorifero
const fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(fridge)

// Aggiungo la pesca all'array della frutta
const pesca = 'pesca';
fridge.push(pesca);
console.log(pesca)

// Verifico se nell'array fridge c'è il cocomero 
let cocomero = false;

for (let i = 0; i < fridge.length; i++) {
    if (fridge[i] === 'cocomero') {
        cocomero = true;

    }
}
console.log(cocomero)

// Stampo in console il risultato
if (cocomero) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}








