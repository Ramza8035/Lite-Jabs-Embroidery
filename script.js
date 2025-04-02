const slides = document.querySelectorAll('.slides img');
const buttons = document.querySelectorAll('.slide-btn');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Initial display
showSlide(currentSlide);

// Event listener for buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});
