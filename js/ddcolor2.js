const colArray2 = [["red", "#ff0000"], ["green","#00ff00"], ["yellow", "#ffff00"], ["blue", "#0000ff"], ["purple", "#1f35a9"]];

const colorObjects = [{"name" : "red","id" : "#ff0000"}, {"name" : "green","id" : "#00ff00"}, {"name" : "yellow","id" : "#ffff00"}, {"name" : "purple", "id" : "#1f35a9"}]

const pbFillDropdown2 = document.getElementById("pbFillDropDown2");
const ddColor2 = document.getElementById("ddColor2");

function filldropdownObj(item) {
    const el = document.createElement("option");
    console.log(item);
    el.textContent = item.name;
    el.value = item.id;
    ddColor2.appendChild(el);
}

function fillDropdown2(item) {
    const el = document.createElement("option");
    el.textContent = item[0];
    el.value = item[1];
    ddColor2.appendChild(el);
}

function addColors2 (btn) {
    ddColor2.innerHTML=0;
    colArray2.forEach(fillDropdown2);
    //console.log(document.all);
    console.log(document.querySelectorAll("*"));
}

function addColorsObject(btn){
    ddColor2.innerHTML = "";
    colorObjects.forEach(fillDropdownObjects);
}

function fillDropdownObjects(item) {
    const el = document.createElement("option");
    el.textContent = item.name;
    el.value = item.id;
    ddColor2.appendChild(el);
}

function setBackgroundColor2(ev) {
    console.log(ev);
    const selindex = ddColor2.selectedIndex;
    const selectedOption = ddColor2.options[selindex];
    const color = selectedOption.value;
    bdy.style.backgroundColor = color;
}

function setBackgroundColorObjects(ev) {
    console.log(ev);
    const selindex = ddColor2.selectedIndex;
    const selectedOption = ddColor2.options[selindex];
    const color = selectedOption.value;
    bdy.style.backgroundColor = color;
}

//pbFillDropdown2.addEventListener('click', addColors2);
pbFillDropdown2.addEventListener("click", addColorsObject);
ddColor2.addEventListener("change", setBackgroundColorObjects);