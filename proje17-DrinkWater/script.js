const smallCups = document.querySelectorAll(".cup-small");
const listers = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightCups(idx);
  });
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    console.log("ÇALIŞTI::> " + idx);
    idx--;
    console.log("ÇALIŞTI::> " + idx);
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  var yuzdeKac = fullCups * 12.5;

  console.log(yuzdeKac);
  percentage.style.height = `${yuzdeKac}%`;

  if (percentage.style.height == 0 + "%") {
    remained.style.visibility = "visible";
    percentage.textContent = "";
  } else {
    remained.style.visibility = "hidden";
    remained.style.height = "0";

    percentage.textContent = yuzdeKac + "%";
  }
}
