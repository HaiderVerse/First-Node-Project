const slides = [
    { image: '/assets/super-saiyan-goku-ultra-instinct-thumb.jpg', alt: 'Image 1' },
    { image: '/assets/thumb-1920-1331367.png', alt: 'Image 2' },
    { image: '/assets/wallpapersden.com_demon-hd-dark-angel-2023_1920x1080.jpg', alt: 'Image 3' },
    { image: '/assets/demon-slayer-kimetsu-3840x2160.jpg', alt: 'Image 4' }
];

let currentSlide = 0;
const carousel = document.getElementById('carousel');

function updateSlide() {
    const slide = slides[currentSlide];
    const img = document.createElement('img');
    img.src = slide.image;
    img.alt = slide.alt;
    img.className = 'absolute w-full h-full object-cover transform translate-x-full opacity-0 transition-transform ease-in-out duration-[1400ms]'; // Set initial class with transform transition
    carousel.appendChild(img);

    // Trigger reflow to apply initial styles before animating transform
    img.offsetWidth; // eslint-disable-line

    // Remove transform transition class after reflow to animate transform change
    img.classList.remove('translate-x-full', 'opacity-0', 'duration-[1500ms]');
    img.classList.add('translate-x-0', 'opacity-100', 'duration-[1500ms]');
    setTimeout(() => {
        if (carousel.children.length > 1) {
            carousel.removeChild(carousel.firstChild);
        }
    }, 1200); // Wait for the duration of the animation to complete
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}
// Auto slide change every 5 seconds
setInterval(nextSlide, 5000);

// Initial update
updateSlide();