const display = document.querySelector(".display");

display.innerText = 0;

const keys = document.querySelector(".keys").querySelectorAll("button");

let currentValue = "";
let cumulativeValue;
let interimValue = 0;
let operator = "+"; // initially set to run the first operation as an addition when the first key is pressed
let lastKeyPress;

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
      const regex = /[-*+\/]/;
      if (key.innerText === "=") {
        // check if the current key press is a equal sign
        // if so, output the cumlativeValue on the display
        cumulativeValue = interimValue;
        display.innerText = cumulativeValue;
      } else if (regex.test(key.innerText)) {
        operator = key.innerText; // set the operator to use in next calculation
        currentValue = "";
      } else if (regex.test(lastKeyPress)) {
        // if the last key press was a operator
        currentValue = ""; //reset the currentValue
        currentValue += key.innerText; // concat current value
        calculator(); // run the calculation based on the previously set operator
      } else {
        currentValue += key.innerText; // concat current value
        calculator(); // runs the calculation based on the initial or previously set operation
      }
      lastKeyPress = key.innerText;
      debugging();
    });
  }
};

const calculator = () => {
  console.log(typeof interimValue, typeof +currentValue);
  interimValue = +calculation[operator](interimValue, +currentValue);
};

const debugging = () => {
  console.log(
    `interimValue: ${interimValue}, cumulativeValue: ${cumulativeValue}, currentValue: ${currentValue}, operator: ${operator}, lastKeyPress: ${lastKeyPress}} `
  );
};

function resetPage() {
  location.reload();
}

keyPress();
