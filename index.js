let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20){
    console.log("do you want to draw again?")
   
} else if (sum === 21){
    console.log("you've got blackjack!")
    hasBlackJack = true
} else {
    console.log("you lost!")
    isAlive = false
}

console.log(isAlive)