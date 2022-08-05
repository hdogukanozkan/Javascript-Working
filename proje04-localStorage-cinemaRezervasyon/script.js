const container = document.querySelector('.container');
const seat = container.querySelectorAll('.seat');
const adet = document.querySelector('#count');
const fiyat = document.querySelector('#amount');
const select = document.querySelector('#movie');

getFromLocalStorage();
calculateTotal();

seat.forEach(element => {
    element.addEventListener('click', tikladim);

    function tikladim(e) {
        if (e.target.classList[1] === 'reserved') {
            console.log(e.target.classList)
        } else {
            element.classList.toggle('selected');
            calculateTotal();
        }
    }

});


select.addEventListener('change', function (e) {
    calculateTotal();
})

function calculateTotal() {
    /*

        Bu fonksiyon çalıştığında.
        1=> selected css ile seçilmiş tüm seatler kutular depolanıyor.
        Ardından 2 adet dizi oluşturuyoruz. 
        1.si seçili kutular
        2.si tüm kutular

        sonra seçili kutuları foreach ile 1. kutuya pushluyoruz.
        ardından tüm kutuları foreach ile 2. kutuya pushluyoruz.

        map metodu ile artık seçili kutuların indexlerini tüm kutulardan çekiyoruz. Böylece bu index değerleri tekrar etmeyen uniq oluyor. Yani biz localstorage'ta veri depolarken indexleri sabit olacak çünkü tüm kutuların bulunduğu array sabit.

    */
    const selectedSeats = container.querySelectorAll('.seat.selected');


    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function (seat) {
        selectedSeatsArr.push(seat);
    });
    console.log(selectedSeatsArr);

    seat.forEach(function (seat) {
        seatsArr.push(seat);
    })
    console.log(seatsArr);

    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    })


    console.log(selectedSeatIndexs);

    fiyat.textContent = (select.value) * selectedSeats.length;
    adet.textContent = select.value;


    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats != null && selectedSeats.length > 0) {
        seat.forEach(function (seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }



    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs))
    localStorage.setItem('selectedMovieIndex', select.selectedIndex)
}