import { Calculator } from "./calculator.js";

/****************************************************************************/

const swatiRender = document.getElementById("swapiData");

const numberButtons = document.querySelectorAll("[data-number]");
const opButtons = document.querySelectorAll("[data-operator]");

const equals = document.querySelector("[data-EQUALS]");
const RESET = document.querySelector("[data-RESET]");
const DEL = document.querySelector("[data-delete]");

const prevOprandText = document.getElementById("previous-operand");
const currentOprandText = document.getElementById("current-operand");
const currentOperatorElement = document.getElementById("current-Operator");

const calcualtor = new Calculator(
  currentOprandText,
  prevOprandText,
  currentOperatorElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calcualtor.appendToNumber(button.innerText);
  });
});

opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calcualtor.chooseOP(button.innerText);
  });
});

RESET.addEventListener("click", () => {
  calcualtor.clear();
});

equals.addEventListener("click", () => {
  calcualtor.compute();
  calcualtor.prevNumberElement.innerText = "";
  calcualtor.calcedWithEquals = true;

  getRadndomSWA()
    .then((data) => {
      swatiRender.innerText = data.name;
    })
    .catch(() => {
      swatiRender.innerText = "Ops, error occurred";
    });
});

DEL.addEventListener("click", () => {
  calcualtor.delete();
});

const getRadndomSWA = async () => {
  const types = ["people", "planets", "starships"];
  let dataType = types[Math.floor(Math.random() * types.length)];
  let dataNumber = Math.floor(Math.random() * 5 + 1);
  let URLrequest = `https://swapi.dev/api/${dataType}/${dataNumber}`;
  const response = await fetch(URLrequest);
  if (!response.ok) {
    return { name: "ops :(, error fetching from SWAPI" };
  }
  const data = await response.json();
  return data;
};
