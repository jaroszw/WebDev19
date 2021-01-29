const header = document.querySelector(".header-container");
const line = document.querySelector(".menu-icon__line");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
    line.classList.add("move");
  } else {
    header.classList.remove("scrolled");
    line.classList.remove("move");
  }
});

$(function () {
  $('input[name="birthday"]').daterangepicker(
    {
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 2000,
      maxYear: parseInt(moment().format("YYYY"), 10),
    },
    function (start, end, label) {
      var years = moment().diff(start, "years");
    }
  );
});
