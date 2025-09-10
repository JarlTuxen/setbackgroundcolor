const colArray = ["red", "green", "yellow", "blue", "orange"];
const pbFillDropdown = document.getElementById("pbFillDropDown");
const ddColor = document.getElementById("ddColor");
const bdy = document.querySelector("body");

function fillDropdown(item) {
    const el = document.createElement("option");
    el.textContent = item;
    ddColor.appendChild(el);
}

function addColors (btn) {
    ddColor.innerHTML=0;
    colArray.forEach(fillDropdown);
    //console.log(document.all);
    console.log(document.querySelectorAll("*"));
}

pbFillDropdown.addEventListener('click', addColors);

function setBackgroundColor() {
    const selindex = ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex];
    const color = selectedOption.innerText;
    bdy.style.backgroundColor = color;
}

ddColor.addEventListener('change', setBackgroundColor);

