const btnArray = document.querySelectorAll(".feedBack-button");
const btnClose = document.querySelector(".close__feedBack");
const feedBack = document.querySelector(".feedBack");
const asideMenu = document.querySelector(".aside");
const overlay = document.querySelector(".overlay");
const btnSend = document.querySelector(".feedBack__button__send");
const changeClassAside = function (block) {
  block.classList.toggle("feedBack-open");
  asideMenu.classList.remove("menu-open");
  btnClose.classList.toggle("callBack-close");
  overlay.classList.add("active");
};

for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", () => changeClassAside(feedBack));
}
btnClose.addEventListener("click", () => changeClassAside(feedBack));
btnSend.onclick = function () {
  location.reload();
};
