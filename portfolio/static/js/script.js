// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to top button logic
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Navbar toggle (if you want a mobile nav menu)
const toggleBtn = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
