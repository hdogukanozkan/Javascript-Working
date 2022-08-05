var models = [
    {
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'https://hdogukanozkan.github.io/Todo-App/'
    },
    {
        name: 'Volvo',
        image: 'img/honda.jpg',
        link: 'https://hdogukanozkan.github.io/Todo-App/'
    },
    {
        name: 'Honda ',
        image: 'img/mazda.jpg',
        link: 'https://hdogukanozkan.github.io/Todo-App/'
    },
    {
        name: 'Tofaş',
        image: 'img/volvo.jpg',
        link: 'https://hdogukanozkan.github.io/Todo-App/'
    },
    {
        name: 'Ford',
        image: 'img/skoda.jpg',
        link: 'https://hdogukanozkan.github.io/Todo-App/'
    },
]

var footer = document.querySelector('.card-footer');
var btnLeft = document.querySelector('.fa-arrow-circle-left');
var btnRight = document.querySelector('.fa-arrow-circle-right');

var index = 0;
var myTest;

footer.addEventListener('mouseover', ustunde);
footer.addEventListener('mouseout', biraktim);

btnLeft.addEventListener('click', left);
btnRight.addEventListener('click', right);


function left() {
    if (index === 0) {
        index = models.length-1;
        calisti();
    }
    else{
        index--;
        calisti();
    } 
}


function right() {
    if (index === models.length-1) {
        index = 0
        calisti();
    }
    else{
        index++;
        calisti();
    } 
}


function ustunde() {
    clearInterval(myTest);
}

function biraktim() {
    start();
}

start();

function start() {
    myTest = setInterval(() => {
        index++;

        if (models.length === index) {
            index = 0;
        }

        calisti();
    }, 1500);
}

function calisti(){
    
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-link').setAttribute('href', models[index].link);
}



