//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");
const ques = document.querySelector(".question");

console.log(questions)
questions.forEach((question) => {
  const btn=question.querySelector(".question-btn");
  btn.addEventListener("click",e=>{
    questions.forEach(ite => {
<<<<<<< HEAD
        if(ite!==question)ite.classList.remove("show-text");
=======
        ite.classList.remove("show-text");
>>>>>>> 2a270e8748a2c61e00f9dbca5787ecaa70432ec0
    });

    question.classList.toggle("show-text")
    console.log(question)
  })
});
