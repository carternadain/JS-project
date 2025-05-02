let toggleBtn = document.getElementById("toggle-btn")


toggleBtn.addEventListener("click", function(){
    console.log("it was clicked")
    // toggleBtn = document.body.classList.toggle("dark-mode")
    document.body.classList.toggle("dark-mode")
})