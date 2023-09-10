const menuMobile = document.querySelector(".menu_mobile");
const navMobile = document.querySelector(".header__navigation_mobile");

const menuMobileOpenIcon = `<i class="fas fa-bars"></i>`;
const menuMobileCloseIcon = `<i class="fa-solid fa-xmark"></i>`;

function setDefaultValues() {
  navMobile.classList.remove("opened");
  menuMobile.innerHTML = menuMobileOpenIcon;
}

setDefaultValues();

menuMobile.addEventListener("click", (event) => {
  event.stopPropagation();
  if (navMobile.classList.contains("opened")) {
    setDefaultValues();
  } else {
    navMobile.classList.add("opened");
    menuMobile.innerHTML = menuMobileCloseIcon;
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".header__navigation_mobile")) {
    setDefaultValues();
  }
});

/*
  This component controls the operation of the Mobile Menu, changing the Hamburguer Menu icon 
  and opening and closing the mobile navigation menu.
  There is also other event-driven functionality, where clicking outside the menu component 
  closes the menu.
*/
