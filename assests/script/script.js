window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var navbar = document.getElementById('navbar');
  var logo = document.getElementById('logo');

  if (scrollTop >= 20) {
    navbar.style.padding = '20px 0';
    logo.style.width = '50%';
  } else {
    navbar.style.padding = '10px 0 20px 0';
    logo.style.width = '80%';
  }
}

// Add CSS transition to the 'navbar' and 'logo' elements
document.getElementById('navbar').style.transition = 'padding 0.5s ease';
document.getElementById('logo').style.transition = 'width 0.5s ease';

document.querySelectorAll('.navbar-nav a').forEach((navLink) => {
  navLink.addEventListener('click', () => {
    document.querySelector('.navbar-toggler').click(); // Simulate a click on the toggle button
  });
});

// Change the images

function updateCarouselImages() {
  var carouselItems = document.querySelectorAll('#mainSlider .carousel-item');

  carouselItems.forEach(function (item, index) {
    var mobileImagePath = `assests/images/slider/slider-${index + 1}-mob.webp`;
    var largeImagePath = `assests/images/slider/slider-${index + 1}.webp`;

    var imageElement = item.querySelector('img');

    if (window.innerWidth < 769) {
      imageElement.src = mobileImagePath;
    } else {
      imageElement.src = largeImagePath;
    }
  });
}

// Call the function on page load and resize
window.addEventListener('load', updateCarouselImages);
window.addEventListener('resize', updateCarouselImages);

// Check if the screen width is 1050px or more

$(document).ready(function () {
  if (window.innerWidth >= 1000) {
    $('.zoom').magnify({
      speed: 100,
      magnifiedWidth: 700,
      magnifiedHeight: 700,
    });
  }
});
