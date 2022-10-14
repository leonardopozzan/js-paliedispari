// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindromo(){
    //catturo l'input dell'utente e il div dove stampo il risultato
    const word = document.querySelector('#word').value.toLowerCase().trim();
    const result = document.querySelector('#result');
    //svuoto il div risultato
    result.innerHTML = '';

    const wordReversed = word.split('').reverse().join('');

    console.log(word, wordReversed)
    if( wordReversed == word){
        result.innerHTML = `${word} è un parola palindroma`
    }else{
        result.innerHTML = `${word} non è un parola palindroma`
    }
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function play(){
    //catturo gli input dell'utente e il div dove stampo il risultato
    const oddEven = document.querySelector('#odd-even').value.toLowerCase().trim();
    const userNumber = parseInt(document.querySelector('#user-number').value);
    const result = document.querySelector('#result-2');
    //svuoto il div risultato
    result.innerHTML = '';
    //controllo che l'utente abbia inserito i dati corretti
    if (oddEven != 'pari' && oddEven != 'dispari' || !(0 <= userNumber <= 5)){
        result.innerHTML = 'Inserisci solo pari o dispari e scegli un numero compreso tra 0 e 5'
        return;
    }

    //creo il numero random del pc e lo sommo con quello dell'utente
    const pcNumber = Math.floor(Math.random() * 5) + 1
    const somma = userNumber + pcNumber;

    //stampo il messaggio di vittoria o sconfitta nell'HTML
    result.innerHTML = `Utente ha scelto: ${oddEven}  Utente: ${userNumber} PC: ${pcNumber} Somma: ${somma} `
    if (oddEven == 'pari'&& somma%2 == 0 || oddEven == 'dispari' && somma%2 != 0){
        result.innerHTML += "L'utente ha Vinto";
    }else{
        result.innerHTML += "Il PC ha Vinto";
    }
}