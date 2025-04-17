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

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(user) {
    welcomeEl.textContent = "hello there," + user     
}

greetUser(user)