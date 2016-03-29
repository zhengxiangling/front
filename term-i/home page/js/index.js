$(function(){
	function slider(){
		$(".zimu").animate({"margin-top":"313px"},{duration: 3000, easing: "easeOutBounce"});
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
})
