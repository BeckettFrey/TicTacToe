const btns = document.querySelectorAll("button");

let count = 1;

console.log(btns);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => choice(i));
}

function choice(rad) {
  if (btns[rad].innerText === "-") {
    count++;
    console.log(count);
    if (count % 2 == 0) {
      btns[rad].innerHTML = "X";
    } else {
      btns[rad].innerHTML = "O";
    }
  }
}
