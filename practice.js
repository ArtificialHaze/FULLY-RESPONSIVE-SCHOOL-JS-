AOS.init({
  duration: 600,
});

const toggleMenu = () => {
  const menubar = document.querySelector(".mobileMenuToggle");
  const nav = document.querySelector(".nav");

  menubar.classList.toggle("active");
  nav.classList.toggle("active");
};
