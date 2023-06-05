const display = document.querySelector(".display");

display.innerText = 0;

const keys = document.querySelector(".keys").querySelectorAll("button");

let currentValue = 0;
let cumulativeValue = "0"; // keep this as a string to differentate between a default and a input value
let tempValue = 0;
let operator = "+";
let lastKeyPress = 0;

const calculation = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b === 0 ? "Error: Division by zero" : a / b),
};

// handle click
const keyPress = () => {
  for (let key of keys) {
    key.addEventListener("click", () => {
      console.log(typeof currentValue);
      const regex = /[-*+\/]/;
      if (key.innerText === "=") {
        console.log("A");
        // check if the current key press is a equal sign
        // if so calculate the new cumulativeValue
        // output cumulativeValue on the display
        cumulativeValue = calculation[operator](cumulativeValue, currentValue);
        display.innerText = cumulativeValue;
        lastKeyPress = key.innerText;
      } else if (regex.test(key.innerText)) {
        console.log("B");
        // check if an operator
        // check if cumulativeValue is a number
        // if both are true, calculate new cumulativeValue and d
        // if cumulativeValue a string, do nothing
        console.log(`cumulativeValue type: ${typeof cumulativeValue}`);
        console.log(`currentValue type: ${typeof currentValue}`);
        if (typeof cumulativeValue === "number") {
          console.log(`F`);

          cumulativeValue = calculation[operator](
            cumulativeValue,
            currentValue
          );
          console.log(`cumulativeValue = ${cumulativeValue}`);
        } else {
          console.log("G");
          cumulativeValue = currentValue;
        }
        lastKeyPress = key.innerText;
      } else if (key.innerText === "." && display.innerText.includes(".")) {
        console.log("C");
        // if decimal point is clicked and a decimal exists on the display, throw a console.log error
        console.log("only one period allowed");
      } else if (regex.test(lastKeyPress)) {
        console.log("D");
        // check if the current key press is a number or period && last keypress was an operator
        // reset the display value and display the new key's innerText.
        // store the operator
        // store the currentValue
        display.innerText = tempValue;
        display.innerText = key.innerText;
        operator = lastKeyPress;
        currentValue = +display.innerText;
        cumulativeValue = +cumulativeValue;
        tempValue = +display.innerText;
        lastKeyPress = key.innerText;
        // currentValue = +display.innerText;
        // console.log(cumulativeValue, currentValue);
        // cumulativeValue = calculation[operator](cumulativeValue, currentValue);
      } else {
        console.log("E");
        // if the current key press is a number or period && the last keypress was a number or a period, concat the new key.innerText
        // store result into currentValue
        // store the value into lastKeyPress
        display.innerText += key.innerText;
        if (key.innerText !== ".") {
          display.innerText = +display.innerText;
        }
        currentValue = +display.innerText;
        lastKeyPress = key.innerText;
      }
    });
  }
};

keyPress();
