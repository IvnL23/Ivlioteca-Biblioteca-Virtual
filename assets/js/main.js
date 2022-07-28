// --------------------------------Libros Autoayuda callBack--------------------------------------------------------------------------

var app = {};

var librosAutoayuda = (datos) => {
  app.libros = datos; //se guardan los libros en la variable general "datos".

  html = "";
  app.libros.map((libroAutoayuda) => {
    html += "<div class='tarjeta__libro'>";
    html +=
      "<img class='libro__Portada' src='" +
      libroAutoayuda.portada +
      "' alt='Portada'>";
    html += "<h4 class='libro__Titulo'>" + libroAutoayuda.Titulo + "</h4>";
    html += "<div class='libro__Rate'>" + libroAutoayuda.Star + "</div>";
    html +=
      "<p class='libro__Autor'>" +
      "<b>Autor:</b> " +
      libroAutoayuda.Autor +
      "</p>";
    html +=
      "<p class='libro__Edicion'>" +
      "<b>Edición:</b> " +
      libroAutoayuda.Edicion +
      "</p>";
    html +=
      "<p class='libro__NoPaginas'>" +
      "<b>No.Páginas:</b> " +
      libroAutoayuda.NoPaginas +
      "</p>";
    html +=
      "<p class='libro__ISBN'>" +
      "<b>ISBN:</b> " +
      libroAutoayuda.isbn +
      "</p>";
    html +=
      "<div class='libro__Container___Link_and_rating'>" +
      "<a  href='" +
      libroAutoayuda.link +
      "'" +
      " class='libro__btnLink' target='_blank'>Leer</a> <button class='libro__comment'  type='button' onclick='openCommentDisplay()'>Comentar</button>" +
      "</div>";

    html += "</div>";
  });

  document.getElementById("libros__autoayuda").innerHTML = html;
};

var librosCienMat = (datos) => {
  app.libros = datos;

  html = "";
  app.libros.map((libroCienMat) => {
    html += "<div class='tarjeta__libro'>";
    html +=
      "<img class='libro__Portada' src='" +
      libroCienMat.portada +
      "' alt='Portada'>";
    html += "<h4 class='libro__Titulo'>" + libroCienMat.Titulo + "</h4>";
    html += "<div class='libro__Rate'>" + libroCienMat.Star + "</div>";
    html +=
      "<p class='libro__Autor'>" +
      "<b>Autor:</b> " +
      libroCienMat.Autor +
      "</p>";
    html +=
      "<p class='libro__Edicion'>" +
      "<b>Edición:</b> " +
      libroCienMat.Edicion +
      "</p>";
    html +=
      "<p class='libro__NoPaginas'>" +
      "<b>No.Páginas:</b> " +
      libroCienMat.NoPaginas +
      "</p>";
    html +=
      "<p class='libro__ISBN'>" + "<b>ISBN:</b> " + libroCienMat.isbn + "</p>";
    html +=
      "<div class='libro__Container___Link_and_rating'>" +
      "<a  href='" +
      libroCienMat.link +
      "'" +
      " class='libro__btnLink' target='_blank'>Leer</a> <button class='libro__comment' type='button' onclick='openCommentDisplay()'>Comentar</button>" +
      "</div>";

    html += "</div>";
  });

  document.getElementById("libros__cienciamat").innerHTML = html;
};

var librosHistoria = (datos) => {
  app.libros = datos;

  html = "";
  app.libros.map((libroHistoria) => {
    html += "<div class='tarjeta__libro'>";
    html +=
      "<img class='libro__Portada' src='" +
      libroHistoria.portada +
      "' alt='Portada'>";
    html += "<h4 class='libro__Titulo'>" + libroHistoria.Titulo + "</h4>";
    html += "<div class='libro__Rate'>" + libroHistoria.Star + "</div>";
    html +=
      "<p class='libro__Autor'>" +
      "<b>Autor:</b> " +
      libroHistoria.Autor +
      "</p>";
    html +=
      "<p class='libro__Edicion'>" +
      "<b>Edición:</b> " +
      libroHistoria.Edicion +
      "</p>";
    html +=
      "<p class='libro__NoPaginas'>" +
      "<b>No.Páginas:</b> " +
      libroHistoria.NoPaginas +
      "</p>";
    html +=
      "<p class='libro__ISBN'>" + "<b>ISBN:</b> " + libroHistoria.isbn + "</p>";
    html +=
      "<div class='libro__Container___Link_and_rating'>" +
      "<a  href='" +
      libroHistoria.link +
      "'" +
      " class='libro__btnLink' target='_blank'>Leer</a> <button class='libro__comment' type='button' onclick='openCommentDisplay()'>Comentar</button>" +
      "</div>";

    html += "</div>";
  });

  document.getElementById("libros__historia").innerHTML = html;
};

