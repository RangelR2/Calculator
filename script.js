let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

numberButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number){
  currentNum += number;
  currentDisplayNumber.textContent = currentNum;
}

/*

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const display = document.getElementById('display');
let a = 5;

numberButtons.forEach((button) =>
  button.addEventListener('click', () => {
    alert(button);
  })
  
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => {
    alert('aoba');
    setOperation(button.textContent)})
    
)

function showDisplay(){
  const h3 = document.createElement('h3');
        h3.classList.add('h3');
        h3.textContent = a;
        h3.style.color = 'blue';
        display.appendChild(h3);
}

showDisplay();

*/