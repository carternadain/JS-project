let guessButton = document.getElementById("guessButton")
let resetButton = document.getElementById("resetButton")
let guessCount = document.getElementById("guessCount")
let answer = document.getElementById("guessInput")
let randomNumber = Math.floor(Math.random() * 10 + 1)
let feedback = document.getElementById("feedback")


let count = 0


guessButton.addEventListener("click", function(){
    count++
    guessCount.textContent = "Guesses: " + count

    let userGuess = parseInt(answer.value)

    if (userGuess === randomNumber) {
      feedback.textContent = "🎉 Guessed right!"
    } else if (userGuess < randomNumber) {
      feedback.textContent = "📉 Too low!"
    } else {
      feedback.textContent = "📈 Too high!"
    }    
})


resetButton.addEventListener("click", function(){
    count = 0
    guessCount.textContent = "Guesses: 0"
    answer.value = ""
    feedback.textContent = ""
    randomNumber = Math.floor(Math.random() * 100 + 1)
    
})