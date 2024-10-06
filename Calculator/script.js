const button = document.getElementById("equals");
const list = document.getElementById("list");
const container = document.getElementById("containerTwo");

let operatorsUsed = 0;
let equation = "";
function Equals() {
  let element = document.getElementById("calcs");
  let text = element.textContent;
  try {
    let listItem = document.createElement("li");
    equation = eval(text);
    equation = equation.toFixed(2);
    let value = document.createTextNode(`${text} = ${equation}`);
    listItem.appendChild(value);
    element.textContent = equation;
    list.insertBefore(listItem, list.firstChild);
  } catch {
    element.textContent = "Error!";
  }
}

function AppendDisplay(x) {
  let text = document.getElementById("calcs");
  if (equation != "" || text.textContent == "Error!") {
    text.textContent = "";
    equation = "";
  }
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

isFirst = true;

function AddBraces() {
  let text = document.getElementById("calcs");
  if (isFirst) {
    text.textContent += "(";
  } else {
    text.textContent += ")";
  }
  isFirst = !isFirst;
}

function ClearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

isHidden = false;

function ShowList() {
  if (!isHidden) {
    container.style.width = "0px";
    container.style.border = "none";
    container.style.padding = "0px";
  } else {
    container.style.width = "500px";
    container.style.border = "2px solid white";
    container.style.padding = "10px";
  }
  isHidden = !isHidden;
}
