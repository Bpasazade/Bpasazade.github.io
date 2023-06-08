var jQuery2 = jQuery.noConflict(true);

jQuery2(document).ready(function() { 
  var $cursor = jQuery2(".cursor"),
  $overlay = jQuery2(".cover");

  /*function moveCircle(e) {
    TweenLite.to($cursor, 0.5, {
        css: {
          left: e.pageX,
          top: e.pageY
        },
        delay: 0.03
    });
  }*/

  jQuery2("#cover_1").hover(function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({"background-image": "url(../Assets/Gameplayss/cod.webp)",
                            "top": "39%", 
                            "left": "43%",});

  });
  jQuery2("#cover_2").on('mouseenter', function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({ "background-image": "url(../Assets/Gameplayss/diablo4.jpg)",
                             "top": "39%", 
                             "left": "58%",});
  });
  jQuery2("#cover_3").hover(function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({ "background-image": "url(../Assets/Gameplayss/hs.jpg)",
                             "top": "39%", 
                             "left": "73%",});
  });
  jQuery2("#cover_4").hover(function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({ "background-image": "url(../Assets/Gameplayss/re4.jpg)",
                             "top": "39%", 
                             "left": "45%",});
  });
  jQuery2("#cover_5").hover(function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({"background-image": "url(../Assets/Gameplayss/limbo.jpg)",
                            "top": "39%", 
                            "left": "60%",});

  });
  jQuery2("#cover_6").on('mouseenter', function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({ "background-image": "url(../Assets/Gameplayss/div2.jpg)",
                             "top": "84%", 
                             "left": "43%",});
  });
  jQuery2("#cover_7").hover(function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({ "background-image": "url(../Assets/Gameplayss/dota2.jpg)",
                             "top": "84%", 
                             "left": "58%",});
  });
  jQuery2("#cover_8").hover(function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({ "background-image": "url(../Assets/Gameplayss/bf2.jpg)",
                             "top": "84%", 
                             "left": "73%",});
  });
  jQuery2("#cover_9").hover(function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({ "background-image": "url(../Assets/Gameplayss/hk2.jpg)",
                             "top": "84%", 
                             "left": "45%",});
  });
  jQuery2("#cover_10").hover(function(){
    jQuery2(".cursor").show();
    jQuery2(".cursor").css({ "background-image": "url(../Assets/Gameplayss/hades.png)",
                             "top": "84%", 
                             "left": "60%",});
  });

  var flag = false;
  jQuery2($overlay).mousemove(function() {
    flag = true;
    TweenLite.to($cursor, 0.3, {scale: 1, autoAlpha: 1});
    //jQuery2($overlay).on("mousemove", moveCircle);
  });

  jQuery2($overlay).mouseout(function() {
    flag = false;
    TweenLite.to($cursor, 0.3, {scale: 0.1, autoAlpha: 0});
  });
});