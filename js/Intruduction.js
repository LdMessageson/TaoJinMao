
$(function () {
	//调用文字划入
	teat_slider();
	//调用点击下载收起隐藏
	downloadTj();
	downloadTj_02();
	downloadTj_03();
	//分层轮播第一个
	$("#carousel").featureCarousel({
		autoPlay:1500,
		trackerIndFividual:false,
		trackerSummation:false,
		topPadding:50,
		smallFeatureWidth:.9,
		smallFeatureHeight:.9,
		sidePadding:0,
		smallFeatureOffset:0
	});
	//分层轮播第二个
	$("#carousel_02").featureCarousel({
		autoPlay:2000,
		trackerIndividual:false,
		trackerSummation:false,
		topPadding:50,
		smallFeatureWidth:.9,
		smallFeatureHeight:.9,
		sidePadding:0,
		smallFeatureOffset:0
	});
	//分层轮播第三个
	$("#carousel_03").featureCarousel({
		autoPlay:2000,
		trackerIndividual:false,
		trackerSummation:false,
		topPadding:50,
		smallFeatureWidth:.9,
		smallFeatureHeight:.9,
		sidePadding:0,
		smallFeatureOffset:0
	});
	//刷新页面时调用；
	TEXT_response();
	//窗口变化时调用；
	window.onresize=function (){
		TEXT_response();
	}	
	if(window.screen.availWidth > 800) {
		$(".index-model").mouseover(function (){
			$(".sc-title").animate({top:"0px",opacity:1},400)
			$(".sc-subtitle").animate({top:"64px",opacity:1},400)
			$(".ta-c").animate({top:"150px",opacity:1},800)
		})
	}else{
		$(".sc-title").animate({top:"0px",opacity:1},400)
		$(".sc-subtitle").animate({top:"64px",opacity:1},400)
		$(".ta-c").animate({top:"150px",opacity:1},800)
	}
})
//文字划入的响应式，判断手机端或pc端；
function TEXT_response() {
	if(window.screen.availWidth > 800){
			//pc端
			//判断浏览器内核是否为谷歌，并且出不同的效果；
			var userAgent = navigator.userAgent.toLowerCase(); 
			jQuery.browser = { 
			version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1], 
			safari: /webkit/.test( userAgent ), 
			opera: /opera/.test( userAgent ), 
			msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ), 
			mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) 
			};
			if($.browser.safari){
				console.log("pc端+谷歌内核")
	//			直接定位到页面内部，无需从侧面划入？？？？？？？？？？？？？？？？？？？？？此处有个问题在于为什么scroll在谷歌这个页面中无法运行
				$(".client_right h6").css({left:"162px",opacity:1})
				$(".client_right p").css({left:"178px",opacity:1})
				$(".client_right a").css({left:"284px",opacity:1})
				$(".client_right_02 h6").css({left:"-15px",opacity:1})
				$(".client_right_02 p").css({left:"0px",opacity:1})
				$(".client_right_02 a").css({left:"0px",opacity:1})
			}else{
				setInterval(function () {
					var HEIGHT =  document.body.scrollTop;
					if (HEIGHT >= 600 && HEIGHT <= 1000) {
						TEXT_MOVE();
					}else if (HEIGHT >= 1001&& HEIGHT <= 1500) {
						TEXT_MOVE_02();
					}else if(HEIGHT >= 1501){
						TEXT_MOVE_03();
					}
				},300)
			}
		}else{
			//手机端
			TEXT_MOVE_phone();
			TEXT_MOVE_02_phone();
			TEXT_MOVE_03_phone();
		}
	}
//文字划入效果
function teat_slider () {
	$(".zero_slider").animate({
		left : "0px",
	},800);
	$(".first_slider").animate({
		left : "0px",
	},831);
	$(".second_slider").animate({
		left : "0px",
	},964);
	$(".third_slider").animate({
		left : "0px"
	},1095);
	$(".text_art").animate({
		top: "70px"
	},1500,"easeOutBack")
}
//点击下载按钮收起隐藏
function downloadTj () {				
	$("#download").mousedown(function () {
		if($(this).html() == "手机扫一扫"){
			$(this).stop().animate({
			marginTop : "20px"
			},300)
			$(".img_01").stop().animate({
				opacity : 0,
				top : "100px"
			},500,function () {
				$("#download").html("点击下载")
			})
		}
		else {
			$("#download").stop().animate({
				marginTop : "134px"
			},300)
			$(".img_01").stop().animate({
				opacity : 1 ,
				top : "472px"
			},500,function () {
				$("#download").html("手机扫一扫")
			})	
		}
	})
}

