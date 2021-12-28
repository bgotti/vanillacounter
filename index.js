
let count = 0
let currentCount = document.getElementById("count-el")

function add() {
  count += 1
  currentCount.innerHTML = count
}

function substract() {
  count -= 1
  currentCount.innerHTML = count
}

function reset() {
  count = 0;
  currentCount.innerHTML = count
}