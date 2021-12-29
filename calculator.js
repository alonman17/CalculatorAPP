class Calculator {
  currentNumberElement;
  prevNumberElement;
  currentOP;
  calcedWithEquals = false;
  constructor(currentNumberElement, prevNumberElement, currentOperatorText) {
    this.currentNumberElement = currentNumberElement;
    this.prevNumberElement = prevNumberElement;
    this.currentOperatorText = currentOperatorText;
    this.currentOP = null;
    this.clear();
  }
  clear() {
    this.currentNumberElement.innerText = "";
    this.prevNumberElement.innerText = "";
    this.currentOperatorText.innerText = "";
  }

  appendToNumber(number) {
    if (this.calcedWithEquals) {
      this.prevNumberElement.innerText = this.currentNumberElement.innerText;
      this.currentNumberElement.innerText = "";
      this.calcedWithEquals = false;
    }
    if (number === "." && this.currentNumberElement.innerText.includes(".")) {
      return;
    }
    this.currentNumberElement.innerText =
      this.currentNumberElement.innerText + number;
  }

  chooseOP(op) {
    if (this.currentNumberElement.innerText === "") return;
    if (this.prevNumberElement !== "") {
      this.compute();
      this.calcedWithEquals = false;
    }
    console.log(this.currentOperatorText);
    console.log(op);
    this.currentOperatorText.innerText = op;
    this.prevNumberElement.innerText = this.currentNumberElement.innerText;
    this.currentOP = op;
    this.currentNumberElement.innerText = "";
  }

  compute() {
    let result;
    if (this.currentOP === null) return;

    switch (this.currentOP) {
      case "+":
        result =
          Number(this.prevNumberElement.innerText) +
          Number(this.currentNumberElement.innerText);
        break;
      case "-":
        result =
          Number(this.prevNumberElement.innerText) -
          Number(this.currentNumberElement.innerText);
        break;
      case "X":
        result =
          Number(this.prevNumberElement.innerText) *
          Number(this.currentNumberElement.innerText);
        break;
      case "/":
        if (
          isNaN(this.currentNumberElement.innerText) ||
          this.currentNumberElement.innerText === 0
        )
          return;
        result =
          Number(this.prevNumberElement.innerText) /
          Number(this.currentNumberElement.innerText);
        break;
      default:
        break;
    }
    this.currentNumberElement.innerText = String(result);
    this.currentOperatorText.innerText = "";
    this.currentOP = null;
  }

  delete() {
    this.currentNumberElement.innerText =
      this.currentNumberElement.innerText.slice(0, -1);
  }
}
export { Calculator };
