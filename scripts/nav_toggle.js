const navToggle = document.querySelector(".nav_toggle");

const modal = document.querySelector(".dialog");
const modalClose = document.querySelector(".dialog__btn_close");

const iconHamburger = document.querySelector(".nav_toggle__hamburger");
const headerLogo = document.querySelector(".header__logo");

navToggle.addEventListener("click", () => {
    modal.showModal();

    navToggle.setAttribute("aria-expanded", true);
    iconHamburger.style.display = "none";
    headerLogo.style.display = "none";

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
});

modalClose.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("close", () => {
    navToggle.setAttribute("aria-expanded", false);
    iconHamburger.style.display = "block";
    headerLogo.style.display = "block";

    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
});