$(function() {
	var $winsWidth = $(window).width();
	var $winsHeight = $(window).height();
	var $wrpUl = $(".wrapper ul");
	var $wrpLi = $(".wrapper ul>li");
	var $liLength = $wrpLi.length;
	var $scrollWidth = $(document).scrollWidth;
	$(".wrapper").width($winsWidth - $scrollWidth).height($winsHeight);
	$wrpUl.width($winsWidth * $liLength);
	$wrpUl, $wrpLi.height($winsHeight);
	$wrpLi.width($winsWidth);
	/*$ul.height($winsHeight*$liLength);*/
	var $btn_wr = $(".btn_wr");
	var $btn = $btn_wr.find("div");
	var $lb = $(".btn_lft");
	var $rb = $(".btn_rit");

	function fnbyclft() {
		$(".section_wr").animate({
			"marginLeft": -$winsWidth
		}, function() {
			$(".section_wr li").first().appendTo(".section_wr");
			$(".section_wr").css("marginLeft", 0);
		});
	}

	$lb.click(function() {
		fnbyclft()
	})

	function fnbycrit() {
		$(".section").last().prependTo(".section_wr");
		$(".section_wr").css("margin-left", -$winsWidth);
		$(".section_wr").animate({
			"marginLeft": 0
		});
	}

	$rb.click(function() {
		fnbycrit()
	})

	var $time = setInterval(fnbyclft,5000);

	$lb.mouseenter(function(){
		clearInterval($time)
	})

	$rb.mouseenter(function(){
		clearInterval($time)
	})

	$lb.mouseleave(function(){
		$time = setInterval(fnbyclft,5000)
	})

	$rb.mouseleave(function(){
		$time = setInterval(fnbyclft,5000)
	})
})