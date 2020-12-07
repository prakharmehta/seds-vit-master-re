$(document).on('ready', function() {

  $(".lazy-gravitas").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true
  });

  $(".lazy-flagship").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true
  });

  $('.events-carousel-image-gravitas').mouseover(function() {
    $('.lazy-gravitas').slick('slickPause'),
    $('.events-gravitas-learn').css('visibility', 'visible');
    var dataId = $('.slick-current').attr("data-slick-index");
    console.log(dataId);
    if(dataId == 0) {
      $('.events-learn-button-gravitas').attr('onclick', "window.location.href='/starparty'")
    }
    else if(dataId == 1) {
      $('.events-learn-button-gravitas').attr('onclick', "window.location.href='/apollo'")
    }
    else if(dataId == 2) {
      $('.events-learn-button-gravitas').attr('onclick', "window.location.href='/odyssey'")
    }
  });

  $('.events-carousel-image-gravitas').mouseout(function() {
    $('.lazy-gravitas').slick('slickPlay'),
    $('.events-gravitas-learn').css('visibility', 'hidden');
  });

  $('.events-carousel-image-flagship').mouseover(function() {
    $('.lazy-flagship').slick('slickPause'),
    $('.events-flagship-learn').css('visibility', 'visible');
    var dataId = $('.slick-current').attr("data-slick-index");
    console.log(dataId);
    if(dataId == 0) {
      $('.events-learn-button-flagship').attr('onclick', "window.location.href='/astra'")
    }
    else if(dataId == 1) {
      $('.events-learn-button-flagship').attr('onclick', "window.location.href='/antariksh'")
    }
    else if(dataId == 2) {
      $('.events-learn-button-flagship').attr('onclick', "window.location.href='/astra'")
    }
  });

  $('.events-carousel-image-flagship').mouseout(function() {
    $('.lazy-flagship').slick('slickPlay'),
    $('.events-flagship-learn').css('visibility', 'hidden');
  });
});


