const btnOpened = document.querySelector(".button-open-more");
const gadgetList = document.querySelector(".gadget");
const imgGadget = document.querySelector(".rotate-img");

btnOpened.addEventListener("click", function (event) {
  console.log("click");
  gadgetList.classList.toggle("gadget-open");

  imgGadget.classList.toggle("rotated");
  if (btnOpened.textContent === "Показать всё") {
    btnOpened.textContent = "Скрыть";
  } else {
    btnOpened.textContent = "Показать всё";
  }
});
