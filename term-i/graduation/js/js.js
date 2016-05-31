$(document).ready(function(){
			//屏幕高度自适应
			/*var $winWidth = $(window).width();*/
			var $winHeight = $(window).height();
			var $wrp = $(".wrapper");
			$wrp.height($winHeight);
			/*$wrp.width($winWidth);*/
			//窗口打开和关闭
			$(".window").hide();
			$(".left").click(function(){
				$(".li_meet").fadeIn();
			});
			$(".mid").click(function(){
				$(".li_meetagain").fadeIn();
			});
			$(".right").click(function(){
				$(".li_future").fadeIn();
			});
			$(".back").click(function(){
				$(this).parent().fadeOut(300);
			});
		})