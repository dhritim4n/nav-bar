const hamburgerButton = document.getElementById("hamburgerButton");
const navItemsTop = document.getElementById("navItemsTop");
const sideBar = document.getElementById("sideBar");
const hamburgerCloseButton = document.getElementById("hamburgerCloseButton");
const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");

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
handleSearchButtonClick(searchButton, searchBox);

function handleSearchButtonClick(searchButton, searchBox) {
  const showClasses = ["opacity-100", "translate-x-0", "scale-100"];
  const hideClasses = ["opacity-0", "translate-x-3", "scale-95"];


  searchBox.classList.add("transition-all", "duration-500", "transform", ...hideClasses);
  
  // Use requestAnimationFrame to ensure styles are registered before hiding
  requestAnimationFrame(() => {
    searchBox.classList.add("hidden");
  });

  searchButton.addEventListener("click", () => {
    const isHidden = searchBox.classList.contains("hidden");

    if (isHidden) {
      // Remove hidden, then reflow to apply animations
      searchBox.classList.remove("hidden");
      void searchBox.offsetWidth;

      searchBox.classList.remove(...hideClasses);
      searchBox.classList.add(...showClasses);
    } else {
      searchBox.classList.remove(...showClasses);
      searchBox.classList.add(...hideClasses);

      setTimeout(() => {
        searchBox.classList.add("hidden");
      }, 300);
    }
  });
}



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
