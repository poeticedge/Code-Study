let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById ("")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum" + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum" + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum" + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum" + result
}

//Blackjack section of Scrimba

//loops
let firstCard = 3
let secondCard = 7

let sum = firstCard + secondCard
console.log(sum)

if (sum < 21) {
    console.log('Do you want to draw a new card')
} else if (sum === 21) {
    console.log("winner")
} else if (sum > 21) {
    console.log('loser')
}

//removing the else if. 
let age = 22

if (age < 21) {
    console.log('not old enough')
} else {
    console.log('you may enter')
}

let age = 100

if (age < 100) {
    console.log('not eligible')
}else if (age === 100) {
    console.log('Happy bday')
} else {
    console.log('you already got a card you scoundral')
}

let firstCard = 3
let secondCard = 7

let sum = firstCard + secondCard
console.log(sum)

if (sum <= 20) {
    console.log('Do you want to draw a new card')
} else if (sum === 21) {
    console.log("winner")
} else {
    console.log('loser')
}
 
//you have to introduce a new variable based on the logic above in order to tell JS what to do next 
//Booleans
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20) {
    console.log('Do you want to draw a new card') 
} else if (sum === 21) {
    console.log("winner")
    hasBackJack = true
} else {
    console.log('loser')
    isAlive = false
}

//new
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;
let Message = ('')

if (sum <= 20) {
    message = 'Do you want to draw a new card' 
} else if (sum === 21) {
    message = 'winner'
    hasBackJack = true
} else {
    message = 'loser'
    isAlive = false
}

console.log(message)