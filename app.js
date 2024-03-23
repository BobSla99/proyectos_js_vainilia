//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");
const ques = document.querySelector(".question");

console.log(questions)
questions.forEach((question) => {
  const btn=question.querySelector(".question-btn");
  btn.addEventListener("click",e=>{
    questions.forEach(ite => {
        if(ite!==question)ite.classList.remove("show-text");
    });

    question.classList.toggle("show-text")
    console.log(question)
  })
});
