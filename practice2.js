let boxBtn = document.getElementById("box")

boxBtn.addEventListener("click", function() {
    console.log("i want to opent he box when its clicked")
})


// template strings/literals

const recipient = "James"
const sender = "Per Harald Borgen"

// Break the email string into multiple lines
const email = `Hey ${recipient}! 
How is it going? 
Cheers ${sender}`

console.log(email)


// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emjoi) {
//     // Rewrite the expression using template literals
//     welcomeEl.textContent = `${greeting} , ${name}  , ${emjoi}`
// }

// greetUser("Howdy", "James" ,"👋")


function add (sum1, sum2) {
    return sum1 + sum2
}

console.log(add (3,4) )
console.log(add (9,102) )


function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([2,3,5])

console.log(firstCard)