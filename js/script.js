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
    if (!e.composedPath().includes(menuBtn)) {
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

// search-scroll

document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector("#searchBoxBtn");
  const searchBox = document.querySelector("#search-box");
  const arrowDown = document.querySelector(".fa-arrow-down");
  let currentResultIndex = -1;
  let results = [];

  searchBtn.addEventListener("click", () => {
    const query = searchBox.value.toLowerCase();
    searchContent(query);
  });

  searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const query = searchBox.value.toLowerCase();
      searchContent(query);
    }
  });

  arrowDown.addEventListener("click", () => {
    if (results.length > 0 && currentResultIndex < results.length - 1) {
      currentResultIndex++;
      results[currentResultIndex].scrollIntoView({ behavior: "smooth" });
    }
  });

  function searchContent(query) {
    const sections = document.querySelectorAll("section");
    results = [];
    currentResultIndex = -1;

    sections.forEach((section) => {
      const content = section.innerText.toLowerCase();
      if (content.includes(query)) {
        results.push(section);
      }
    });

    if (results.length > 0) {
      currentResultIndex = 0;
      results[currentResultIndex].scrollIntoView({ behavior: "smooth" });
    } else {
      alert("No results found");
    }
  }
});
