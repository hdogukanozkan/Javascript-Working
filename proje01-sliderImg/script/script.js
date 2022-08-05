const panelss = document.querySelectorAll(".panel");
const sayi = document.querySelectorAll(".btn-sayi");

panelss.forEach((panels) =>{
    panels.addEventListener("click",()=>{
        removeClassActive();
        panels.classList.add("active");
    })
})

function removeClassActive() {
    panelss.forEach((panel) =>{
        panel.classList.remove("active");
    })
}