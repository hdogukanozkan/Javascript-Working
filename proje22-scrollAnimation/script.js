const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox)

function checkBox() {
    const inHeight = window.innerHeight * (8/10);

    

    boxes.forEach(box => {

        const topBox = box.getBoundingClientRect().top;

        if (topBox < inHeight) {
            box.classList.add("show")
        }
        else {
            box.classList.remove("show")
        }

    });


}