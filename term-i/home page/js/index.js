$(function(){
	function slider(){
		$(".zimu").animate({"margin-top":"18%"},{duration: 2000, easing: "easeOutBounce"});
	}
	window.onload=slider;
	$(".buttom2").hide();
	$(".buttom1").mouseenter(function(){
		$(".buttom2").fadeIn(500);
		$(".buttom1").hide();
	});
	$(".buttom2").mouseout(function(){
		$(".buttom1").fadeIn(500);
		$(".buttom2").hide();
	});
	var $winWidth=$(window).width();
	var $winHeight=$(window).height();
	$(".wrapper").height($winHeight);
})
