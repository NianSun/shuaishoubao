$(function(){
	
	adaptation();
});

function adaptation(){
	
	//页面大小自适应
	var v_Width=$(window).width();
	
	$("body").css({'font-size':v_Width*0.04})

}