const hamburgerButton = document.getElementById("hamburgerButton");
const navItemsTop = document.getElementById("navItemsTop");
const sideBar = document.getElementById("sideBar");
const hamburgerCloseButton = document.getElementById("hamburgerCloseButton");

// Run on load and resize
window.addEventListener("DOMContentLoaded", () => {
  changeVisibility(hamburgerButton, navItemsTop);
  handleActiveNavItem();
});

window.addEventListener("resize", () => {
  changeVisibility(hamburgerButton, navItemsTop);
});

// Hamburger menu handlers
handleHamburgerButtonClick(hamburgerButton, sideBar);
handleHamburgerButtonClick(hamburgerCloseButton, sideBar);

function changeVisibility(button, listItems) {
  if (window.innerWidth < 768) {
    button.style.display = "block";
    listItems.style.display = "none";
  } else {
    button.style.display = "none";
    listItems.style.display = "flex";
  }
}

function handleHamburgerButtonClick(button, sideBar) {
  if (!button) return;
  button.addEventListener("click", () => {
    sideBar.classList.toggle("-translate-x-full");
    sideBar.classList.toggle("translate-x-0");
  });
}

function handleActiveNavItem() {
  const allNavItems = document.querySelectorAll("#navItemsTop ul li, #sideBar ul li");
  allNavItems.forEach(item => {
    item.addEventListener("click", () => {
      allNavItems.forEach(i => {
        i.classList.remove("bg-indigo-200", "text-indigo-800", "font-semibold");
      });
      item.classList.add("bg-indigo-200", "text-indigo-800", "font-semibold");
    });
  });
}
