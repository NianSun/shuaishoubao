$(function(){

	adaptation();
	$('.register_1').click(function(){
		// alert('sds');
		window.location.href='register.html';
	})
	$('.forget_pwd').click(function(){
		window.location.href='forgetpwd.html';
	})

	$('#Submit_').click(function(){
		if($('#userNumber').val()=="admin"&&$('#Pwd').val()=="123456"){
			window.location.href="index.html?";
		}else{
			$(".model1").show(); 
//			setTimeout(function(){					//延迟器
//			$(".model1").hide(); 	
//			},1000);
		}
		
//		$.post('loginto.php',{'userName':userName,'password':password},function(respon){          //ajax的信息发送
//			$('#Ajax_Post').text(respon);
//		});
	});
	
	$('.close_error').click(function(){
		$('.model1').hide();
	});

});
function adaptation(){
		// // 获取设备大小自适应
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('.body_css').css('height',v_Height);

	$('.div_user').css({'border-radius':v_Height/0.02,'line-height':v_Height*0.06+'px','height':v_Height*0.06,'font-size':v_Height*0.02+'px','margin-top':v_Height*0.05});
	$('.div_pwd').css({'border-radius':v_Height/0.02,'line-height':v_Height*0.06+'px','height':v_Height*0.06,'font-size':v_Height*0.02+'px','margin-top':v_Height*0.05});
	$('.T_b').css({'font-size':v_Height*0.02+'px','margin-left':v_Height*0.02+'px'});
	$('.logo_css').css({'height':v_Height*0.25,'border-radius':v_Width*0.25});
	$('.title_css').css('font-size',v_Height*0.05)
	$('.btn-danger').css('height',v_Width*0.05);
	$('.btn').css({'font-size':v_Height*0.025,'border-radius':v_Height*0.03,'height':v_Height/18+'px','line-height':v_Height*0.02+'px'});
	$('.register').css('font-size',v_Height*0.02)
	$('.forget_pwd').css('font-size',v_Height*0.02);
	$('.error_css').css({'width':v_Width*0.8,'height':v_Height*0.3,'padding-top':v_Height*0.06,'border-radius':v_Height*0.02,'font-size':v_Height*0.02,'top':v_Height*0.4});
	$('.close_error').css({'line-height':$('.close_error').height()+'px'});
}
