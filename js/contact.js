var p5 = document.querySelector("#p5");
var p6 = document.querySelector("#p6");

const card_popup = document.querySelector(".popup-card");
const close_btn = document.querySelector(".close");

const overlay = document.querySelector(".overlay");
const overlay_show = document.querySelector(".overlay-show");

close_btn.addEventListener("click", function () {
    card_popup.classList.remove("show");
    overlay.classList.remove("overlay-show");
  });
  
  p5.addEventListener("click", function () {
    card_popup.classList.add("show");
    overlay.classList.add("overlay-show");
    console.log('p5 :>> ', p5);
  });
  
  p6.addEventListener("click", function () {
    card_popup.classList.add("show");
    overlay.classList.add("overlay-show");
  });