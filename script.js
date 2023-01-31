const productsList = document.querySelector(".products-list");
const listItemActive = document.querySelector(".active");

listItemActive.addEventListener("mouseover", function () {
  productsList.classList.remove("display-none");
});

listItemActive.addEventListener("mouseleave", function () {
  productsList.classList.add("display-none");
});

productsList.addEventListener("mouseover", function () {
  productsList.classList.remove("display-none");
});
productsList.addEventListener("mouseleave", function () {
  productsList.classList.add("display-none");
});
