let guessButton = document.getElementById("guessButton")
let resetButton = document.getElementById("resetButton")
let guessCount = document.getElementById("guessCount")
let answer = document.getElementById("guessInput")

guessButton.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * 10 + 1)
    if (randomNumber == answer) {
        console.log("guessed right!")
    }
        else {
            console.log("wrong")
        }
    console.log("it worked")
})


resetButton.addEventListener("click", function(){
    console.log("it worked")
})