var responsiveOpen = document.getElementsByClassName("responsive-open");
var responsiveNav = document.getElementById("responsive");

for (var i = 0; i < responsiveOpen.length; i++) {
  responsiveOpen[i].addEventListener("click", function () {
    responsiveNav.classList.toggle("responsive-nav")
  })
}

// https://css-tricks.com/snippets/jquery/smooth-scrolling/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          console.log($target)
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
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
