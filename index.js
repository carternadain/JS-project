let player = {
    name: "Carter",
    chips: 50
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


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
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for(i = 0; i < cards.length; i++){
       cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum:" + sum
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
    if(isAlive === true && hasBlackJack === false ){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
   
}

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }

// let likesDocumentaries = true
// let likesStartups = false
// // Create two boolean variables, likesDocumentaries and likesStartups
// // Use an OR statement (||) to call recommendMovie() if either of those variables are true
// if (likesDocumentaries === true || likesStartups === true){
//     recommendMovie()
// }


// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }


// / Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }


// console.log( course.length )


// function carterCat(){
    //body of function 
    //how to call a function ()
// }

// let array = [dog , cat , zebra, rhino]

// console.log(array)

// for (i = 0; i + array; i++){
//setting   sorting the array  increamenting array how we sort  
//the value of i
// }

// grabbing element by id from html and returning it to text in JS
// let getElementById = textContent

// let airbnbStays = {
//     title: "live like a king" ,
//     ratings:"5 stars",
//     guests: "up to four people",
//     isSuperHost:true,
//     images:["img/castle1.png", "img/supercastle.png"]


// }

// console.log(airbnbStays.title)
// console.log(airbnbStays.isSuperHost)



let personObject = {
    name:"Carter " ,
    age: 28,
    county: " America"
}

function logData() {
   let data = personObject.name + personObject.age + personObject.county
    console.log(data)

}

logData()