$(function(){
	// // 获取设备大小自适应
	adaptation();
	
	
	
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	
	$("body").css({'font-size':v_Width*0.04});
	
};