var librosTecnologia = (datos) => {
  app.libros = datos;

  html = "";
  app.libros.map((libroTecnologia) => {
    html += "<div class='tarjeta__libro'>";
    html +=
      "<img class='libro__Portada' src='" +
      libroTecnologia.portada +
      "' alt='Portada'>";
    html += "<h4 class='libro__Titulo'>" + libroTecnologia.Titulo + "</h4>";
    html += "<div class='libro__Rate'>" + libroTecnologia.Star + "</div>";
    html +=
      "<p class='libro__Autor'>" +
      "<b>Autor:</b> " +
      libroTecnologia.Autor +
      "</p>";
    html +=
      "<p class='libro__Edicion'>" +
      "<b>Edición:</b> " +
      libroTecnologia.Edicion +
      "</p>";
    html +=
      "<p class='libro__NoPaginas'>" +
      "<b>No.Páginas:</b> " +
      libroTecnologia.NoPaginas +
      "</p>";
    html +=
      "<p class='libro__ISBN'>" +
      "<b>ISBN:</b> " +
      libroTecnologia.isbn +
      "</p>";
    html +=
      "<div class='libro__Container___Link_and_rating'>" +
      "<a  href='" +
      libroTecnologia.link +
      "'" +
      " class='libro__btnLink' target='_blank'>Leer</a> <button class='libro__comment' type='button' onclick='openCommentDisplay()'>Comentar</button>" +
      "</div>";

    html += "</div>";
  });

  document.getElementById("libros__tecnologia").innerHTML = html;
};

var librosCienFicFant = (datos) => {
  app.libros = datos;

  html = "";
  app.libros.map((libroCienFicFant) => {
    html += "<div class='tarjeta__libro'>";
    html +=
      "<img class='libro__Portada' src='" +
      libroCienFicFant.portada +
      "' alt='Portada'>";
    html += "<h4 class='libro__Titulo'>" + libroCienFicFant.Titulo + "</h4>";
    html += "<div class='libro__Rate'>" + libroCienFicFant.Star + "</div>";
    html +=
      "<p class='libro__Autor'>" +
      "<b>Autor:</b> " +
      libroCienFicFant.Autor +
      "</p>";
    html +=
      "<p class='libro__Edicion'>" +
      "<b>Edición:</b> " +
      libroCienFicFant.Edicion +
      "</p>";
    html +=
      "<p class='libro__NoPaginas'>" +
      "<b>No.Páginas:</b> " +
      libroCienFicFant.NoPaginas +
      "</p>";
    html +=
      "<p class='libro__ISBN'>" +
      "<b>ISBN:</b> " +
      libroCienFicFant.isbn +
      "</p>";
    html +=
      "<div class='libro__Container___Link_and_rating'>" +
      "<a  href='" +
      libroCienFicFant.link +
      "'" +
      " class='libro__btnLink' target='_blank'>Leer</a> <button class='libro__comment' type='button' onclick='openCommentDisplay()'>Comentar</button>" +
      "</div>";

    html += "</div>";
  });

  document.getElementById("libros__cienciaficfant").innerHTML = html;
};

// --------------------------------Fin callBack Libros Autoayuda--------------------------------------------------------------------------

// --------------------------------Cambio de categoria--------------------------------------------------------------------------
document.querySelector(".libros__cienciaficfant").classList.toggle("acttv");

function openCienMat() {
  document.querySelector(".libros__cienciamat").classList.toggle("act");
  document.querySelector(".libros__autoayuda").classList.remove("remov");
  document.querySelector(".libros__tecnologia").classList.remove("ac");
  document.querySelector(".libros__historia").classList.remove("aactv");
  document.querySelector(".libros__cienciaficfant").classList.remove("acttv");
}

function openAutoAyuda() {
  document.querySelector(".libros__cienciamat").classList.remove("act");
  document.querySelector(".libros__autoayuda").classList.toggle("remov");
  document.querySelector(".libros__tecnologia").classList.remove("ac");
  document.querySelector(".libros__historia").classList.remove("aactv");
  document.querySelector(".libros__cienciaficfant").classList.remove("acttv");
}

function openTecno() {
  document.querySelector(".libros__cienciamat").classList.remove("act");
  document.querySelector(".libros__autoayuda").classList.remove("remov");
  document.querySelector(".libros__tecnologia").classList.toggle("ac");
  document.querySelector(".libros__historia").classList.remove("aactv");
  document.querySelector(".libros__cienciaficfant").classList.remove("acttv");
}

function openHistoria() {
  document.querySelector(".libros__cienciamat").classList.remove("act");
  document.querySelector(".libros__autoayuda").classList.remove("remov");
  document.querySelector(".libros__tecnologia").classList.remove("ac");
  document.querySelector(".libros__historia").classList.toggle("aactv");
  document.querySelector(".libros__cienciaficfant").classList.remove("acttv");
}

