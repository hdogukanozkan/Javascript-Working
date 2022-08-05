const fill = document.querySelector(".fill");
const emties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of emties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// ögeyi aldığım da tetikleniyor.
function dragStart() {
  this.classList.add("hold");

  setTimeout(() => {
    // set timeout olayı önemli! ilk üstte ki kod çalışır.
    this.className = "invisible";
  }, 0);

  console.log("dragStart");
}
// ögeyi bıraktığım da tetikleniyor.
function dragEnd() {
  this.classList.add("fill");
  console.log("dragEnd");
}

// öge bir üzerinde durduğumda çalışıyor
function dragOver(e) {
  e.preventDefault();
  console.log("dragOver");
}

// öge bir şeyin üzerine geldiğinde çalışıyor
function dragEnter(e) {
  console.log("dragEnter");

  e.preventDefault();
  this.className += " hovered";
}

// ögeyi üzerinden aldığımızda tetikleniyor.
function dragLeave() {
  this.className = "empty";
  console.log("dragLeave");
}

// ögeyi bir şeyin üzerine bıraktığımda çalışıyor.
function dragDrop() {
  this.className = "empty";
  this.append(fill);
  console.log("dragDrop");
}
