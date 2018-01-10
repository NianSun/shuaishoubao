$(function(){
	// // 获取设备大小自适应
	adaptation();
	
	//检查bottom的宽度
	if(v_Width>1000){
		$(".panel_menu").css({'border-bottom':'2px solid #AAA'})
	}
	
	
//	alert($(".glyphicon-chevron-right").css('margin-top'))
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	
	$(".panel_menu").css({'margin-top':0});
	$(".panel_out").css({'padding':0,'height':v_Height*0.06,'line-height':v_Height*0.06+'px','padding-left':v_Width*0.04,'padding-right':v_Width*0.04});
	$(".panel-title").css({'font-size':v_Height*0.022});
	$(".panel_out_last").css({'height':v_Height*0.12})
	$(".glyphicon-chevron-right").css({'font-size':v_Height*0.022,'margin-top':(v_Height*0.06-$(".glyphicon-chevron-right").height())*0.4});
	$(".panel-body").css({'padding':0,'padding-left':v_Width*0.04,'padding-right':v_Width*0.04,'font-size':v_Height*0.018})
}
