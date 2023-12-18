window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var navbar = document.getElementById('navbar');
  var logo = document.getElementById('logo');
  var topbar = document.getElementById('topbar');

  if (scrollTop >= 20) {
    navbar.style.padding = '20px 0';
    logo.style.width = '50%';
    topbar.style.display = 'none';
  } else {
    navbar.style.padding = '10px 0 20px 0';
    logo.style.width = '80%';
    topbar.style.display = 'block';
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
    var mobileImagePath = `assests/images/slider/slider-${index + 1}-mob.jpg`;
    var largeImagePath = `assests/images/slider/slider-${index + 1}.jpg`;

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
if (window.innerWidth >= 1050) {
  // Select all img elements
  const image = document.querySelector('.hero-img img.w-100');
  // Add event listeners to each img element
  images.forEach((image) => {
    image.addEventListener('mouseover', (event) => {
      // Add the class to the hovered img element
      event.target.classList.add('example');
      $('.example').extm({
        zoomElement: false,
        imageSrc: $(this).attr('src'),
        squareOverlay: false,
        position: 'right',
        rightPad: 0,
        lazy: false,
        zoomLevel: 2,
        zoomSize: false,
        loadingText: false,
        loadingImage: false,
      });
    });

    image.addEventListener('mouseout', (event) => {
      // Remove the class from the unhovered img element
      event.target.classList.remove('example');
    });
  });
}
