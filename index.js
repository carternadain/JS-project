let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

let message = ""

function startGame() {
    if (sum <= 20){
        message = "do you want to draw again?"
       
    } else if (sum === 21){
       message ="you've got blackjack!"
        hasBlackJack = true
    } else {
        message ="you lost!"
        isAlive = false
    
    }
    
    console.log(message)
}


