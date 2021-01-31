let topHeader = document.getElementById('header-container');
const line = document.querySelector('.menu-icon__line');
const title = document.getElementById('popular');
const list = document.querySelector('.navbar__list');
const links = list.querySelectorAll('li a');
const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    topHeader.classList.add('scrolled');
    line.classList.add('move');
  } else {
    topHeader.classList.remove('scrolled');
    line.classList.remove('move');
  }
});

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
});

links.forEach((link) =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const elementID = this.getAttribute('id');
    const selectedSection = document.getElementById(`${elementID}-sections`);
    window.scrollTo({
      top: `${selectedSection.offsetTop - topHeader.offsetHeight - 120}`,
      left: 0,
      behavior: 'smooth',
    });
    menuIcon.classList.remove('open');
  })
);

$(function () {
  $('input[name="birthday"]').daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 2000,
      maxYear: parseInt(moment().format('YYYY'), 10),
    },
    function (start, end, label) {
      var years = moment().diff(start, 'years');
    }
  );
});
