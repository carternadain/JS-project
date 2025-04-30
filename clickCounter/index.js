let count = document.getElementById("count")
let btnClick = document.getElementById("click-btn")

let numOfClicks = 0

btnClick.addEventListener ("click", function() {
    
    numOfClicks++
    count.textContent = numOfClicks
    
    console.log("btnClick")
})