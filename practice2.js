// let boxBtn = document.getElementById("box")

// boxBtn.addEventListener("click", function() {
//     console.log("i want to opent he box when its clicked")
// })


// // template strings/literals

// const recipient = "James"
// const sender = "Per Harald Borgen"

// // Break the email string into multiple lines
// const email = `Hey ${recipient}! 
// How is it going? 
// Cheers ${sender}`

// console.log(email)


// // const welcomeEl = document.getElementById("welcome-el")

// // function greetUser(greeting, name, emjoi) {
// //     // Rewrite the expression using template literals
// //     welcomeEl.textContent = `${greeting} , ${name}  , ${emjoi}`
// // }

// greetUser("Howdy", "James" ,"👋")


// function add (sum1, sum2) {
//     return sum1 + sum2
// }

// console.log(add (3,4) )
// console.log(add (9,102) )


// function getFirst(arr) {
//     return arr[0]
// }

// let firstCard = getFirst([2,3,5])

// console.log(firstCard)





// // SETTING THE STAGE
// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(player + " got " + points + " points and won the " + game + " game!")
// } else {
//     console.log("The winner is " + opponent + "! " + player + " lost the game")
// }

// // Go through all variables and decide if they should be let or const
// // Change the console logs to use template strings instead of double quotes



// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument




// function hello (arr) {
//     for (let i = 0; i < arr.length; i++)
//     console.log(arr[i])
   
//  }
//  hello(myCourses)



 // Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
// localStorage.setItem("myCat", "Tom");
// const cat = localStorage.getItem("myCat");
// localStorage.removeItem("myCat");

// console.log(localStorage)


// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

// let button = document.getElementById("score")

// button.addEventListener("click",function (){
//     console.log(data)
// })


// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both gerateSentence(desc, arr) {
    // function generateSentence(desc, arr) {
    //     let baseString = `The ${arr.length} ${desc} are `
    //     const lastIndex = arr.length - 1
    //     for (let i = 0; i < arr.length; i++) {
    //         if (i === lastIndex) {
    //             baseString += arr[i]
    //         } else {
    //             baseString += arr[i] + ", "   
    //         }
    //     }
    //     return baseString
    // }
    
    // const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
    // console.log(sentence)



// id = container 
// get the id transfer to inner html loop through array with for loop
// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.


const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]



function imgRender() {
    
    for( let i = 0; i < imgs.length; i++ )
    console.log(imgs[i])
    // let image = getElementById("container")
}

imgRender()