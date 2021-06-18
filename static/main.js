window.onscroll = () => {
  navScrollFunction()
};

const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const arrow = document.querySelector('.arrow');

function navScrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 95) {
    navbar.className = 'navbar navbar-expand-md mx-auto scrolled';
    header.style.height = '70vh';
    arrow.style.display = 'none';
  } else {
    navbar.className = 'navbar navbar-expand-md notscrolled';
    header.style.height = '100vh';
    arrow.style.display = 'block';
  }
}

const foodview = document.querySelector('#foodview');
const enteriorview = document.querySelector('#enteriorview');
const riportview = document.querySelector('#riportview');
const travelview = document.querySelector('#travelview');
const contactview = document.querySelector('#contactview');

document.querySelector('#food').addEventListener('click', () => {
  foodview.style.display = 'flex';
  enteriorview.style.display = 'none';
  riportview.style.display = 'none';
  travelview.style.display = 'none';
  gsap.from(".anititle", {opacity: 0, y: 100, duration: 0.5, delay: 1.5});
  gsap.from(".imgcontainer", {opacity: 0, y: -50, duration: 0.7, delay: 0.5});
})

document.querySelector('#enterior').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'flex';
  riportview.style.display = 'none';
  travelview.style.display = 'none';
  gsap.from(".anititle", {opacity: 0, y: 100, duration: 0.5, delay: 1.5});
  gsap.from(".imgcontainer", {opacity: 0, y: -50, duration: 0.7, delay: 0.5});
})

document.querySelector('#riport').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'none';
  riportview.style.display = 'flex';
  travelview.style.display = 'none';
  gsap.from(".anititle", {opacity: 0, y: 100, duration: 0.5, delay: 1.5});
  gsap.from(".imgcontainer", {opacity: 0, y: -50, duration: 0.7, delay: 0.5});
})

document.querySelector('#travel').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'none';
  riportview.style.display = 'none';
  travelview.style.display = 'flex';
  gsap.from(".anititle", {opacity: 0, y: 100, duration: 0.5, delay: 1.5});
  gsap.from(".imgcontainer", {opacity: 0, y: -50, duration: 0.7, delay: 0.5});
})

document.querySelector('#portfolio').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'none';
  riportview.style.display = 'none';
  travelview.style.display = 'none';
})