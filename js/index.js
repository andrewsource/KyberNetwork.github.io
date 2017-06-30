smoothScroll.init({ selectorHeader: '[data-scroll-header]' });

$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();

	// Assign active class to nav links while scolling
	$('.page-section').each(function(i) {
			if ($(this).position().top <= scrollDistance) {
					$('.navbar-nav li.nav-item').removeClass('active');
					$('.navbar-nav li.nav-item').eq(i).addClass('active');
			}
	});
}).scroll();

function update() {
  var wB = $('.plan-bar').width();
  var wA = 0;
  var wC = $('.plan-bar').height();

  var today = new Date(); //alert(today);
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var d = Math.round((Date.parse(mm + " "+ dd + ", " + yyyy))/(1000*60*60*24));//alert(d);

  var hours = new Date().getHours();
  //var total_d = 50;
  //pos_rad = ((d)*24 + hours) / ((total_d)*24.00);
  var start_d = Math.round((Date.parse("August 1, 2017"))/(1000*60*60*24));
  var phase2 = Math.round((Date.parse("December 1, 2017"))/(1000*60*60*24));
  var phase3 = Math.round((Date.parse("February 1, 2018"))/(1000*60*60*24));
  var phase4 = Math.round((Date.parse("June 1, 2018"))/(1000*60*60*24));
  var end_d = Math.round((Date.parse("December 1, 2018"))/(1000*60*60*24));
  var total_d = end_d - start_d;//alert(total_d);
  pos_rad = ((d - start_d)*24 + hours) / ((total_d)*24.00);
  //pos_rad = 244*24.00 / ((total_d)*24.00);//alert(pos_rad);
  if ($(window).innerWidth() > 500) {
    //alert('Less than 960');
    var phase2_pos = ((phase2 - start_d) / (total_d)) * wB - 75;//alert(phase2_pos);
    var phase3_pos = ((phase3 - start_d) / (total_d)) * wB - 75;//alert(phase3_pos);
    var phase4_pos = ((phase4 - start_d) / (total_d)) * wB - 75;//alert(phase4_pos);

    $(".step2").css({ "left": phase2_pos + "px" });
    $(".step3").css({ "left": phase3_pos + "px" });
    $(".step4").css({ "left": phase4_pos + "px" });
  } else {
    //alert(wC);
    var phase2_pos = ((phase2 - start_d) / (total_d)) * wC - 65;//alert(phase2_pos);
    var phase3_pos = ((phase3 - start_d) / (total_d)) * wC - 65;//alert(phase3_pos);
    var phase4_pos = ((phase4 - start_d) / (total_d)) * wC - 65;//alert(phase4_pos);

    $(".step2").css({ "left": phase2_pos + "px" });
    $(".step3").css({ "left": phase3_pos + "px" });
    $(".step4").css({ "left": phase4_pos + "px" });
  }

  xCoord = (wA) + wB*pos_rad;//alert(xCoord);
  $(".gradient").css({ "width": xCoord });
  setTimeout(function(){ update(); }, 1000);
}
$(function(){
  // var today1 = new Date();
  // var dd1 = today1.getDate();
  // var mm1 = today1.getMonth() + 1;
  // var yyyy1 = today1.getFullYear();
  // if ( dd1==1 && mm1==8 && yyyy1==2017) { //time to start gradient
  //   update();
  // }
  update();
});
jQuery(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var test = document.getElementById("home");
  var offsetNav = test.offsetHeight;
  //alert(offsetNav);
  //var offsetNav = 300;
  if (scroll > offsetNav) {
    $('.navbar').addClass('bg-black');
    $('.top-logo').addClass('hidden');
  }
  else {
    $('.navbar').removeClass('bg-black');
    $('.top-logo').removeClass('hidden');
  }
});
$('ul.navbar-nav li').click(function() {
  $('ul.navbar-nav li').removeClass('active');
  $(this).addClass('active');
});
