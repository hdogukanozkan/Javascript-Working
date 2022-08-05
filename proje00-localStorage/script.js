const p = document.querySelector('p');
const btn_plus = document.querySelector('.plus');
const btn_save = document.querySelector('.record');
const btn_minus = document.querySelector('.minus');
const btn_delete = document.querySelector('.delete');
var ul = document.getElementById('list');
var i;

i = localStorage.getItem('nameOfItem')
p.textContent = Number(i);
calistir();


var kayitlar = JSON.parse(localStorage.getItem('kayitlar')) || [];

if (kayitlar !== null) {
    kayitlar.forEach(element => {
        yarat(element);
    });
}

function kaydet() {
    kayitlar.push(Number(i));
    localStorage.setItem('kayitlar', JSON.stringify(kayitlar));
    yarat(i);
}

function yarat(yazi) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(yazi));

    ul.appendChild(li);
}


function ekle() {
    i++;
    p.textContent = i;
    localStorage.setItem('nameOfItem', i);
}

function cikar() {
    i--;
    p.textContent = i;
    localStorage.setItem('nameOfItem', i);
}

function calistir() {
    btn_plus.addEventListener('click', ekle);
    btn_minus.addEventListener('click', cikar);
    btn_save.addEventListener('click', kaydet);
    btn_delete.addEventListener('click',clear);
}


function clear(){
    localStorage.removeItem('kayitlar');
    console.log(ul)
    ul.innerHTML = '';
}