const currentDisplayNumber = document.querySelector("[data-current-operand]");
const previousDisplayNumber = document.querySelector("[data-previous-operand]");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numberButtons = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const deleteButton = document.querySelector(".delete");

class Calculator {
  constructor(previousDisplayNumber, currentDisplayNumber) {
    this.previousDisplayNumber = previousDisplayNumber
    this.currentDisplayNumber = currentDisplayNumber
    this.clear()
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'X':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if(isNaN(integerDigits)){
      integerDisplay = ''
    } else{
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0})
    }
    if(decimalDigits != null){
      return `${integerDisplay}.${decimalDigits}`
    } else{
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentDisplayNumber.innerText =
    this.getDisplayNumber(this.currentOperand)
    if(this.operation != null) {
      this.previousDisplayNumber.innerText =
      `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else{
      this.previousDisplayNumber.innerText = ''
    }

  }

}
const calculator = new Calculator(previousDisplayNumber, currentDisplayNumber);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay();
  });
});

operators.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay();
  });
});

equal.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

clear.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});