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



function getRandomCard(){
    let randomNumnber = Math.floor(Math.random()*13) + 1
     if (randomNumnber > 10){
        return 10
    }
    else if (randomNumnber === 1){
        return 11
    } else {
        return randomNumnber
    }
   
   
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


   