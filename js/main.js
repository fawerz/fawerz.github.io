const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const overlay = document.querySelector(".overlay");

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    overlay.classList.remove("show");
})

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})




