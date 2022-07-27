var contenedorPrincipal = document.querySelector(".comentar__principal");
var contenedorEnviar = document.querySelector(".contenedor-enviar");
var botonEnviar = document.querySelector(".btnSubmit");
const btnScore = document.getElementsByClassName("btnScore");

document.getElementById("botn1").classList.remove("activo");
document.getElementById("botn2").classList.remove("activo");
document.getElementById("botn3").classList.remove("activo");
document.getElementById("botn4").classList.remove("activo");
document.getElementById("botn5").classList.remove("activo");

var valorSeleccionado = "";

for (let i = 0; i < btnScore.length; i++) {
  btnScore[i].addEventListener("click", function () {
    document.getElementById("botn1").classList.remove("activo");
    document.getElementById("botn2").classList.remove("activo");
    document.getElementById("botn3").classList.remove("activo");
    document.getElementById("botn4").classList.remove("activo");
    document.getElementById("botn5").classList.remove("activo");
    valorSeleccionado = btnScore[i].innerHTML;
    btnScore[i].classList.add("activo");
  });
}

botonEnviar.addEventListener("click", function () {
  if (valorSeleccionado !== "") {
    document.querySelector(".overlay").classList.remove("active");
  } else {
    alert("Por califica el libro");
  }
});

function openCommentDisplay() {
  document.querySelector(".overlay").classList.toggle("active");
}

function exitUnCommentDisplay() {
  document.querySelector(".overlay").classList.remove("active");
}
