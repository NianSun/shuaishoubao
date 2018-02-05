$(function(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('.main_css').css('height',v_Height);

	$('.input_css').css({'height':v_Height*0.07,'width':v_Width*0.8,'border-radius':v_Height*0.03,'margin-top':v_Height*0.05,'font-size':v_Height*0.03,});

	$('.Yan_code').css({'height':v_Height*0.07,'width':v_Width*0.48,'border-radius':v_Height*0.03,'margin-top':v_Height*0.05,'font-size':v_Height*0.03,});
	$('.Yan_btn').css({'height':v_Height*0.07,'width':v_Width*0.32,'border-radius':v_Height*0.03,'margin-top':v_Height*0.05,'font-size':v_Height*0.02,});

	$('.title_css').css({'font-size':v_Height*0.06});
	$('.btn_css').css({'height':v_Height*0.08,'border-radius':v_Height*0.03,'font-size':v_Height*0.04,'margin-top':v_Height*0.04});


	$('.Yan_btn').click(function(){
		alert('验证码在路上，请注意查收');
	})
});