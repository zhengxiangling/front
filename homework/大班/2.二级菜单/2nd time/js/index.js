$(function(){
	$("nav > ul > li > ul").hide();
	$("nav > ul > li").mouseenter(function(){
		$(this).find("ul").stop().slideDown();
	})
	.mouseleave(function(){
		$(this).find("ul").stop().slideUp();
	});
})