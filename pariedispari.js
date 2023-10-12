// l'utente sceglie pari o dispari
const userChoice = prompt('Pari o dispari?')
console.log(userChoice)

// l'utente inserisce un numero da 1 a 5
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
console.log(userNumber)

// generare un numero random per il pc da 1 a 5
const pcNumber = getRandomInt(5)
console.log(pcNumber)

// fare la somma dei due numeri
const numbersSum = sum(userNumber,pcNumber)
console.log(numbersSum)


// confrontare la somma con la scelta dell'utente
if (isNumberEven(numbersSum) === true && userChoice === 'pari') {
    console.log('Hai vinto!')
} else if (isNumberEven(numbersSum) === true && userChoice === 'dispari') {
    console.log('Hai perso!')
} else if (isNumberEven(numbersSum) !== true && userChoice === 'pari') {
    console.log('Hai perso!')
} else if (isNumberEven(numbersSum) !== true && userChoice === 'dispari') {
    console.log('Hai vinto!')
}






function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
  }

function sum(numA,numB) {
    return (numA + numB)
}

function isNumberEven(num) {
    if (num % 2 === 0){
        return true
    } else {
        return false
    }
}