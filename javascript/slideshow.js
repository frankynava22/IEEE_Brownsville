const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
let currentImageIndex = 0;

function nextImage() {
  images[currentImageIndex].style.opacity = '0';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = '1';
}

// Change image every 3 seconds (adjust as needed)
setInterval(nextImage, 6000);
