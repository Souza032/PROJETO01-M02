const titulo = document.querySelector("#titulo");

titulo.addEventListener("mouseover", function () {
  titulo.style.color = "white";
});

titulo.addEventListener("mouseout", function () {
  titulo.style.color = " #00f7ff";
});

var skil = document.querySelector(".skilaa")

skil.addEventListener("mouseover", function () {
  skil.style.backgroundColor = "black";
});

skil.addEventListener("mouseout", function () {
  skil.style.backgroundColor = " #00f7ff";
})