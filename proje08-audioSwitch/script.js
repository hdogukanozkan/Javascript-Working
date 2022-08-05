document.addEventListener("keydown", bastim);
document.addEventListener("keypress", calistir);
document.addEventListener("keyup", cektim);

var box = document.querySelectorAll(".box");
var audio = new Audio("audio/horse.ogv");

function sounds(){
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function calistir(e) {

    switch (e.keyCode) {
        case 119:
            box.forEach(element => {
                element.classList.remove("bastin")
            });
            document.querySelector('.w').classList.add('bastin');
            console.log(e.key + " bastınız");
            sounds()   

            break;
        case 97:
            box.forEach(element => {
                element.classList.remove("bastin")
            });
            document.querySelector('.a').classList.add('bastin');
            console.log(e.key + " bastınız");
            sounds()
            break;
        case 115:

            box.forEach(element => {
                element.classList.remove("bastin")
            });
            document.querySelector('.s').classList.add('bastin');
            console.log(e.key + " bastınız");
            sounds()
            break;
        case 100:
            box.forEach(element => {
                element.classList.remove("bastin")
            });
            document.querySelector('.d').classList.add('bastin');
            console.log(e.key + " bastınız");
            sounds()
            break;
        case 32:
            box.forEach(element => {
                element.classList.remove("bastin")
            });
            document.querySelector('.space').classList.add('bastin');

            console.log("Space" + " bastınız");
            sounds()
            break;
        default:
            break;
    }
}


function bastim() {

}

function cektim() {
    console.log("bug")
}