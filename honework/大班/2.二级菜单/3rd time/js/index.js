	$(function(){
		$("nav > ul > li > ul").hide();
		$("nav > ul > li").click(function(){
			$(this).find("ul").stop().slideDown();
		})
		.mouseleave(function(){
			$(this).find("ul").stop().slideUp();
		});
	})