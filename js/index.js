$(document).ready(function() {

  // $('h2').on('mouseover', function() {
  //     $(this).animate({
  //       color: #F59B45;
  //     });
  // });
  // Wrap every letter in a span
$('description .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letters'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.description .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.description .line',
    translateX: [0,$(".description .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.descripition .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.description',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  $('h2').on('mouseover', function() {
    $(this).animate({
      "letter-spacing": "10px",
      "font-size": "40px"
    }, 1000);
  });

});
