let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicator = document.querySelector('.image-indicator');

function showSlide(index) {
    // Ocultar todas las diapositivas y mostrar la diapositiva actual
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    // Actualizar el indicador de imagen actual
    indicator.textContent = `Imagen ${index + 1} de ${slides.length}`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentIndex);

// Configurar autoplay cada 3 segundos
let autoplayInterval = setInterval(nextSlide, 3000);

// Detener autoplay cuando se hace hover sobre el contenedor
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

// Reanudar autoplay cuando se retira el cursor del contenedor
sliderContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 3000);
});




