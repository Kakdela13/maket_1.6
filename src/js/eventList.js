const btn = document.querySelector(".button-show-more ");
const brandList = document.querySelector(".brand");
const img = document.querySelector(".rotate-image");
const btnRead = document.querySelector(".read");
const contentInfo = document.querySelector(".content__info");
const imgRead = document.querySelector(".read-image");

btn.addEventListener("click", function (event) {
  brandList.classList.toggle("brand-open");

  img.classList.toggle("rotated");

  if (btn.textContent === "Показать всё") {
    btn.textContent = "Скрыть";
  } else {
    btn.textContent = "Показать всё";
  }
});

btnRead.addEventListener("click", function (event) {
  contentInfo.classList.toggle("read-open");
  imgRead.classList.toggle("rotated");
  if (btnRead.textContent === "Читать далее") {
    btnRead.textContent = "Скрыть";
  } else {
    btnRead.textContent = "Читать далее";
  }
});
