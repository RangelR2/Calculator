const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const display = document.getElementById('display');
let a = 5;

/*
numberButtons.forEach((button) =>
  button.addEventListener('click', () => {
    alert(numberButtons);
  })
  
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))

)
*/

numberButtons.add

function showDisplay(){
  const h3 = document.createElement('h3');
        h3.classList.add('h3');
        h3.textContent = a;
        h3.style.color = 'blue';
        display.appendChild(h3);
}

showDisplay();