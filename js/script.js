// opening and closing the searchbar

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

// opening and closing the shopping cart

const cartBtn = document.querySelector("#cartBtn");
const cart = document.querySelector(".cart-items-container");

cartBtn.addEventListener("click", function () {
  cart.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) & !e.composedPath().includes(cart)
    ) {
      cart.classList.remove("active");
    }
  });
});
