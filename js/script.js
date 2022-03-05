const accordion = document.querySelectorAll(".faq__item");

for (const key in accordion) {
  accordion[key].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
