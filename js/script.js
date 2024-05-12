// navbar js
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navItems = document.querySelector('.nav-items');

hamburgerMenu.addEventListener('click', () => {
    navItems.classList.toggle('show');
});


// main-container js

//for video
const video = document.getElementById('myVideo');

video.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
});


document.addEventListener('DOMContentLoaded', function() {
  var con16 = document.querySelector('.con-16');
  setTimeout(function() {
      con16.classList.add('shown');
  }, 5000);
});

