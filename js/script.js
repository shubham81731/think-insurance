const swiper = new Swiper(".main-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If you need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
