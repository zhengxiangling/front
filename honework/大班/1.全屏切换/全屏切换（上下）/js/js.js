$(function() {
	var $winsWidth = $(window).width();
	var $winsHeigh = $(window).height();
	var $ul = $(".wrapper ul");
	var $li = $(".wrapper ul>li");
	var $liLength = $li.length;
	var $scrollWidth = $(document).scrollWidth;
	$(".wrapper").width($winsWidth - $scrollWidth).height($winsHeigh);
	/*$ul.height($winsHeigh*$liLength);*/
	var $btn_wr = $(".btn_wr");
	var $btn = $btn_wr.find("div");

	$btn.click(function() {
		var index = $(this).index();
		$("body").animate({
			"scrollTop": $winsHeigh * index
		}, 300);
	})

	var $top = $("#top");
	$top.hide();
	$(window).scroll(function() {
		var $topscroll = $("body").scrollTop();
		/*alert($topscroll);*/
		if ($topscroll > 1000)
			$top.show();
		else
			$top.hide();
	})

	$top.click(function(){
		$("body").animate({"scrollTop":0},500)
	})
})