const resultDisplay = document.getElementById("result-display");
const operandsDisplay = document.getElementById("operands-display");

const resultDiv = document.getElementById("result");
const resultIcon = document.getElementById("result-icon");

function addClassHide() {
  resultDiv.style.justifyContent="right";
  resultIcon.classList.add('hide');
}

addClassHide();

function removeClassHide() {
  resultDiv.style.justifyContent="space-between";
  resultIcon.classList.remove('hide');
}

function insert(num) {
  operandsDisplay.innerHTML += num;
  resultDisplay.innerHTML = num;
}

function allClear() {
  operandsDisplay.innerHTML = "";
  resultDisplay.innerHTML = "0";

  addClassHide();
}

function clearEntry() {
  let result = resultDisplay.innerHTML;
  resultDisplay.innerHTML = result.substring(0, result.length - 1);

  if(result.length == 0) {
    let operands = operandsDisplay.innerHTML;
    operandsDisplay.innerHTML = operands.substring(0, operands.length - 1);
    
    if(operands.length == 0) {
      allClear();
    }
  }
}

function calculate() {
  let operands = operandsDisplay.innerHTML;

  if (operands) {
    resultDisplay.innerHTML = eval(operands);
    removeClassHide();
  } else {
    resultDisplay.innerHTML = "0";
  }
}
