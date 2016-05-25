$(document).ready(function(){
			//屏幕高度自适应
			var $winWidth = $(window).width();
			var $winHeight = $(window).height();
			var $wrp = $(".wrapper");
			$wrp.height($winHeight);
			/*$wrp.width($winWidth);*/
			 //手机版
			 if ($winWidth<=375) {
			 	$(".wrapper").empty();
			 }else{
			 	$(".phone").empty();
			 }
			 ;
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
			$(".i-player").toggle(fun1,fun2);
			function fun1(){
				$(".i-player").css("background-image","url(img/i-player2.png)")
			};
			function fun2(){
				$(".i-player").css("background-image","url(img/i-player1.png)")
			}
		})