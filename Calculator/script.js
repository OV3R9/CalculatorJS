const button = document.getElementById("equals");

let operatorsUsed = 0;
let equation = "";
function Equals() {
  let element = document.getElementById("calcs");
  let text = element.textContent;
  try {
    equation = eval(text);
    element.textContent = equation;
  } catch {
    element.textContent = "Error!";
  }
}

function AppendDisplay(x) {
  if (equation != "") {
    let element = document.getElementById("calcs");
    element.textContent = "";
    equation = "";
  }
  let text = document.getElementById("calcs");
  if (
    (text.textContent[text.textContent.length - 1] == "-" ||
      text.textContent[text.textContent.length - 1] == "+" ||
      text.textContent[text.textContent.length - 1] == "/" ||
      text.textContent[text.textContent.length - 1] == "*") &&
    (x == "+" || x == "-" || x == "*" || x == "/")
  ) {
    return 0;
  }
  text.textContent += x;
}

function Clear() {
  let text = document.getElementById("calcs");
  text.textContent = "";
}
