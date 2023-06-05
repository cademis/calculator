const display = document.querySelector(".display");

display.innerText = 0;

const keys = document.querySelector(".keys").querySelectorAll("button");

let cumulativeValue = 0;

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
      // check if not a number or decimal
      const regex = /[\/\*\-\+=\.]/;
      if (regex.test(key.innerText)) {
        let currentValue = +display.innerText;
        let operator = key.innerText;
        console.log(operator);
        const result = calculation[operator](cumulativeValue, currentValue);
        display.innerText = 0;
        // if a decimal point and a decimal exists on the displat, do nothing
      } else if (key.innerText === "." && display.innerText.includes(".")) {
        console.log("do nothing");

        // if anything else, concat the number to the display
      } else {
        display.innerText += key.innerText;
        display.innerText = +display.innerText;
      }
    });
  }
};

keyPress();
