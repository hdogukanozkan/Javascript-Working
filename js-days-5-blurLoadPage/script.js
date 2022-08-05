const bg = document.querySelector(".bg")
const text = document.querySelector(".text")

let x = 0;

let int = setInterval(basla, 25)


function basla() {
    x++;
    
    text.innerHTML = (x + "%");

    if (x === 101) {
        clearInterval(int);
    }

    text.style.opacity = scale(x, 0, 100, 1, 0);
    bg.style.filter = "blur(" + scale(x, 0, 100, 30, 0) + "px)"
}



function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

