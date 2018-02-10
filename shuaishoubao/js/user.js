$(function(){
	var v_Height = $(window).height();
	var v_Width = $(window).width();
	adaptation();
	$("#oindex").click(function(){
		window.location.href="user.html";
	});
	$("#odingdan").click(function(){
		window.location.href="Dingdan.html";
	});
	$("#owode").click(function(){
		window.location.href="wode.html";
	});
	$("#oerweima").click(function(){
		window.location.href="saoma.html";
	});
});
function adaptation(){
	// // 获取设备大小自适应
	var v_Height = $(window).height();
	var v_Width = $(window).width();
	
	$("body").css({'font-size':v_Width*0.03});
	$(".top").css({'height':v_Width*0.5});
	$(".top_wode").css({'height':v_Width*0.5});
	$(".number span").css({});
//	$(".head_img").css({'left':(v_Width-$(".head_img").width())*0.5});
	
}
