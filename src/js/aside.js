const btnOpen = document.querySelector(".menu-button");
const btnClose = document.querySelector(".menu-button-close");
const asideMenu = document.querySelector(".aside");
const overlay = document.querySelector(".overlay");
const callBack = document.querySelector(".callBack");
const feedBack = document.querySelector(".feedBack");

const changeClassAside = function (block) {
  block.classList.toggle("menu-open");
  overlay.classList.add("active");
};

const overlayListener = function () {
  asideMenu.classList.remove("menu-open");
  callBack.classList.remove("callBack-open");
  feedBack.classList.remove("feedBack-open");
  overlay.classList.remove("active");
};

btnOpen.addEventListener("click", () => changeClassAside(asideMenu));
btnClose.addEventListener("click", () => changeClassAside(asideMenu));
overlay.addEventListener("click", () => overlayListener());
