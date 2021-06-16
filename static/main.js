window.onscroll = () => {
  navScrollFunction()
};

const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

function navScrollFunction() {
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    navbar.className = 'navbar navbar-expand-md mx-auto scrolled';
  } else {
    navbar.className = 'navbar navbar-expand-md notscrolled';
  }
}

const foodview = document.querySelector('#foodview');
const enteriorview = document.querySelector('#enteriorview');
const riportview = document.querySelector('#riportview');
const travelview = document.querySelector('#travelview');

document.querySelector('#food').addEventListener('click', () => {
  foodview.style.display = 'flex';
  enteriorview.style.display = 'none';
  riportview.style.display = 'none';
  travelview.style.display = 'none';
  scrollTo('foodview');
})

document.querySelector('#enterior').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'flex';
  riportview.style.display = 'none';
  travelview.style.display = 'none';
  scrollTo('enteriorview');
})

document.querySelector('#riport').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'none';
  riportview.style.display = 'flex';
  travelview.style.display = 'none';
  scrollTo('riportview');
})

document.querySelector('#travel').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'none';
  riportview.style.display = 'none';
  travelview.style.display = 'flex';
  scrollTo('travelview');
})

document.querySelector('#portfolio').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'none';
  scrollTo('portfolio');
})

function scrollTo(hash) {
  location.hash = "#" + hash;
}

