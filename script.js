var input = document.getElementById("input");
var btn = document.getElementById("btn-Generate");

function createPassword() {
  let chars =
    "1234567890abcdefghijklmnopqrstuvwxyz@#$*&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passLen = 15;
  let pass = "";

  for (let index = 0; index < passLen; index++) {
    let randomNo = Math.floor(Math.random() * chars.length);
    pass = pass + chars.substring(randomNo, randomNo + 1);
  }
  input.value = pass;
  navigator.clipboard.writeText(pass);
}

btn.addEventListener("click", () => {
  createPassword();
});