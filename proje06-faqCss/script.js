const toggles = document.querySelectorAll('.faq-toggle');



toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        calistir();
        toggle.parentNode.classList.add('active');
    })
});

function calistir() {
    toggles.forEach(element => {
        element.parentNode.classList.remove('active');
    });
}