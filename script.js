let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;
function homeAdd1() {
  count = count + 1;
  countEl.textContent = count;
}
function homeAdd2() {
  count = count + 2;
  countEl.textContent = count;
}
function homeAdd3() {
  count = count + 3;
  countEl.textContent = count;
}
function homeReset() {
  count = 0;
  countEl.textContent = count;
}

let countEl2 = document.getElementById("count2-el");
console.log(countEl2);

let count2 = 0;
function guestAdd1() {
  count2 = count2 + 1;
  countEl2.textContent = count2;
}
function guestAdd2() {
  count2 = count2 + 2;
  countEl2.textContent = count2;
}
function guestAdd3() {
  count2 = count2 + 3;
  countEl2.textContent = count2;
}
function guestReset() {
  count2 = 0;
  countEl2.textContent = count2;
}
