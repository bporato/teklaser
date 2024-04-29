export function laserGallery() {
  const thumbnails = document.querySelectorAll('.laser-description-gallery img')

  const principalImage = document.querySelector('.laser-description-principal-image img');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          principalImage.src = this.src;
          principalImage.alt = this.alt;
      });
  });
}