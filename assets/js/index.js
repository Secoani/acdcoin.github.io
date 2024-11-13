window.addEventListener("resize", () => {
    const navLinks = document.querySelector(".nav-links");
    if (window.innerWidth > 857 && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    }
});