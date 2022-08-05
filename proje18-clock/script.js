let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

let hrs = document.querySelector('#hours');
let mns = document.querySelector('#minutes');
let scs = document.querySelector('#seconds');


myTimer();

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
    let day = new Date(); // Bugünün verilerini alır saat tarih vb
    let hh = day.getHours() * 30; // max 12 * 30 = 360
    let mm = day.getMinutes() * 6; //max 60 * 6 = 360
    let ss = day.getSeconds() * 6; //max 60 * 6 = 360

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg) scaleY(.45)`;
    /* 360 deg / 12 = 30deg) her saatin arası 30 degre */
    mn.style.transform = `rotateZ(${mm}deg) scaleY(.78)`;
    sc.style.transform = `rotateZ(${ss}deg) scaleY(.78)`;

  

    let saat = hh / 30;
    if (saat < 10) {
        hrs.textContent = "0" + saat;
    } else {
        hrs.textContent = saat;

    }
    
    
    let dakika = mm / 6;
    if (dakika < 10) {
        mns.textContent = "0" + dakika;
    } else {
        mns.textContent = dakika;

    }
    

    let saniye = ss / 6;
    if (saniye < 10) {
        scs.textContent = "0" + saniye;
    } else {
        scs.textContent = saniye;

    }


}