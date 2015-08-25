
var getRandomArbitrary = function (min, max) {
  return Math.floor( Math.random() * (max - min) + min );
};

var run = function () {

  $('img').each( function(index, element) {
    $(this).animate({
      left: getRandomArbitrary(0,80)+'vw',
      top: getRandomArbitrary(0,80)+'vh'
    }, 2000);
    // $(this).animate({left: "+=150px", top: "+=30px"},2000);
    // $(this).animate({left: "-=150px", top: "-=30px"},2000);
    // $(this).animate({left: "-=150px", top: "+=30px"},2000);
  });
};


$(document).ready( function() {
  run();
  window.setInterval( run, 2000 );
});

// $("img").each(function(index, element) {
//   console.log('img' + index + element)(+ ": " + $().text() );
// });


