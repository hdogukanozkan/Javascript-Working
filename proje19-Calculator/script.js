const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.box');



btns.forEach(button => {
    button.addEventListener('click', function (e) {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!'
                }
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1)
                break;
            default:
                if (display.innerText.length > 15) {
                    alert('Error 15 karakter limit.')
                } else {
                    display.innerHTML += e.target.innerHTML;
                }
        }

    })
});