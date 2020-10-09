$(document).ready(function(){
var count = 0;

var isEven = function(someNumber) {
  return (someNumber % 2 === 0) ? true : false;
};

$(".whatwedo-core-grad").click(function(){
  count++;

  if (isEven(count) === false) {
    $(".whatwedo-heading").animate({top: '-6%'});
    $(".whatwedo-core-content").animate({left: '27%'}, 1000);
  }
  else if (isEven(count) === true) {
    $(".whatwedo-core-content").animate({left: '100%'}, 1000);
    $(".whatwedo-heading").animate({top: '+6%'});
  }
});

$(".whatwedo-outreach-grad").click(function(){
  count++;

  if (isEven(count) === false) {
    $(".whatwedo-heading").animate({top: '-6%'});
    $(".whatwedo-core-container").animate({left: '-35%'}, 1000);
    $(".whatwedo-core-grad").animate({left: '-35%'}, 1000);
    $(".whatwedo-outreach-container").animate({left: '0%'}, 1000);
    $(".whatwedo-outreach-container").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)', 2000)
    $(".whatwedo-outreach-grad").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)', 2000)
    $(".whatwedo-outreach-grad").animate({left: '0%'}, 1000);
    $(".whatwedo-outreach-content").animate({left: '27%'}, 1000);
    $("#whatwedo-outreach-span").animate({left: '30%'}, 1000);
  }

  else if (isEven(count) === true) {
    $(".whatwedo-core-grad").animate({left: '0%'}, 1000);
    $("#whatwedo-outreach-span").animate({left: '44%'}, 1000);
    $(".whatwedo-outreach-content").animate({left: '100%'}, 1000);
    $(".whatwedo-outreach-grad").animate({left: '33%'}, 1000);
    $(".whatwedo-outreach-grad").css('transition', 1000);
    $(".whatwedo-outreach-grad").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)', 2000);
    $(".whatwedo-outreach-container").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)', 2000);
    $(".whatwedo-outreach-container").animate({left: '33%'}, 1000);
    $(".whatwedo-core-container").animate({left: '0%'}, 1000);
    $(".whatwedo-heading").animate({top: '+6%'});
  }
});

$(".whatwedo-projects-grad").click(function(){
  count++;

  if (isEven(count) === false) {
    $(".whatwedo-heading").animate({top: '-6%'});
    $(".whatwedo-core-container").animate({left: '-69%'}, 1200);
    $(".whatwedo-core-grad").animate({left: '-69%'}, 1200);
    $(".whatwedo-outreach-container").animate({left: '-35%'}, 1200);
    $(".whatwedo-outreach-grad").animate({left: '-35%'}, 1200);
    $(".whatwedo-projects-container").animate({left: '0%'}, 1200);
    $(".whatwedo-projects-grad").animate({left: '0%'}, 1200);
    $(".whatwedo-projects-container").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)');
    $(".whatwedo-projects-grad").css('clip-path', 'polygon(0% 0%, 0% 100%, 80% 100%, 100% 0)');
    $(".whatwedo-projects-content").animate({left: '27%'}, 1200);
    $("#whatwedo-projects-span").animate({left: '33%'}, 1200);
  }

  else if (isEven(count) === true) {
    $(".whatwedo-projects-content").animate({left: '100%'}, 1200);
    $("#whatwedo-projects-span").animate({left: '45%'}, 1200);
    $(".whatwedo-projects-grad").css('clip-path', 'polygon(19% 0%, 0% 100%, 100% 100%, 100% 0)');
    $(".whatwedo-projects-container").css('clip-path', 'polygon(20% 0%, 0% 100%, 100% 100%, 100% 0)');
    $(".whatwedo-projects-grad").animate({left: '65%'}, 1200);
    $(".whatwedo-projects-container").animate({left: '65%'}, 1200);
    $(".whatwedo-outreach-grad").animate({left: '33%'}, 1200);
    $(".whatwedo-outreach-container").animate({left: '33%'}, 500);
    $(".whatwedo-core-grad").animate({left: '0%'}, 1200);
    $(".whatwedo-core-container").animate({left: '0%'}, 1200);
    $(".whatwedo-heading").animate({top: '6%'});
  }
});
});