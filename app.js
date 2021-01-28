const header = document.querySelector(".header-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
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
