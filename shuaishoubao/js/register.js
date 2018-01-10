$(function(){
		adaptation();
	


	$('.Yan_btn').click(function(){
		alert('验证码在路上，请注意查收');
	})
});


function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('.main_css').css('width',v_Width);
	$('body').css('font-size',v_Width*0.02)
	$('.input_css').css({'height':v_Height*0.06,'width':v_Width*0.8,'border-radius':v_Height*0.03});
	$('.div_code').css({'height':v_Height*0.06,'width':v_Width*0.8,'border-radius':v_Height*0.03});

	$('.Yan_code').css({'height':v_Height*0.06,'border-radius':v_Height*0.03});
	$('.Yan_btn').css({'line-height':v_Height*0.06+'px','font-size':v_Height*0.02,});
	$(".bg_css").css({'width':v_Width,'height':v_Height})
//	$('.logo_css').css({'width':v_Height*0.2,'height':v_Height*0.2});
	$('.logo_div').css({'border-radius':$('.logo_div').width(),'height':$('.logo_div').width(),'line-height':$('.logo_div').width()+'px'});
//	$('.title_css').css({'font-size':v_Height*0.06});
	$('.btn_css').css({'border-radius':v_Height*0.03,'font-size':v_Height*0.02,'width':v_Width*0.8});
	$("body").css({'width':v_Width,'height':v_Height})
}
