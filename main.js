let btnCont = document.querySelector(".to-top");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
