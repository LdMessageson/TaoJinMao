
$(function() {
//	获取屏幕宽度；
	//F_Left-span的起始页滑出；
	$('#F_left').animate({opacity:1},2500);
	//淘金猫logo的鼠标效果--@start--
	var Logo = document.getElementById('C_logo');
	Logo.onmouseover = function () {
		Logo.style.animationName="bounce";
	}
	Logo.onmouseout = function () {
		Logo.style.animationName="rubberBand";
	}
//淘金猫logo的鼠标效果--@end--

//起始页面所有动态效果的延时调用@start---
	setTimeout(function(){
			$('#F_right p').show();	
	},800);
	//2.功能盘
	
	var WIDTH;
	setTimeout(function (){		
			F_Canimation_big();
	},800);
	F_Mouseover();
	EMMOVE();
//起始页面所有动态效果的延时调用@end---
	$(window).scroll(function(){
		// 滚动条距离顶部的距离 大于 200px时
		if($(window).scrollTop()>=350 && $(window).scrollTop() < 850){
		 	
			$(".sc-title_01").animate({
				top : 0 ,
				opacity : 1 ,
			},1500,"easeOutBack",function () {
				$(".sc-subtitle_01").animate({
				top : 0 ,
				opacity : 1 ,
				},1500,"easeOutBack")
			})
			$(".front-list").animate({
				top :0 ,
				opacity : 1,
			},1500,"easeOutBack")
		}
		if($(window).scrollTop()>=1500 && $(window).scrollTop() < 1950) {
			$(".sc-title_02").animate({
				top :0,
				opacity: 1
			},1500,"easeOutBack")
			$(".center-image").animate({
				top :0,
				opacity: 1
			},1900,"easeOutBack")
			
		}	
		if($(window).scrollTop()>=3300 && $(window).scrollTop() < 3750) {
			$(".sc-title_03").animate({
				top : 0 ,
				opacity : 1 ,
			},1500,"easeOutBack",function () {
				$(".sc-subtitle_03").animate({
				top : 0 ,
				opacity : 1 ,
				},1500,"easeOutBack")
			})
			$(".goods-list").animate({
				top :0 ,
				opacity : 1,
			},1500,"easeOutBack")
			
		}
	
	});
	

});

//所有动效的分写------------------------------------------------
//功能盘的animation @start--
	//功能盘的出现
	
function F_Canimation_big(){
	$(".one").animate({left: "37%",top:0,width:110,height:110,opacity:1}, 1000);
    $(".two").animate({left: "37%",top:"75%",width:110,height:110,opacity:1}, 1000);
    $(".three").animate({left: "0",top:"37%",width:110,height:110,opacity:1}, 1000);
    $(".four").animate({left: "75%",top:"37%",width:110,height:110,opacity:1}, 1000);
    $(".five").animate({left: "64%",top:"11%",width:110,height:110,opacity:1}, 1000);
    $(".six").animate({left: "11%",top:"11%",width:110,height:110,opacity:1}, 1000);
    $(".seven").animate({left: "11%",top:"64%",width:110,height:110,opacity:1}, 1000);
    $(".eight").animate({left: "64%",top:"64%",width:110,height:110,opacity:1}, 1000);
    $(".one").mouseover(function (){$(".one").stop().animate({left: "36%",top:0,width:130,height:130},300)});
  
    $(".two").mouseover(function (){$(".two").stop().animate({left: "36%",top:"75%",width:130,height:130},300)});
    
    $(".three").mouseover(function (){$(".three").stop().animate({left: "0",top:"37%",width:130,height:130},300)});
    $(".four").mouseover(function (){$(".four").stop().animate({left: "75%",top:"37%",width:130,height:130},300)});
    $(".five").mouseover(function (){$(".five").stop().animate({left: "64%",top:"11%",width:130,height:130},300)});
    $(".six").mouseover(function (){$(".six").stop().animate({left: "11%",top:"11%",width:130,height:130},300)});
    $(".seven").mouseover(function (){$(".seven").stop().animate({left: "11%",top:"64%",width:130,height:130},300)});
    $(".eight").mouseover(function (){$(".eight").stop().animate({left: "64%",top:"64%",width:130,height:130},300)});
   
    $(".one").mouseout(function (){$(".one").stop().animate({left: "37%",top:0,width:110,height:110},500)});
   
    $(".two").mouseout(function (){$(".two").stop().animate({left: "37%",top:"75%",width:110,height:110},500)});
    $(".three").mouseout(function (){$(".three").stop().animate({left: "0",top:"37%",width:110,height:110},500)});
    $(".four").mouseout(function (){$(".four").stop().animate({left: "75%",top:"37%",width:110,height:110},500)});
    $(".five").mouseout(function (){$(".five").stop().animate({left: "64%",top:"11%",width:110,height:110},500)});
    $(".six").mouseout(function (){$(".six").stop().animate({left: "11%",top:"11%",width:110,height:110},500)});
    $(".seven").mouseout(function (){$(".seven").stop().animate({left: "11%",top:"64%",width:110,height:110},500)});
    $(".eight").mouseout(function (){$(".eight").stop().animate({left: "64%",top:"64%",width:110,height:110},500)});

}
	//功能盘与鼠标事件
	var FRight = document.getElementById('F_right');
