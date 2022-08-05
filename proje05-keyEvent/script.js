const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");
const Code = document.getElementById("Code");

document.addEventListener("keydown", calistir);

function calistir(event) {
  key.textContent = event.key;
  keyCode.textContent = event.keyCode;
  Code.textContent = event.code;
}
