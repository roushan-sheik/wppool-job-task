let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  const pageButton = document.querySelector(".page-button");
  const totalPages = document.querySelector(".total-pages");
  const slidesToShow = window.innerWidth <= 640 ? 1.5 : 2;
  const totalPageCount = Math.ceil((totalSlides - 1) / slidesToShow);

  if (index >= totalPageCount) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalPageCount - 1;
  } else {
    currentSlideIndex = index;
  }

  slides.style.transform = `translateX(-${
    currentSlideIndex * (100 / slidesToShow)
  }%)`;

  const startImage = Math.floor(currentSlideIndex * slidesToShow) + 1;
  const endImage = Math.min(startImage + slidesToShow, totalSlides);
  pageButton.textContent = `${startImage} and ${endImage}`;
  totalPages.textContent = totalSlides;
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

// Initialize the first slide
showSlide(currentSlideIndex);

// Adjust the slides on window resize
window.addEventListener("resize", () => {
  showSlide(currentSlideIndex);
});
