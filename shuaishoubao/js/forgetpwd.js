$(function(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$("body").css({'font-size':v_Width*0.02});
	$(".div_small").css({'height':v_Height*0.074,'line-height':v_Height*0.074+'px','border-radius':v_Height*0.07});
	$(".div_small input").css({'height':v_Height*0.074,'border-radius':v_Height*0.07,'padding-left':v_Height*0.07,'padding-right':v_Height*0.07});
	$(".main_div").css({'height':v_Height,'width':v_Width,'padding-top':v_Height*0.2});
	$(".btn-warning2").css({'line-height':$(".btn-warning2").height()+'px'});
	$(".submit_btn_tj").css({'border-radius':v_Height*0.07,'height':v_Height*0.07,'line-height':v_Height*0.07+'px'});	
	$(".btn_div").css({'line-height':$(".btn_div").height()+'px'});
	$(".bg_css").css({'width':v_Width,'height':v_Height});
});