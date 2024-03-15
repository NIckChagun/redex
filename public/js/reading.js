document.addEventListener('DOMContentLoaded', function () {
    const readings = document.querySelectorAll('.reading > div');
  
    readings.forEach((reading, index) => {
      setTimeout(() => {
        reading.style.background = 'red';
        reading.classList.add('filled');
      }, 5000 + (index * 5000));
    });
});