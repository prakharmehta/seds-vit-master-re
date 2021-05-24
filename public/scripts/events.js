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

  $('.events-gravitas').mouseover(function() {
    $('.lazy-gravitas').slick('slickPause');
    var dataId = $('.events-gravitas .slick-current').attr("data-slick-index");
    console.log(dataId);
    if(dataId == 0) {
      $('.events-learn-button-gravitas .modal-trigger').attr('href', "#modal3")
    }
    else if(dataId == 1) {
      $('.events-learn-button-gravitas .modal-trigger').attr('href', "#modal4")
    }
    else if(dataId == 2) {
      $('.events-learn-button-gravitas .modal-trigger').attr('href', "#modal5")
    }
  });

  $('.events-gravitas').mouseout(function() {
    $('.lazy-gravitas').slick('slickPlay');
  });

  $('.events-flagship').mouseover(function() {
    $('.lazy-gravitas').slick('slickPause');
    var dataId = $('.events-flagship .slick-current').attr("data-slick-index");
    console.log(dataId);
    if(dataId == 0 || dataId == 2) {
      $('.events-learn-button-flagship .modal-trigger').attr('href', "#modal1")
    }
    else if(dataId == 1 || dataId == 3) {
      $('.events-learn-button-flagship .modal-trigger').attr('href', "#modal2")
    }
  });

  $('.events-flagship').mouseout(function() {
    $('.lazy-gravitas').slick('slickPlay');
  });
})