function F_Mouseover() {
//	var FRight = document.getElementById('F_right'),
	var FLeft  = document.getElementById('F_left'),
		AllP   = FRight.getElementsByTagName('p'),
		Allspan= FLeft.getElementsByTagName('span');

//	$("li em").animate({opacity:0.5},500);
	for (var i=0;i<AllP.length;i++) {
		AllP[i].index = i;
		AllP[i].onmouseover=function (){
			this.style.border="4px solid white";
			//F_Left的背景色切换；
//			$(Allspan[this.index]).animate({opacity:1},500);
//			$("Allli[this.index] em").animate({opacity:1},500);
			
		}
		AllP[i].onmouseout=function (){
			this.style.border="8px solid white";
//			$(Allspan[this.index]).animate({opacity:0},500);
//		$("Allli[this.index] em").animate({opacity:0.5},500);
		}
	}
}
function EMMOVE() {
	var	oUL	   = document.getElementById('circle'),
		AllP   = FRight.getElementsByTagName('p'),
		Allli  = oUL.getElementsByTagName('li');
	for (var i=0;i<AllP.length;i++) {
		AllP[i].index = i;
		$(Allli[i]).find("em").animate({opacity:0.7},500);
		AllP[i].onmouseover=function (){
			$(Allli[this.index]).find("em").stop().animate({opacity:1,width:110,heigh:40},500);
			$(Allli[this.index]).find("i").stop().animate({fontSize:14,color:"black"},500);
//			$("Allli[this.index] em").animate({opacity:1},500);
		}
		AllP[i].onmouseout=function (){
//			$(Allli[this.index]).children().animate({opacity:1},500);
			$(Allli[this.index]).find("em").stop().animate({opacity:0.7,width:85,heigh:34},500);
			$(Allli[this.index]).find("i").stop().animate({fontSize:14,color:"#666"},500);
		}
	}
	

	
	
}	
//function HOVER() {
//	var Allli  = oUL.getElementsByTagName('li');
//	for (var i=0;i<AllP.length) {
//		
//	}
//}
//鼠标滚动页面下拉时出现询问合作条
//function Com_Line() {
//	
//}
//Arrow的动态效果
//function Arrow() {
//	var Arrow = document.getElementById('Arrow');
//	
//	setInterval(function() {
//		$('#Arrow').animate({top:100},300);
//	},500);
//}

//
function drawDown() {
        var c = document.getElementById("downCanvas"),
            cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(5, 20);
        cxt.lineTo(25, 45);
        cxt.lineTo(45, 20);
        cxt.lineWidth = 5;
        cxt.strokeStyle = "gray";
        cxt.lineCap = 'round';
        cxt.lineJoin = "round";
        cxt.stroke();
        cxt.moveTo(5, 5);
        cxt.lineTo(25, 30);
        cxt.lineTo(45, 5);
        cxt.lineWidth = 5;
        cxt.strokeStyle = "gray";
        cxt.lineCap = 'round';
        cxt.lineJoin = "round";
        cxt.stroke();
    }
    drawDown()
//功能盘的animation @end--


//center------@end-----

