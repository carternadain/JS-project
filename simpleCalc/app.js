let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")


let addBtn = document.getElementById("add-btn")
let subtractBtn = document.getElementById("subtract-btn")
let multiplyBtn = document.getElementById("multiply-btn")
let divideBtn = document.getElementById("divide-btn")

let result = document.getElementById("result")


addBtn.addEventListener("click", function(){
    console.log("working")
    let value1 = Number(num1.value)
    let value2 = Number(num2.value)
    result.textContent = "Result: " + (value1 + value2)
})

subtractBtn.addEventListener("click", function(){
    let value1 = Number(num1.value)
    let value2 = Number(num2.value)
    result.textContent = "Result: " + (value1 - value2)
})


multiplyBtn.addEventListener("click", function(){
    let value1 = Number(num1.value)
    let value2 = Number(num2.value)
    result.textContent = "Result: " + (value1 * value2)
})

divideBtn.addEventListener("click", function(){
    let value1 = Number(num1.value)
    let value2 = Number(num2.value)
    result.textContent = "Result: " + (value1 / value2)
})