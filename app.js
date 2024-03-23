//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");
const ques = document.querySelector(".question");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //le ando a la clase al question selected
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");


    //selecciono todos los demas questions
    const questionS = document.querySelectorAll(".question");
    //los llevo a un array para poder manipularlos
    arrayQuestionS = Array.from(questionS);
    //recojo  todos loslque no son el presionado
    arrayQuestionS = arrayQuestionS.filter(
      (thisQuestion) => thisQuestion !== question
    );
    //y si estan visibles los ocultos
    arrayQuestionS.forEach((ques) => {
      ques.classList.contains("show-text")
        ? ques.classList.remove("show-text")
        : null;
    });
    console.log(e.currentTarget.parentElement.parentElement);
  });
});
