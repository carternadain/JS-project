let redLight = document.getElementById("red")
let greenLight = document.getElementById("green")
let yellowLight = document.getElementById("yellow")


let next = document.getElementById("next")

let lights = [redLight, greenLight, yellowLight]
let currentIndex = 0

lights[currentIndex].classList.add("on");

next.addEventListener("click", function(){
    lights[currentIndex].classList.remove("on")

    currentIndex=(currentIndex + 1 ) % lights.length

    lights[currentIndex].classList.add("on")
   
})