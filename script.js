const header = document.querySelector(".header");
const hamburgerBtn = document.querySelector(".hamburger-button");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const mobileNavMenu = document.getElementById("mobile-nav-menu");
const anchors = Array.from(document.getElementsByTagName("a"));

// don't respond to anchor clicks
anchors.forEach((anchor) =>
  anchor.addEventListener("click", (event) => event.preventDefault())
);

// remove the overlay if the user opens the mobile menu then resizes to desktop view
window.addEventListener("resize", (event) => {
  if (event.target.innerWidth > 1024) {
    overlay.classList.add("hide-for-desktop");
  }
});

hamburgerBtn.addEventListener("click", () => {
  const mobileMenuIsVisible = mobileNavMenu.toggleAttribute("data-visible");

  // set aria-expanded = true if the mobile menu is visible
  hamburgerBtn.setAttribute("aria-expanded", mobileMenuIsVisible);

  // disable scrolling if the mobile menu is visible
  document.body.toggleAttribute("data-noscroll");

  if (mobileMenuIsVisible) {
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  } else {
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  }
});
