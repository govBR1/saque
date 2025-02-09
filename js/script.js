// script.js
let currentIndex = 0;

function changeSlide() {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-inner img');
    const totalSlides = slides.length;

    // Atualiza o índice atual
    currentIndex = (currentIndex + 1) % totalSlides;

    // Aplica a transição para a próxima imagem
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Alterna os slides a cada 3 segundos
setInterval(changeSlide, 3000);
