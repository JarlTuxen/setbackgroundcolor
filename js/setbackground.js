let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

let bdy = document.querySelector("body");
console.log(bdy);
let inpColorValue = document.querySelector(".inpColorValue");

const inpColorPicker = document.getElementById("inpColorPicker");

const pbFontIncrease = document.querySelector(".pbFontIncrease");
const pbFontDecrease = document.querySelector(".pbFontDecrease");

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

pbCol.addEventListener('click', setBackgroundColor);

document.addEventListener('keyup', setBackgroundColor);

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

inpColorPicker.addEventListener('input', useColorPicker);

function increaseFont(element){
    let fontSize = element.style.fontSize;
    console.log(fontSize);
    element.style.fontSize = 10 + 'px';
    fontSize = element.style.fontSize;
    console.log(fontSize);
}
const pTags = document.getElementsByTagName('p');
console.log(pTags);

const pArray = Array.from(pTags);
pArray.forEach(increaseFont);

function increase(){
    pArray.forEach(element => element.style.fontSize = (parseFloat(element.style.fontSize)+1) + 'px');
}

function decrease() {
    pArray.forEach(element => element.style.fontSize = (parseFloat(element.style.fontSize)-1) + 'px');
}

pbFontIncrease.addEventListener('click', increase);
pbFontDecrease.addEventListener('click', decrease);
