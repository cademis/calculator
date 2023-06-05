const display = document.querySelector(".display");

display.innerText = 0;

const keys = document.querySelector(".keys").querySelectorAll("button");

let currentValue = "0";
let cumulativeValue = 0;
let tempValue = 0;
let operator = "+";

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
      // check if an operator
      const regex = /[-*+=\/]/;
      if (regex.test(key.innerText)) {
        console.log(key.innerText);
        // cumulativeValue = cumulativeValue + currentValue;
        tempValue = 0;
        operator = key.innerText;
        // const result = calculation[operator](cumulativeValue, currentValue);
        // display.innerText = 0;
        // if decimal point is clicked and a decimal exists on the display, do nothing
      } else if (key.innerText === "." && display.innerText.includes(".")) {
        console.log("only one period allowed");

        // if anything else, concat the number to the display
      } else {
        display.innerText = tempValue;
        display.innerText += key.innerText;
        if (key.innerText !== ".") {
          display.innerText = +display.innerText;
        }
        tempValue = display.innerText;
        currentValue = +display.innerText;
        console.log(cumulativeValue, currentValue);
        cumulativeValue = calculation[operator](cumulativeValue, currentValue);
        display.innerText = cumulativeValue;
      }
    });
  }
};

keyPress();
