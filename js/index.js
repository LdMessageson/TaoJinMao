$(function (){
	
	$(".text_bottom").find("img").mouseover(function () {
		$(this).parent("a").prev("span").stop().animate({
			opacity: 1,
		},800)
		$(this).next("p").stop().animate({
			fontSize : "18px",
			fontColor : "#555",
		},600)
		$(this).parent("a").next("div").stop().animate({
			opacity:1,
		},800)
		$(this).parent("a").next("div.Details").stop().animate({
		opacity:1,
		},800)
		$("#text_none").hide()
    })
	$(".text_bottom").find("img").mouseout(function () {
		$("#text_none").css("display","block");
		$(this).parent("a").prev("span").stop().animate({
			opacity: 0,
		},800)
		$(this).next("p").stop().animate({
			fontSize : "1.3em",
			fontColor: "#868686",	
		},600)
		$(this).parent("a").next("div.Details").stop().animate({
			opacity:0,
		},800)
		$("#text_none").show()
	})
	
	$(".text_bottom ul li").find("img").rotate({ 
	    bind : {
	        mouseover : function(){
	            $(this).rotate({animateTo: 360});
	        }, mouseout : function(){
	            $(this).rotate({animateTo: 0});
	        }
	    }
	});
	
	
//	$("#photo").mouseover(function () {
//		$(this).parent("a").addClass("curr");
//		
//	})
//	$("#photo").mouseover(function () {
//		$(this).parent("a").addClass("curr");
//		
//	})
//	
	
	
	
//	$(".firstInfo ").find("a").mouseover(function () {
//		 $(this).children(".default").css("display","block")
//	})
//	$(".firstInfo ").find("a").mouseout(function () {
//		 $(this).children(".default").css("display","none")
//	})	
//	$(".firstInfo ").find("a").mouseover(function () {
//		 $(this).children(".default").stop().animate({
//		 	top :"-103%",
//		 },400)
//	})
//	
//	$(".firstInfo ").find("a").mouseout(function () {
//		 $(this).children(".default").stop().animate({
//		 	top :0,
//		 },400)
//	})
	
	
	$(".secondInfo").hide();
	
	$(".soucers").click("on",function () {
		$(".secondInfo").show();
		$(".firstInfo").hide();
		$(".text_secous").animate({
		top: "560px",
		},500,function () {
			$(".yellow_box").stop().animate({
				top: "360px",
			},300,function () {
				$(".white_line").stop().animate({
					top: "50px",
					opacity: 1,
				},500,function () {
							$(".logo_01").stop().animate({
							top: "76px",
							left:"140px",
							opacity: 1,
							width: "80px",
						},1800,"easeOutBack")
						$(".logo_02").stop().animate({
							top: "102px",
							left:"316px",
							opacity: 1,
							width: "75px",
						},1600,"easeOutBack")
						$(".logo_03").stop().animate({
							top: "68px",
							left:"500px",
							opacity: 1,
							width: "65px",
						},1400,"easeOutBack")
						$(".logo_04").stop().animate({
							top: "90px",
							left:"654px",
							opacity: 1,
							width: "74px",
						},1300,"easeOutBack")
						$(".logo_05").stop().animate({
							top: "190px",
							left:"245px",
							opacity: 1,
							width: "68px",
						},1200,"easeOutBack")
						$(".logo_06").stop().animate({
							top: "152px",
							left:"448px",
							opacity: 1,
							width: "66px",
						},1100,"easeOutBack")
						$(".logo_07").stop().animate({
							top: "184px",
							left:"550",
							opacity: 1,
							width: "60px",
						},1000,"easeOutBack")
						$(".logo_08").stop().animate({
							top: "212px",
							left:"360px",
							opacity: 1,
							width: "62px",
						},940,"easeOutBack")
						$(".logo_09").stop().animate({
							top: "274px",
							left:"470px",
							opacity: 1,
							width: "52px",
						},900,"easeOutBack")
						$(".logo_10").stop().animate({
							top: "322px",
							left:"368px",
							opacity: 1,
							width: "55px",
						},800,"easeOutBack")
					})
					
				})
			
		})
	})
	
	
	$(".life").click("on",function () {
		$(".secondInfo").hide();
		$(".firstInfo").show();
		$(".text_secous").stop().animate({
		top: "560px"
		},50,function () {
			$(".yellow_box").stop().animate({
				top: "100%",
			},50,function () {
				$(".white_line").stop().animate({
					top: "100%",
				},50,function () {
					$(".small").stop().animate({
						top: "356px",
						left:"412px",
						opacity: "0",
					},50)
//					$(".small_logo_02").animate({
//						top: "400px",
//						left:"412px",
//					},50)
//					$(".small_logo_03").animate({
//						top: "400px",
//						left:"412px",
//					},50)
//					$(".small_logo_04").animate({
//						top: "400px",
//						left:"412px",
//					},50)
//					$(".small_logo_05").animate({
//						top: "400px",
//						left:"412px",
//					},50)
//					$(".small_logo_06").animate({
//						top: "400px",
//						left:"412px",
//					},50)
//					$(".small_logo_07").animate({
//						top: "400px",
//						left:"412px",
//					},50)
//					$(".small_logo_08").animate({
//						top: "400px",
//						left:"412px",
//					},50)
//					$(".small_logo_09").animate({
//						top: "400px",
//						left:"412px",
//					},50)
//					$(".small_logo_10").animate({
//						top: "400px",
//						left:"412px",
//					},50)
				})
			})
		})
		
		
	})


//	$(".about_us").find("li").mouseover(function () {
//		$(this).children("img").stop().animate({
//			width :"106px",
//			height:"106px",
//		},400)
//		$(this).children("h2").animate({
//			color :"#DE6924"
//		},400)	
//	})
//	$(".about_us").find("li").mouseout(function () {
//		$(this).children("img").stop().animate({
//			width :"86px",
//			height:"86px",
//		},300)	
//	})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	$(".partner").find("img").hover(function () {
		$(this).css("cursor","pointer");
		$(this).removeClass();
		$(this).addClass("test");
	},function () {
		$(this).removeClass();
		$(this).addClass("test2");
	})
	
	
	
	
	
	$(".adress p").mouseover(function () {
		$(this).css("cursor","pointer")
		$(this).children("em").css({"color":"#454545","fontWeight":"500"})
		$(this).children(".img_first").stop().animate({
			opacity: 0,
		},300)
	})
	
	$(".adress p").mouseout(function () {
		$(this).children("em").css({"color":"#666666","fontWeight":"0"})
		$(this).children(".img_first").stop().animate({
			opacity: 1,
		},300)
	})
	
	
	
	
	
	
	$(".foot").find("a").mouseover(function () {
		$(this).children("img").stop().animate({
			width: "70px",
			height:"70px",
		},500,function () {
			
		})
	})
	$(".foot").find("a").mouseout(function () {
		$(this).children("img").stop().animate({
			width: "43px",
			height:"43px",
		},500,function () {
			
		})
	})
	
	
	

	
	
	
})
