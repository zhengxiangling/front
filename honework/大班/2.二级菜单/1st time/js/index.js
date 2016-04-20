$(function () {
	$(".Trd").hide();
	$(".menu_ > li").mouseenter(function () {
		// 下滑出现
		$(this).find(".Trd").stop().slideDown();
	});	
	$(".menu_ > li").mouseleave(function () {
		// 下滑出现
		$(this).find(".Trd").stop().slideUp();
	});
})