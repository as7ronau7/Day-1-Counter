const numDisplay = document.getElementById('num-display');
let num = parseInt(numDisplay.innerText);
const btn = document.querySelectorAll("#btn");
let btnAttr = undefined;

btn.forEach(button => {
  button.addEventListener('click', () => {
    btnAttr = button.getAttribute("data-id")
    switch(btnAttr) {
      case 'reset':
        reset()
        break;
      case 'decrease':
        decrease()
        break;
      case 'increase':
        increase()
        break;
    }
  })
})

function reset() {
  num = 0;
  numDisplay.innerText = 0;
}

function decrease() {
  num -= 1;
  numDisplay.innerText = num;
}

function increase() {
  num += 1;
  numDisplay.innerText = num;
}