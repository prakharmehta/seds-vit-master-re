$(document).ready(function(){
var count = 0;

var isEven = function(someNumber) {
  return (someNumber % 2 === 0) ? true : false;
};

$(".whatwedo-core-grad").click(function(){
  count++;

  if (isEven(count) === false && $(window).width()>768) {
    $("#whatwedo-heading-span").animate({top: '0vh'});
    $(".whatwedo-core-content").animate({left: '27vw'}, 1000);
    $(".whatwedo-heading").css('z-index', -100);
  }
  else if (isEven(count) === false && $(window).width()<768) {
    $(".whatwedo-core-content").css('visibility', 'visible');
    $("#whatwedo-core-content-span").css('visibility', 'visible');
    $(".whatwedo-core-content").animate({top: '442vh'});
    $(".whatwedo-core-content").css('z-index', 11);
  }
  else if (isEven(count) === true && $(window).width()>768) {
    $(".whatwedo-core-content").animate({left: '100vw'}, 2000);
    $("#whatwedo-heading-span").animate({top: '10vh'});
    $(".whatwedo-heading").css('z-index', 101);
  }
  else if (isEven(count) === true && $(window).width()<768) {
    $(".whatwedo-core-content").animate({top: '500vh'}, 2000);
    $(".whatwedo-core-content").css('z-index', -10);
    $(".whatwedo-core-content").css('visibility', 'hidden');
    $("#whatwedo-core-content-span").css('visibility', 'hidden');
  }
});

$(".whatwedo-outreach-grad").click(function(){
  count++;

  if (isEven(count) === false && $(window).width()>768) {
    $("#whatwedo-heading-span").animate({top: '0vh'});
    $(".whatwedo-core-container").animate({left: '-35vw'}, 1000);
    $(".whatwedo-core-grad").animate({left: '-35vw'}, 1000);
    $(".whatwedo-outreach-container").animate({left: '0vw'}, 1000);
    $(".whatwedo-outreach-container").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)', 2000)
    $(".whatwedo-outreach-grad").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)', 2000)
    $(".whatwedo-outreach-grad").animate({left: '0vw'}, 1000);
    $(".whatwedo-outreach-content").animate({left: '27vw'}, 1000);
    $("#whatwedo-outreach-span").animate({left: '11vw'}, 1000);
    $(".whatwedo-heading").css('z-index', -100);
  }

  if (isEven(count) === false && $(window).width()<768) {
    $(".whatwedo-outreach-content").css('visibility', 'visible');
    $("#whatwedo-outreach-content-span").css('visibility', 'visible');
    $(".whatwedo-outreach-container").animate({top: '413vh'});
    $(".whatwedo-outreach-container").css('z-index', 11);
    $(".whatwedo-outreach-grad").animate({top: '413vh'});
    $(".whatwedo-outreach-grad").css('z-index', 100);
    $(".whatwedo-outreach-content").animate({top: '442vh'});
    $(".whatwedo-outreach-content").css('z-index', 100);
  }

  else if (isEven(count) === true && $(window).width()>768) {
    $(".whatwedo-core-grad").animate({left: '0vw'}, 1000);
    $("#whatwedo-outreach-span").animate({left: '13vw'}, 1000);
    $(".whatwedo-outreach-content").animate({left: '100vw'}, 1000);
    $(".whatwedo-outreach-grad").animate({left: '33vw'}, 1000);
    $(".whatwedo-outreach-grad").css('transition', 1000);
    $(".whatwedo-outreach-grad").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)', 2000);
    $(".whatwedo-outreach-container").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)', 2000);
    $(".whatwedo-outreach-container").animate({left: '33vw'}, 1000);
    $(".whatwedo-core-container").animate({left: '0vw'}, 1000);
    $("#whatwedo-heading-span").animate({top: '10vh'});
    $(".whatwedo-heading").css('z-index', 100);
  }

  else if (isEven(count) === true && $(window).width()<768) {
    $(".whatwedo-outreach-content").animate({top: '500vh'});
    $(".whatwedo-outreach-content").css('z-index', -10);
    $(".whatwedo-outreach-container").animate({top: '442vh'});
    $(".whatwedo-outreach-container").css('z-index', 9);
    $(".whatwedo-outreach-grad").animate({top: '442vh'});
    $(".whatwedo-outreach-grad").css('z-index', 9);
    $(".whatwedo-outreach-content").css('visibility', 'hidden');
    $("#whatwedo-outreach-content-span").css('visibility', 'hidden');
  }
});

