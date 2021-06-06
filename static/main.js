window.onscroll = () => {
  navScrollFunction()
};

const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

function navScrollFunction() {
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    navbar.className = 'navbar navbar-expand-md mx-auto scrolled';
    header.style.height = '55vh';
  } else {
    navbar.className = 'navbar navbar-expand-md notscrolled';
    header.style.height = '80vh';
  }
}

const foodview = document.querySelector('#foodview');
const enteriorview = document.querySelector('#enteriorview');

document.querySelector('#food').addEventListener('click', () => {
  foodview.style.display = 'flex';
  enteriorview.style.display = 'none';
})

document.querySelector('#enterior').addEventListener('click', () => {
  foodview.style.display = 'none';
  enteriorview.style.display = 'flex';
})

