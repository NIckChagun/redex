document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
    interval: false 
  });

  function startAutoSlide() {
    setInterval(function () {
      myCarousel.next(); 
    }, 5000);
  }

  startAutoSlide();
});