$(".whatwedo-projects-grad").click(function(){
  count++;

  if (isEven(count) === false && $(window).width()>768) {
    $("#whatwedo-heading-span").animate({top: '0vh'});
    $(".whatwedo-core-container").animate({left: '-69vw'}, 1200);
    $(".whatwedo-core-grad").animate({left: '-69vw'}, 1200);
    $(".whatwedo-outreach-container").animate({left: '-35vw'}, 1200);
    $(".whatwedo-outreach-grad").animate({left: '-35vw'}, 1200);
    $(".whatwedo-projects-container").animate({left: '0vw'}, 1200);
    $(".whatwedo-projects-grad").animate({left: '0vw'}, 1200);
    $(".whatwedo-projects-container").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)');
    $(".whatwedo-projects-grad").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)');
    $(".whatwedo-projects-content").animate({left: '27vw'}, 1200);
    $("#whatwedo-projects-span").animate({left: '11vw'}, 1200);
    $(".whatwedo-heading").css('z-index', -100);
  }

  if (isEven(count) === false && $(window).width()<768) {
    $(".whatwedo-projects-content").css('visibility', 'visible');
    $("#whatwedo-projects-content-span").css('visibility', 'visible');
    $(".whatwedo-projects-container").animate({top: '414vh'}, 1000);
    $(".whatwedo-projects-container").css('z-index', 11);
    $(".whatwedo-projects-grad").animate({top: '413vh'}, 900);
    $(".whatwedo-projects-grad").css('z-index', 100);
    $(".whatwedo-projects-content").animate({top: '442vh'}, 1050);
    $(".whatwedo-projects-content").css('z-index', 100);
  }

  else if (isEven(count) === true && $(window).width()>768) {
    $(".whatwedo-projects-content").animate({left: '100vw'}, 1200);
    $("#whatwedo-projects-span").animate({left: '13vw'}, 1200);
    $(".whatwedo-projects-grad").css('clip-path', 'polygon(19% 0%, 0% 100%, 100% 100%, 100% 0)');
    $(".whatwedo-projects-container").css('clip-path', 'polygon(20% 0%, 0% 100%, 100% 100%, 100% 0)');
    $(".whatwedo-projects-grad").animate({left: '65%'}, 1200);
    $(".whatwedo-projects-container").animate({left: '65vw'}, 1200);
    $(".whatwedo-outreach-grad").animate({left: '33vw'}, 1200);
    $(".whatwedo-outreach-container").animate({left: '33vw'}, 500);
    $(".whatwedo-core-grad").animate({left: '0%'}, 1200);
    $(".whatwedo-core-container").animate({left: '0vw'}, 1200);
    $("#whatwedo-heading-span").animate({top: '10vh'});
    $(".whatwedo-heading").css('z-index', 100);
  }

  else if (isEven(count) === true && $(window).width()<768) {
    $(".whatwedo-projects-content").animate({top: '500vh'});
    $(".whatwedo-projects-content").css('z-index', -10);
    $(".whatwedo-projects-container").animate({top: '473vh'});
    $(".whatwedo-projects-container").css('z-index', 9);
    $(".whatwedo-projects-grad").animate({top: '471vh'});
    $(".whatwedo-projects-grad").css('z-index', 9);
    $(".whatwedo-projects-content").css('visibility', 'hidden');
    $("#whatwedo-projects-content-span").css('visibility', 'hidden');
  }
});
});