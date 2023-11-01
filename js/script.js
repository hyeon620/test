$(document).ready(function(){
  $('.m-btn').click(function(){
    $('.m-btn').toggleClass('on')
    $('.m-nav').toggleClass('on')
    $('.window-mask').fadeToggle();
  })
  function skill(id, percent){
    var bar = new ProgressBar.Line(id, {
      strokeWidth: 4,
      traiWidth: 4,
      color: "white",
      duration: 2400,
    });
    bar.animate(percent)
  }
  skill("#ae",0.95)
  skill("#pp",0.7)
  skill("#c4d",0.6)
  skill("#html",0.7)
  skill("#css",0.7)
  skill("#js",0.6)

})