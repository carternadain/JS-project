let newQuote = document.getElementById("new-quote")
let quoteDisplay = document.getElementById("quote")
let quotes = ["better in the sun","always a new leaf on the other side","lifes full of ups and downs"]

newQuote.addEventListener("click" ,function(){
    let randomQuote = Math.floor(Math.random() * quotes.length)
    quoteDisplay.textContent = "quote of the day: " + quotes[randomQuote]
    console.log("it worked")
})