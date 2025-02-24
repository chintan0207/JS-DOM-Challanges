
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carouselTrack = document.getElementById('carouselTrack');
      const caption = document.getElementById('caption');
      const prevButton = document.getElementById('prevButton');
      const nextButton = document.getElementById('nextButton');
      const autoPlayButton = document.getElementById('autoPlayButton');
      const timerDisplay = document.getElementById('timerDisplay');
      const carouselNav = document.getElementById('carouselNav');

      let currentIndex = 0;
      let autoPlayInterval;

      function createSlides() {
        images.forEach((image, index) => {
          const slide = document.createElement('div');
          slide.classList.add('carousel-slide');
          slide.style.backgroundImage = `url(${image.url})`;
          carouselTrack.appendChild(slide);

          const indicator = document.createElement('div');
          indicator.classList.add('carousel-indicator');
          if (index === 0) indicator.classList.add('active');
          indicator.addEventListener('click', () => goToSlide(index));
          carouselNav.appendChild(indicator);
        });
      }

      function updateCarousel() {
        const slideWidth = carouselTrack.clientWidth;
        carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        caption.textContent = images[currentIndex].caption;

        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
          indicator.classList.toggle('active', index === currentIndex);
        });
      }

      function goToSlide(index) {
        currentIndex = index < 0 ? images.length - 1 : index % images.length;
        updateCarousel();
      }

      prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
      nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

      function toggleAutoPlay() {
        if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
          autoPlayInterval = null;
          autoPlayButton.textContent = 'Start Auto Play';
          timerDisplay.textContent = '';
        } else {
          let timeLeft = 3;
          timerDisplay.textContent = `Next slide in: ${timeLeft}s`;
          autoPlayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
            timeLeft = 3;
          }, 3000);

          setInterval(() => {
            if (autoPlayInterval) {
              timeLeft--;
              timerDisplay.textContent = `Next slide in: ${timeLeft}s`;
            }
          }, 1000);

          autoPlayButton.textContent = 'Stop Auto Play';
        }
      }

      autoPlayButton.addEventListener('click', toggleAutoPlay);

      window.addEventListener('resize', updateCarousel);

      createSlides();
      updateCarousel();