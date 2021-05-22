const questions = document.querySelectorAll(".q-btn");

questions.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.firstElementChild.classList.toggle("flipped");
    item.classList.toggle("bold");
    item.nextElementSibling.classList.toggle("active");
  });
});

questions.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const box = document.getElementById("box").style;
    box.position = "relative";
    box.right = "58%";
  });
});

questions.forEach((item) => {
  item.addEventListener("mouseleave", (e) => {
    const box = document.getElementById("box").style;
    box.position = "relative";
    box.right = "54%";
  });
});
