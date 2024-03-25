const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //recupero el id del boton presionado
    const idBtn = btn.getAttribute("data-id");

    //recupero los demas botones
    let otherBtn = Array.from(btns).filter(
      (b) => b.getAttribute("data-id") !== idBtn
    );
    console.log(...otherBtn);

    //les elimino la clase activa.
    otherBtn.forEach((bt) => bt.classList.remove("active"));

    //senalo el boton presionado como active
    btn.classList.add("active");

    //ocultos todos los content
    //primero los recupero todos
    const contents = document.querySelectorAll(".content");
    //y los desactivos
    contents.forEach((cont) => cont.classList.remove("active"));
    //activo el que toca
    const content = document.getElementById(idBtn);
    content.classList.add("active");
  });
});
