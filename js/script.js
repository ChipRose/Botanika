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
sliderButtonNext.addEventListener('click',function(){
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
sliderButtonPrev.addEventListener('click',function(){
	if (slideIndex === 0) {
		removeClass(slideIndex);
		addClass(popularSlider.length-1);
		slideIndex = popularSlider.length-1;
		return;
	}
	removeClass(slideIndex);
	slideIndex--;
	addClass(slideIndex);
});