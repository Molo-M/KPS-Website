let slideIndex = 0;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex].style.display = "block";  
}

function nextSlide() {
    showSlide(1);
}

function prevSlide() {
    showSlide(-1);
}

// Show the first slide initially
showSlide(slideIndex);
