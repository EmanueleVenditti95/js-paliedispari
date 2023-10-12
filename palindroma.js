// chiedere una parola all'utente
const userInput = prompt('Inserisci una parola e ti dirò se è palindroma')

// definire una variabile per verificare che la parola inserita sia palindroma
function isThisWordPalindrome(userInput) {

    // eseguire in un ciclo for la prima metà della parola inserita
    for (let i=0; i < userInput.length / 2; i++){

        //confrontare le lettere della prima metà della parola con quelle della seconda
        if (userInput[i] === userInput[(userInput.length - 1) - i]){
            return 'La tua parola è un palindromo'

        } else {

            return 'La tua parola non è un palindromo'

        }              
    }

}

// invocare la funzione
const result = isThisWordPalindrome(userInput.toLowerCase())

console.log(result)