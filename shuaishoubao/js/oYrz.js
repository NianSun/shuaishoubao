$(function(){
		
	adaptation();
	
	//点击上传图片；
	$(".file_css").change(function(){
		var oVal = $(this).val()
//		alert($(this).parent().find('div').eq(0).html());
		$(this).parent().find('div').eq(0).html(oVal);
	})
	
});
window.onload=function(){
	var height_img = $(".shangchuan_img img").height()/2+$(".file_css").height()/2;
	$(".file_css").css({'top':-height_img})
}

function adaptation(){
	// // 获取设备大小自适应
	var v_Height = $(window).height();
	var v_Width = $(window).width();
	
	$("body").css({'font-size':v_Width*0.03});
	
}
