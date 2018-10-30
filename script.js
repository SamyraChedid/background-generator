var css = document.querySelector("h3");
var cor1 = document.querySelector(".cor1");
var cor2 = document.querySelector(".cor2");
var body = document.getElementById("gradiente");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + cor1.value + "," + cor2.value +")";
    css.textContent = body.style.background + ";";
}

cor1.addEventListener("input", setGradient);

cor2.addEventListener("input", setGradient);
