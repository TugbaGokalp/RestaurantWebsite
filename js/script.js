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

// opening and closing the navbar for responsive navigation

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) & !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});

//! footer link scrolling

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    this.classList.add("active");
  });
});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";

  // Finding the one in view by navigating through all sections
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Make the link in the navbar that belongs to the section in view 'active'
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

//! footer link scrolling

const footerLinks = document.querySelectorAll(".links a");

footerLinks.forEach((link) => {
  link.addEventListener("click", function () {
    footerLinks.forEach((navLink) => navLink.classList.remove("active"));
    this.classList.add("active");
  });
});

const sectionsFooter = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";

  sectionsFooter.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  footerLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
