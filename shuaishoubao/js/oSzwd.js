$(function(){
			
	adaptation();
	//点击按钮事件
	//打开弹窗
	$('#add_address').click(function(){		
		$('.div_model').show();
		$('body').css('overflow','hidden');
	});
	//关闭弹窗
	$('.close_span').click(function(){
		$('.div_model').hide();
		$('body').css('overflow','scroll');
	});
});

function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	//屏幕大小自适应
	$('.div_big').css({'width':v_Width});
	$('.div_top').css({'height':v_Height*0.1,'font-size':v_Height*0.028,'line-height':v_Height*0.1+'px'});
	$('.div_menu').css({'height':v_Height*0.12});
	$('.div_menu_name').css({'font-size':v_Height*0.024});
	$('.div_menu_address').css({'font-size':v_Height*0.016});
	$('.div_menu_left').css({'line-height':v_Height*0.03+'px','padding-top':v_Height*0.02,'padding-bottom':v_Height*0.02});
	$('.div_menu_right').css({'line-height':v_Height*0.12+'px','font-size':v_Height*0.04});
	$('.add_address').css({'bottom':v_Height*0.02,'height':v_Height*0.06});
	$('#add_address').css({'border-radius':$('#add_address').height(),'font-size':v_Height*0.022});
	$('.div_model_css').css({'width':v_Width,'height':v_Height,'z-index':20});
	$('.div_add').css({'width':v_Width*0.8,'height':v_Height*0.5,'z-index':21,'border-radius':v_Height*0.04,'padding-top':v_Height*0.1});
	$('.div_model').css({'font-size':v_Height*0.03});
	$('.input_css').css({'font-size':v_Height*0.02})
	$('._input_css').css({'border-radius':$('.input_css').height()});
	$('#add_btn_post').css({'font-size':v_Height*0.02,'border-radius':$('#add_btn_post').height()*0.5});
	$('.close_span').css({'font-size':v_Height*0.05});

}
