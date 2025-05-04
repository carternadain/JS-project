let billAmount = document.getElementById("bill");
let tipPercent = document.getElementById("tip");
let total = document.getElementById("total");
let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  let billValue = Number(billAmount.value);
  let tip = Number(tipPercent.value);

  if (isNaN(billValue) || isNaN(tip) || billValue <= 0) {
    total.textContent = "Please enter valid numbers.";
    return;
  }

  let totalAmount = billValue + (billValue * tip / 100);
  total.textContent = "$" + totalAmount.toFixed(2);
});
