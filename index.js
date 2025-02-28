let firstCard = 10
let secondCard = 10
let array = [firstCard,secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let list = ["snhu comp science degree", "countertop jobs", "full stack web deveelopement"]
function startGame(){
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + array[0] + " " + array[1]
    sumEl.textContent = "Sum:" + sum
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
    let cardKing = 10
    sum += cardKing
    renderGame()
    array.push(cardKing)
}