function openCienficFant() {
  document.querySelector(".libros__cienciamat").classList.remove("act");
  document.querySelector(".libros__autoayuda").classList.remove("remov");
  document.querySelector(".libros__tecnologia").classList.remove("ac");
  document.querySelector(".libros__historia").classList.remove("aactv");
  document.querySelector(".libros__cienciaficfant").classList.toggle("acttv");
}
// --------------------------------Marcar categorias--------------------------------------------------------------------------
const categoria = document.getElementsByClassName("catalago__categoria");
document.getElementById("CienficFant").classList.remove("accttvv");
document.getElementById("Historia").classList.remove("accttvv");
document.getElementById("Tecno").classList.remove("accttvv");
document.getElementById("AutoAyuda").classList.remove("accttvv");
document.getElementById("CienMat").classList.remove("accttvv");
var valorSelect = "";

for (let i = 0; i < categoria.length; i++) {
  categoria[i].addEventListener("click", function () {
    document.getElementById("CienficFant").classList.remove("accttvv");
    document.getElementById("Historia").classList.remove("accttvv");
    document.getElementById("Tecno").classList.remove("accttvv");
    document.getElementById("AutoAyuda").classList.remove("accttvv");
    document.getElementById("CienMat").classList.remove("accttvv");
    valorSelect = categoria[i].innerHTML;
    categoria[i].classList.add("accttvv");
  });
}

// --------------------------------Abrir y cerrar ventana de Iniciar Sesion--------------------------------------------------------------------------

var SIGN = document.querySelector(".SignIn");
var LOG = document.querySelector(".LogIn");

function openSignIn() {
  document.querySelector(".Sign__Overlay").classList.toggle("activ");
}

function closeSignIn() {
  document.querySelector(".Sign__Overlay").classList.remove("activ");
}

function openLogIn() {
  document.querySelector(".Log__Overlay").classList.toggle("acti");
}

function closeLogIn() {
  document.querySelector(".Log__Overlay").classList.remove("acti");
}

document.querySelector(".redirectToLogIn").addEventListener("href", (e) => {
  e.preventDefault();
});

function exitAndOpenLogIn() {
  document.querySelector(".Sign__Overlay").classList.remove("activ");
  document.querySelector(".Log__Overlay").classList.toggle("acti");
}

document.querySelector(".ham-link").addEventListener("click", (e) => {
  e.preventDefault();
});

function openAcercaDe() {
  (window.location.href = "./acercaDe.html"), "target='_blank'";
}

function returnInit() {
  window.location.href = "#";
}

// --------------------------------Permitir solo numeros--------------------------------------------------------------------------

function valideKey(evt) {
  var code = evt.which ? evt.which : evt.keyCode;

  if (code == 8) {
    return true;
  } else if (code >= 48 && code <= 57) {
    return true;
  } else {
    return false;
  }
}

// --------------------------------SignIn configuration--------------------------------------------------------------------------

document.querySelector(".form__signIn").addEventListener("submit", (e) => {
  e.preventDefault();
  const dataSign = Object.fromEntries(new FormData(e.target));

  if (
    dataSign.emailRequest == "eva_angelica@ivlioteca.com" &&
    dataSign.pswRequest == 2304
  ) {
    window.location.href = "./admin.html";
  } else {
    document.querySelector(".header__btn-LogIn").classList.toggle("disablee");
    document.querySelector(".header__btn-SignIn").classList.toggle("disable");
    document.querySelector(".SignIn2").classList.toggle("disabble");
    document.querySelector(".LogIn2").classList.toggle("disabl");
    document.querySelector(".user_ID").classList.toggle("enable");
    document.querySelector(".Sign__Overlay").classList.remove("activ");
    document.querySelector(".user_ID").innerHTML = dataSign.emailRequest;
    document.querySelector(".user_ID___Ham").innerHTML = dataSign.emailRequest;
  }
});
// --------------------------------LogIn configuration--------------------------------------------------------------------------

document.querySelector(".form__LogIn").addEventListener("submit", (ex) => {
  ex.preventDefault();
  const dataLog = Object.fromEntries(new FormData(ex.target));
  document.querySelector(".header__btn-LogIn").classList.toggle("disablee");
  document.querySelector(".header__btn-SignIn").classList.toggle("disable");
  document.querySelector(".SignIn2").classList.toggle("disabble");
  document.querySelector(".LogIn2").classList.toggle("disabl");
  document.querySelector(".user_ID").classList.toggle("enable");
  document.querySelector(".Log__Overlay").classList.remove("acti");
  document.querySelector(".user_ID").innerHTML = dataLog.emailRequestlog;
  document.querySelector(".user_ID___Ham").innerHTML = dataSign.emailRequest;
});

// --------------------------------LogIn configuration--------------------------------------------------------------------------
document
  .querySelector(".footer__premium___btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
  });

function openPremium() {
  document.querySelector(".premium").classList.toggle("enaable");
}

function closePremium() {
  document.querySelector(".premium").classList.remove("enaable");
}
