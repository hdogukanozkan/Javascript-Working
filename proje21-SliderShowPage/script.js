const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");


left.addEventListener("mouseenter", runLeft)
left.addEventListener("mouseleave", quitLeft)
right.addEventListener("mouseenter", runRight)
right.addEventListener("mouseleave", quitRight)

function runLeft(){
    container.classList.add("hover-left");
}
function quitLeft(){
    container.classList.remove("hover-left");
}

function runRight(){
    container.classList.add("hover-right");
}

function quitRight(){
    container.classList.remove("hover-right");
}