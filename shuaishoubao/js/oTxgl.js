$(function(){
				
	adaptation();
	
	// // 获取设备大小自适应
	
	//点击事件
	$('.oTxgz_css').click(function(){

		$('.oTxgl_main_css').css({'overflow':'hidden'});

		$('.oTxgz_img_css').show();
	});

	$('.close_css').click(function(){
		$('.oTxgl_main_css').css({'overflow':'scroll'});
		$('.oTxgz_img_css').hide();
	});

	$('.btn_tx').click(function(){
		window.location.href="oTxglto.html";
	});




	
	// alert($('Div_middle_up').height());
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	var d_Height=$(document).height();

	$('.oTxgl_main_css').css({'height':v_Height});
	$('.oTxgl_theme_css').css({'height':v_Height*0.3,'padding-top':v_Height*0.05});
	$('.oTxgl_p1_css').css({'font-size':v_Height*0.08});
	$('.oTxgl_p2_css').css({'font-size':v_Height*0.016});
	$('.btn_tx').css({'height':v_Height*0.04,'margin-top':v_Height*0.016,'font-size':v_Height*0.016,'border-radius':v_Height*0.04});
	$('.oTxgz_css').css({'font-size':v_Height*0.016})
	$('.oTxjl_css').css({'height':v_Height*0.06,'line-height':v_Height*0.06+'px','font-size':v_Height*0.02});
	$('.oTxjl_main_css').css({'height':v_Height*0.1,'margin-top':v_Height*0.02,'margin-bottom':v_Height*0.02,'font-size':v_Height*0.02});
	$('.oTxjl_img_css').css({'height':v_Height*0.08});
	$('.oTxjl_right').css({'height':v_Height*0.1});
	$('.oTxjl_left').css({'height':v_Height*0.1});
	$('.oTxjl_middle').css({'height':v_Height*0.1});
	$('.oTxgz_img_css').css({'height':v_Height,'width':v_Width});
	$('.oTxgz_img_div_css').css({'height':v_Height,'width':v_Width});
	$('.txgz_img').css({'width':'80%','left':'10%','top':'15%'});
	$('.close_css').css({'width':v_Width*0.08,'right':v_Width*0.14,'top':($('.txgz_img').height()+v_Height*0.155)});
	
	//OTxglto的 js代码
	$('.Div_big_css').css({'width':v_Width,'height':v_Height});
	$('.Div_up_css').css({'height':v_Height*0.25,'font-size':v_Height*0.028,'line-height':v_Height*0.25+'px'});
	$('.Div_middle_css').css({'height':v_Height*0.4});
	$('.Div_down_css').css({'height':v_Height*0.35});
	$('.Div_middle_up').css({'font-size':v_Height*0.020,'line-height':v_Height*0.13+'px'});
	$('.middle_right_TB').css({'margin-top':(($('.Div_middle_up').height()-$('.middle_right_TB').height())*0.5)})
}
