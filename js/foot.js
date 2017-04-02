
	$(".foot6").mouseover(function () {
		$(this).next("#EWM1").stop().animate({
			opacity: 1,
		},300)
	})
	$(".foot6").mouseout(function () {
	$(this).next("#EWM1").stop().animate({
		opacity: 0,
	},300)
	})
	
	$(".foot7").mouseover(function () {
		$(this).next("#EWM2").stop().animate({
			opacity: 1,
		},300)
	})
	$(".foot7").mouseout(function () {
	$(this).next("#EWM2").stop().animate({
		opacity: 0,
	},300)
	})