$(document).ready(function () {
  $("form").submit(function () {
    var formdata = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "https://formspree.io/f/xqkgbvly",
      data: formdata,
    });
    var form = document.querySelector(".contact__form form");
    form.reset();
    var thankYou = document.querySelector('.contact__form__thankyou__msg')
    thankYou.classList.add('visible');
    return false;
  });
});
