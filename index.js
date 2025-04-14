
// declare variables for scope of project
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// let leads for locals storage save in browser 
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// create truthy value for local storage
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}
 



// listner for when user clicks button , then fires the function of the empty array myleads
// and adds the input value the user puts 
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
   localStorage.setItem("myLeads",JSON.stringify(myLeads))

    renderLeads()

    console.log( localStorage.getItem("myLeads") )
})

// function to renderleads , loop to iterate through the array
function renderLeads () {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) { 
        listItems +=
        `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `
    }
    
    ulEl.innerHTML = listItems
}


