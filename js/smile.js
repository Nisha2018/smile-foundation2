// const header = document.querySelector(".header");
// const link = document.querySelectorAll(".link");
// const contact = document.querySelector(".contact-info");

// window.addEventListener('scroll', () => {

//     if (window.pageYOffset >= 30) {
//         header.style.position = "fixed";
//         header.style.background = "#fff";
//         contact.classList.add("link-dark");
//     }
//     else{
//     	header.style.position = "absolute";
//         header.style.background = "transparent";
//         contact.classList.remove("link-dark");
//     }

// });

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}


// text animation

// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml2');
textWrapper[0].innerHTML = textWrapper[0].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper[1].innerHTML = textWrapper[1].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper[2].innerHTML = textWrapper[1].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper[3].innerHTML = textWrapper[1].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper[4].innerHTML = textWrapper[1].textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });