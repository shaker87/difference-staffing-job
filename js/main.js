var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");

const card_popup = document.querySelector(".popup-card");
const close_btn = document.querySelector(".close");

const overlay = document.querySelector(".overlay");
const overlay_show = document.querySelector(".overlay-show");

close_btn.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");
});

p1.addEventListener("click", function () {
  card_popup.classList.add("show");
  overlay.classList.add("overlay-show");
});

p2.addEventListener("click", function () {
  card_popup.classList.add("show");
  overlay.classList.add("overlay-show");
});
p3.addEventListener("click", function () {
  card_popup.classList.add("show");
  overlay.classList.add("overlay-show");
});
p4.addEventListener("click", function () {
  card_popup.classList.add("show");
  overlay.classList.add("overlay-show");
});




// window.addEventListener("load", function () {
//   popupShow(2000);
// });

// function popupShow(time) {
//   setTimeout(function () {
//     card_popup.classList.add("show");
//     overlay.classList.add("overlay-show");
//   }, time);
// }



// document.addEventListener("click", function () {
//   card_popup.classList.remove("show");
//   overlay.classList.remove("overlay-show");
// });
