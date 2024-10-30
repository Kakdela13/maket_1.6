const btnArray = document.querySelectorAll(".callBack-button");
const btnClose = document.querySelector(".close__button");
const callBack = document.querySelector(".callBack");
const asideMenu = document.querySelector(".aside");
const overlay = document.querySelector(".overlay");
const btnSend = document.querySelector(".callBack__button__send");
const changeClassAside = function (block) {
  block.classList.toggle("callBack-open");
  asideMenu.classList.remove("menu-open");
  overlay.classList.add("active");
  btnClose.classList.toggle("callBack-close");
};

for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", () => changeClassAside(callBack));
}
btnClose.addEventListener("click", () => changeClassAside(callBack));
btnSend.onclick = function () {
  location.reload();
};
