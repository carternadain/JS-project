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


const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emjoi) {
    // Rewrite the expression using template literals
    welcomeEl.textContent = `${greeting} , ${name}  , ${emjoi}`
}

greetUser("Howdy", "James" ,"👋")