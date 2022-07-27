var campoFiltro = document.querySelector(".searchInput");
campoFiltro.addEventListener("input", function () {
  var libros = document.querySelectorAll(".tarjeta__libro");

  if (this.value.length > 0) {
    document.querySelector(".libros__cienciamat").classList.toggle("act");
    document.querySelector(".libros__autoayuda").classList.toggle("remov");
    document.querySelector(".libros__tecnologia").classList.toggle("ac");
    document.querySelector(".libros__historia").classList.toggle("aactv");
    document.querySelector(".libros__cienciaficfant").classList.toggle("acttv");
    for (var i = 0; i < libros.length; i++) {
      // si el usuario introdujo texto:
      var tarjeta__libro = libros[i];
      var Titulo = tarjeta__libro.querySelector(".libro__Titulo");
      var nombre = Titulo.textContent; // nombre tomado del paciente en 'x' índice del loop.
      var Autor = tarjeta__libro.querySelector(".libro__Autor");
      var nombreAutor = Autor.textContent;
      var expresion = new RegExp(this.value, "i");

      if (!expresion.test(nombre)) {
        // si el elemento escrito por el usuario en input no está:
        tarjeta__libro.classList.add("invisible");

        if (!expresion.test(nombreAutor)) {
          // si el elemento escrito por el usuario en input no está:
          tarjeta__libro.classList.add("invisible");
        } else {
          tarjeta__libro.classList.remove("invisible");
          document.querySelector(".libros__cienciamat").classList.remove("act");
          document
            .querySelector(".libros__autoayuda")
            .classList.remove("remov");
          document.querySelector(".libros__tecnologia").classList.remove("ac");
          document.querySelector(".libros__historia").classList.remove("aactv");
          document
            .querySelector(".libros__cienciaficfant")
            .classList.remove("acttv");
        }
      } else {
        tarjeta__libro.classList.remove("invisible");
      }
    }
  } else {
    // si el usuario no introdujo texto:
    for (var i = 0; i < libros.length; i++) {
      var tarjeta__libro = libros[i];
      tarjeta__libro.classList.remove("invisible");
    }
    document.querySelector(".libros__cienciaficfant").classList.toggle("acttv");
  }
});
