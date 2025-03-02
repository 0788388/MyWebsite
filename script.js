// Select elements
const projectImages = document.querySelectorAll('.project');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = document.getElementById('fullscreen-img');
const closeBtn = document.querySelector('.close-btn');
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0; // Keep track of the slide index
const totalSlides = projectImages.length;

// Open full-screen mode when clicking an image
projectImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        fullscreenImg.src = img.src;
        fullscreen.classList.add('active');
    });
});

// Close full-screen when clicking the button or outside the image
closeBtn.addEventListener('click', () => {
    fullscreen.classList.remove('active');
});

fullscreen.addEventListener('click', (e) => {
    if (e.target === fullscreen) {
        fullscreen.classList.remove('active');
    }
});

// ✅ Fix carousel navigation
function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Loop back to last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Loop back to first slide
    }

    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Add event listeners to navigation buttons
prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

