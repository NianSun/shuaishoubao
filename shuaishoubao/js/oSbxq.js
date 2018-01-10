$(function(){
	
	adaptation();
	//点击跳转页面
	$('#oSzwd').click(function(){
		window.location.href="oSzwd.html?oSbNumber="+$('#oSbNumber').text();
	});
	$('#oHggl').click(function(){
		window.location.href="oHggl.html?oSbNumber="+$('#oSbNumber').text();
	});
	$('#oHzhb').click(function(){
		window.location.href="oHzhb.html?oSbNumber="+$('#oSbNumber').text();
	});
	$('#oCzjl').click(function(){
		window.location.href="oCzjl.html?oSbNumber="+$('#oSbNumber').text();
	});
	$('#oddgl').click(function(){
		window.location.href="oDdgl_1.html?oSbNumber="+$('#oSbNumber').text();
	});
});

function adaptation(){
	
	//页面大小自适应
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('.main_div_css').css({'height':v_Height,'width':v_Width});
	$('.main_img_small').css({'line-height':$('.main_top_left_up').height()+'px'});
	$('.main_top_center_up').css({'line-height':$('.main_top_center_up').height()+'px'});
	$('.main_top_center_down p').css({'font-size':v_Height*0.03,'line-height':($('.main_top_center_down').height()*0.5+'px')});
	$('.main_center').css({'line-height':v_Height*0.075+'px','font-size':v_Height*0.03});
	$('.main_center_p').css({'font-size':v_Height*0.04});
	$('.main_bottom p').css({'font-size':v_Height*0.02});
	$('#erweima').css({'height':v_Height*0.22,'width':v_Height*0.22});
}
