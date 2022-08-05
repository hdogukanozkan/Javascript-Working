var btn = document.querySelector('#btn');
var fontSize = document.querySelector('#size');
var fontColor = document.querySelector('#color')
var div = document.querySelector("div");

var paragraf = document.querySelector('p');




btn.addEventListener('click', myFunction);
function myFunction() {
    paragraf.style.fontSize = fontSize.value + "px";
    paragraf.style.color = fontColor.value;
    div.style.height = "auto";
}


/*

var btn = document.querySelector('#btn');

btn.addEventListener('click', myFunction);

function myFunction() {
     
}*/