let resultsBtn = document.getElementById("results-btn")
let results = document.getElementById("results")
let inputValue = document.getElementById("input-value")

resultsBtn.addEventListener("click" ,function(){
 console.log("you cicked me")
  let value = parseFloat (inputValue.value)
  console.log(value)
})

// 4. Do the conversions
// Example conversions you can code:
//    - meters to feet (multiply by 3.281)
//    - kilograms to pounds (multiply by 2.204)
//    - liters to gallons (multiply by 0.264)

// 5. Build a string that shows the results
// Example: "10 meters = 32.81 feet"

// 6. Display the string inside the #results div
// You can set the textContent or innerHTML

// 7. (Optional) Add input validation:
// If the user enters nothing or a negative number, show an error message.
