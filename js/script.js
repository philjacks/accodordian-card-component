const questions = document.querySelectorAll(".q-btn");

questions.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.firstElementChild.classList.toggle("flipped");
    item.classList.toggle("bold");
    item.nextElementSibling.classList.toggle("active");
  });
});
