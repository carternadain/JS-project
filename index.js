let firstCard = getRandomCard()
let secondCard = getRandomCard()
let array = [firstCard,secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let list = ["snhu comp science degree", "countertop jobs", "full stack web deveelopement"]

function getRandomCard(){
    return 5
}


function startGame(){
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for(i = 0; i < array.length; i++){
       cardsEl.textContent += array[i] + " "
    }

    if (sum <= 20){
        message = "do you want to draw again?"
       
    } else if (sum === 21){
       message ="you've got blackjack!"
        hasBlackJack = true
    } else {
        message ="you lost!"
        isAlive = false
    
    }
    
     messageEl.textContent = message
   
}

function newCard() {
    let cardKing = getRandomCard()
    sum += cardKing
    renderGame()
    array.push(cardKing)
}


    // i can be reused think of it as var and only functions inside the curly brackets
            //
// for (let i = 10; i < 110; i += 10){
//     console.log(i)
// }


// let cards = [7, 3, 9]
// for (let i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }


// function totalRaceTime() {
//    return player1Time + player2Time

// }

// let totalTime = totalRaceTime()
// console.log(totalRaceTime)

// let randomNumnber = Math.floor( Math.random() * 6) + 1

// console.log(randomNumnber)

function rollDice() {
   let randomNumnber = Math.floor( Math.random() * 6) + 1
   return randomNumnber
}

console.log(rollDice())