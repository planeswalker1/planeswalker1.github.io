var responsiveOpen = document.getElementsByClassName("responsive-open");
var responsiveNav = document.getElementById("responsive");

for (var i = 0; i < responsiveOpen.length; i++) {
  responsiveOpen[i].addEventListener("click", function () {
    responsiveNav.classList.toggle("responsive-nav")
  })
}

// footer background code

// orange
// red
// purple
// blue
// lime

// const footer = document.querySelector('#footer');
// const colorsArray = ['rgba(255, 165, 0, 0.8)', 'rgba(255, 0, 0, 0.8)', 'rgba(128, 0, 128, 0.8)', 'rgba(0, 0, 255, 0.8)', 'rgba(0, 255, 0, 0.8)'];
//
// function changeBackground () {
//   const index = Math.floor(Math.random() * colorsArray.length);
//   footer.style.background = colorsArray[index];
// }
//
// window.addEventListener('load', changeBackground);

// new code
// const footer = document.querySelector('#footer');
//
// function randomColor () {
//   // pick a red from 0 - 255
//   const r = Math.floor(Math.random() * 256);
//   // pick a green from 0 - 255
//   const g = Math.floor(Math.random() * 256);
//   // pick a blue from 0 - 255
//   const b = Math.floor(Math.random() * 256);
//
//   // "rgb(r, g, b)";
//   return "rgb(" + r + ", " + g + ", " + b + ")";
// }
//
// function changeBackground () {
//   footer.style.background = randomColor();
// }
//
// window.addEventListener('load', changeBackground);
