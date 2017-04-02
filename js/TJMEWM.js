var src = $('#TJMewm').attr('src');
$('TJMewm').attr('src', "img/ewm.png"); 
var flag = 1;
$("#TJMewm").mousedown(function (){
	if(flag == 1) {
		$(this).attr('src', "img/ewm2.png"); 
		flag = 0;
	}else{
		$(this).attr('src', "img/ewm.png"); 
		flag = 1;
	}
})
