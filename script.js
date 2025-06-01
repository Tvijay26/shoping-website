// ==== DARK MODE TOGGLE ====
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

// Toggle theme
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

// ==== CATEGORY FILTER ====
const filterSelect = document.getElementById("category-filter");
const products = document.querySelectorAll(".product");

filterSelect.addEventListener("change", (e) => {
  const selected = e.target.value;

  products.forEach((product) => {
    const category = product.getAttribute("data-category");
    if (selected === "all" || selected === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

// ==== CART COUNT UPDATE ====
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;

    // Optional: Bounce animation
    cartCountElement.style.transform = "scale(1.3)";
    setTimeout(() => {
      cartCountElement.style.transform = "scale(1)";
    }, 150);
  });
});

// ==== SCROLL REVEAL ANIMATION ====
const revealOnScroll = () => {
  const revealElements = document.querySelectorAll(".product");
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
