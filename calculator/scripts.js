/* ELEMENTS */

const resultDisplay = document.getElementById("result-display");
const operandsDisplay = document.getElementById("operands-display");

const resultDiv = document.getElementById("result");
const resultIcon = document.getElementById("result-icon");

/* CLASS HIDE */

function addClassHide() {
  resultDiv.style.justifyContent="right";
  resultIcon.classList.add('hide');
}

addClassHide();

function removeClassHide() {
  resultDiv.style.justifyContent="space-between";
  resultIcon.classList.remove('hide');
}

/* INSERT NUMBER */

function insert(num) {
  operandsDisplay.innerHTML += num;
  resultDisplay.innerHTML = num;
}

/* CLEAR */

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
    
    if(operands.length == 1) {
      allClear();
    }
  }
}

/* POSITIVE-NEGATIVE */

function positiveNegative() {
  let resultValue = parseFloat(resultDisplay.innerHTML);
  let operandsValue = operandsDisplay.innerHTML;

  if (resultValue >= 0) {
    operandsDisplay.innerHTML = "-" + operandsValue;
    calculate();
  } else {
    operandsDisplay.innerHTML = Math.abs(parseFloat(operandsValue));
    calculate();
  }
}

/* CALCULATE */

function calculate() {
  let operands = operandsDisplay.innerHTML;
  
  operands = operands.replace("%", "/100");
  operands = operands.replaceAll(",", ".");

  if (operands) {
    resultDisplay.innerHTML = eval(operands).toString().replace(".", ",")
    removeClassHide();
  } else {
    resultDisplay.innerHTML = "0";
  }
}
