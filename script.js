
let display = document.getElementById('display');

function append(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('%', '/100'));
  } catch {
    display.innerText = "Error";
  }
}

function toggleSign() {
  if (display.innerText.charAt(0) === '-') {
    display.innerText = display.innerText.slice(1);
  } else if (display.innerText !== "0") {
    display.innerText = '-' + display.innerText;
  }
}

function calculateFunction(func) {
  let value = parseFloat(display.innerText);
  if (isNaN(value)) return;
  let result = 0;
  switch (func) {
    case 'sin': result = Math.sin(value * Math.PI / 180); break;
    case 'cos': result = Math.cos(value * Math.PI / 180); break;
    case 'tan': result = Math.tan(value * Math.PI / 180); break;
    case 'sqrt': result = Math.sqrt(value); break;
    case 'log': result = Math.log10(value); break;
    case 'ln': result = Math.log(value); break;
    case 'square': result = Math.pow(value, 2); break;
    case 'pi': result = Math.PI; break;
  }
  display.innerText = parseFloat(result.toFixed(8));
}