function downloadTj_02 () {				
	$("#download_02").mousedown(function () {
		if($(this).html() == "手机扫一扫"){
			$(this).stop().animate({
			marginTop : "20px"
			},300)
			$(".img_02").stop().animate({
				opacity : 0,
				top : "100px"
			},500,function () {
				$("#download_02").html("点击下载")
			})
		}
		else {
			$("#download_02").stop().animate({
				marginTop : "134px"
			},300)
			$(".img_02").stop().animate({
				opacity : 1 ,
				top : "492px"
			},500,function () {
				$("#download_02").html("手机扫一扫")
			})	
		}
	})
}	
function downloadTj_03 () {				
	$("#download_03").mousedown(function () {
		if($(this).html() == "手机扫一扫"){
			$(this).stop().animate({
			marginTop : "20px"
			},300)
			$(".img_03").stop().animate({
				opacity : 0,
				top : "100px"
			},500,function () {
				$("#download_03").html("点击下载")
			})
		}
		else {
			$("#download_03").stop().animate({
				marginTop : "134px"
			},300)
			$(".img_03").stop().animate({
				opacity : 1 ,
				top : "472px"
			},500,function () {
				$("#download_03").html("手机扫一扫")
			})	
		}
	})
}	

//pc端——客户端部分
function TEXT_MOVE() {
	//鼠标滚动的时候
	$("#text_move").find("h6").stop().animate({
		left : "144px",opacity:1
	},852)
	$("#text_move").children("p").eq("0").stop().animate({
		left : "165px",opacity:1
	},1010)
    $("#text_move").children("p").eq("1").stop().animate({
		left : "165px",opacity:1
	},1168)
	$("#text_move").children("a").stop().animate({
		left : "275px",opacity:1
	},1326)
}
//phone——客户端部分
function TEXT_MOVE_phone() {
	//鼠标滚动的时候
	$("#text_move").find("h6").stop().animate({
		left : "0px",opacity:1
	},852)
	$("#text_move").children("p").eq("0").stop().animate({
		left : "0px",opacity:1
	},1010)
    $("#text_move").children("p").eq("1").stop().animate({
		left : "0px",opacity:1
	},1168)
	$("#text_move").children("a").stop().animate({
		left : "110px",opacity:1
	},1326)
}
//pc端——商家端部分
function TEXT_MOVE_02() {
	//鼠标滚动的时候
	$("#text_move_02").find("h6").stop().animate({
		left : "-10px",opacity:1
	},852)
	$("#text_move_02").children("p").eq("0").stop().animate({
		left : "10px",opacity:1
	},1010)
    $("#text_move_02").children("p").eq("1").stop().animate({
		left : "10px",opacity:1
	},1168)
	$("#text_move_02").children("a").stop().animate({
		left : "-4px",opacity:1
	},1326)
}
//phone——商家端部分
function TEXT_MOVE_02_phone() {
	//鼠标滚动的时候
	$("#text_move_02").find("h6").stop().animate({
		left : "40px",opacity:1
	},852)
	$("#text_move_02").children("p").eq("0").stop().animate({
		left : "50px",opacity:1
	},1010)
    $("#text_move_02").children("p").eq("1").stop().animate({
		left : "50px",opacity:1
	},1168)
	$("#text_move_02").children("a").stop().animate({
		left : "36px",opacity:1
	},1326)
}
//pc端——代理商部分
function TEXT_MOVE_03() {
	//鼠标滚动的时候
	$("#text_move_03").find("h6").stop().animate({
		left : "144px",opacity:1
	},852)
	$("#text_move_03").children("p").eq("0").stop().animate({
		left : "165px",opacity:1
	},1010)
    $("#text_move_03").children("p").eq("1").stop().animate({
		left : "165px",opacity:1
	},1168)
	$("#text_move_03").children("a").stop().animate({
		left : "275px",opacity:1
	},1326)
	
}
//phone——代理商部分
function TEXT_MOVE_03_phone() {
	//鼠标滚动的时候
	$("#text_move_03").find("h6").stop().animate({
		left : "0px",opacity:1
	},852)
	$("#text_move_03").children("p").eq("0").stop().animate({
		left : "0px",opacity:1
	},1010)
    $("#text_move_03").children("p").eq("1").stop().animate({
		left : "0px",opacity:1
	},1168)
	$("#text_move_03").children("a").stop().animate({
		left : "110px",opacity:1
	},1326)
	
}





