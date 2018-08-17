let projects = document.querySelectorAll('.grid__item');

// add mouseover and mouseleave event listeners to each grid item to animate it
projects.forEach(function (project) {
  project.addEventListener('mouseover', function () {
    this.addEventListener('mouseleave', function () {
      this.classList.remove('animate')
    });
    this.classList.add('animate');
  });
});