
// declare variables for scope of project
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

// let leads for locals storage save in browser 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// create truthy value for local storage
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
 
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// listner for when user clicks button , then fires the function of the empty array myleads
// and adds the input value the user puts 
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
   localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads)

    console.log( localStorage.getItem("myLeads") )
})

// function to renderleads , loop to iterate through the array
function render (leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) { 
        listItems +=
        `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    }
    // innerhtml to show html on page 
    ulEl.innerHTML = listItems
}


