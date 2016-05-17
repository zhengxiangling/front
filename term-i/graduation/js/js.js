$(document).ready(function(){
			//屏幕高度自适应
			var $winWidth = $(window).width();
			var $winHeight = $(window).height();
			var $wrp = $(".wrapper");
			$wrp.height($winHeight);
			/*$(window).resize(function(){
				$winHeight = $(window).height();
				$wrp.height($winHeight);
			});*/

		})