import "../scss/style.scss";
import "../js/aside.js";
import "../js/swiper.js";
import "../js/eventList.js";
import "../js/gadget.js";
import "../js/price.js";
import "../js/callback.js";
import "../js/feedback.js";

console.log("Works!");

const btnChat = document.querySelector(".button-chat");
btnChat.addEventListener("click", () => {
  console.log("Click-CHAT");
});
