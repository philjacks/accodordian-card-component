document.querySelectorAll(".q-btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("bold");
    item.nextElementSibling.classList.toggle("active");
  });
});
