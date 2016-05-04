$(function(){
	var $winWidth = $(window).width();
	var $winHeight = $(window).height();
	/*alert($winHeight);*/
	var $wrp = $(".wrapper");
	var $sliderli = $(".slider>ul>li");

	/*$wrp.width($winWidth);
	$wrp.height($winHeight*4);*/
	$wrp.height($winHeight*3);
	$(".slider").width($winHeight*4);
	$(".slider>ul").width($winHeight*4);
	$(".slider").height($winWidth);
	$sliderli.width($winHeight);
	$sliderli.height($winWidth*4);

	var $clearfix = $(".clearfix");
/*	$clearfix.width($winWidth);*/
	$clearfix.height($winHeight*3);

	
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		$wrp.css("marginLeft",-scroll);	
	});
})
	