/* =========================
   MENÚ MÓVIL
========================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

/* =========================
   CERRAR MENÚ AL HACER CLICK
========================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

/* =========================
   CARRITO
========================== */

const cartCount = document.querySelector(".cart-count");
const addCartButtons = document.querySelectorAll(".add-cart");

let cartItems = 0;

addCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartItems++;
        cartCount.textContent = cartItems;

        button.textContent = "✓";
        button.style.background = "#22c55e";

        setTimeout(() => {
            button.textContent = "+";
            button.style.background = "";
        }, 1000);
    });
});

/* =========================
   FAVORITOS
========================== */

const favoriteButtons = document.querySelectorAll(".favorite-button");

favoriteButtons.forEach(button => {
    button.addEventListener("click", () => {
        const isFavorite = button.classList.toggle("favorite");
        button.textContent = isFavorite ? "♥" : "♡";
    });
});

/* =========================
   ANIMACIÓN SIMPLE AL CARGAR
========================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
