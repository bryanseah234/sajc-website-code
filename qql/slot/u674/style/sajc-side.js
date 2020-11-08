var pw = 1200;
var ph = 521;
$(function(){
    
    var windowWidth = parseInt($(window).width());
    if (windowWidth<1200)
    {
      $(".description").css("marginLeft","0px");
      if (windowWidth<=800) {	pw = windowWidth-40;    }
      else		    {   pw = windowWidth;  	}
      ph = Math.floor((pw/1200)*521);
    }
	
    $(".mobile-menu").click(function(event){
        $(".sitemenu_area").toggle();
    });  

    $(".overlay div.sidelink .side_cnt").html('');
    $(".overlay #student .side_cnt").html($("#student_cnt .iveo_pipe_pagetree_getpagecontent").html());
    $(".overlay #parent .side_cnt").html($("#parent_cnt .iveo_pipe_pagetree_getpagecontent").html());
    $(".overlay #sav .side_cnt").html($("#sav_cnt .iveo_pipe_pagetree_getpagecontent").html());
    $('.overlay div.sidelink').mouseenter(function(){
      var curr = "#" + $(this).attr("id");
      $('.overlay div.sidelink').removeClass('active');
      $(curr).addClass('active');
    }
                                );
    $('.overlay div.sidelink').mouseleave(function() {
      $('div.sidelink').removeClass('active');
    }
                                );
  }
   );
