/* popular slider */
let popularSlider = document.querySelectorAll(".popular-item");
const sliderButtonNext = document.querySelector(".button-next");
const sliderButtonPrev = document.querySelector(".button-prev");
let addClass = function (slideIndex) {
  popularSlider[slideIndex].classList.add("active");
};
let removeClass = function (slideIndex) {
  popularSlider[slideIndex].classList.remove("active");
};
let slideIndex = 0;
addClass(slideIndex);
sliderButtonNext.addEventListener("click", function () {
  if (slideIndex === popularSlider.length - 1) {
    removeClass(slideIndex);
    addClass(0);
    slideIndex = 0;
    return;
  }
  removeClass(slideIndex);
  slideIndex++;
  addClass(slideIndex);
});
sliderButtonPrev.addEventListener("click", function () {
  if (slideIndex === 0) {
    removeClass(slideIndex);
    addClass(popularSlider.length - 1);
    slideIndex = popularSlider.length - 1;
    return;
  }
  removeClass(slideIndex);
  slideIndex--;
  addClass(slideIndex);
});
/* modal window */
const cartWindow = document.querySelector(".cart-window");
const popularButtons = document.querySelectorAll(".popular-button");
const buttonWindowClose = cartWindow.querySelector(".close-cart");
const buttonWindowOrdered = cartWindow.querySelector(".cart-button-ordered");
const cartButtonContinue = cartWindow.querySelector(".cart-button-continue");
const body = document.querySelector(".body");
for (let buyButton of popularButtons) {
  buyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartWindow.classList.add("active");
    body.classList.add("body-blocked");
    buttonWindowOrdered.focus();
  });
}
buttonWindowClose.addEventListener("click", function () {
  cartWindow.classList.remove("active");
  body.classList.remove("body-blocked");
});
cartButtonContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartWindow.classList.remove("active");
  body.classList.remove("body-blocked");
});
cartButtonContinue.addEventListener("blur", function () {
  buttonWindowOrdered.focus();
});
window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (cartWindow.classList.contains("active")) {
      evt.preventDefault();
      cartWindow.classList.remove("active");
      body.classList.remove("body-blocked");
    }
  }
});
