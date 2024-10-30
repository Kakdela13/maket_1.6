import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import "swiper/swiper-bundle.min.css";
const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  direction: "horizontal",
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
console.log("swiper", swiper);
const swiperArray = [...swiper];
console.log(swiperArray);
function handleSwiperOnResize() {
  console.log("resize");
  for (let i = 0; i < swiperArray.length; i++) {
    if (window.innerWidth >= 768) {
      console.log("this");
      swiperArray[i].disable();
    } else {
      swiperArray[i].enable();
    }
  }
}

handleSwiperOnResize();

window.addEventListener("resize", handleSwiperOnResize);
