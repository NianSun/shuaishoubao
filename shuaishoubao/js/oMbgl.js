$(function(){
	// // 获取设备大小自适应
	adaptation();
	
	//点击设备跳转到详情页
	$(".sub_content").click(function(){
		var iNow=$(this).index();
		if(iNow==0){
			window.location.href="oTjmb.html?补货员跳转参数=不显示已经有补货员的设备+并且点击后是添加进数据库不是跳转 +敲黑板  划重点+";
		}else{
			var oSbNumber=$(this).find('div').eq(1).html();
			window.location.href="oMbglxq.html?oSbNumber="+oSbNumber;
		}
	});
	//点击关闭按钮
	$(".close_add").click(function(){
		$(".edit_alert").hide();
	});
	//点击保存按钮
	$(".sure_add").click(function(){
		$(".edit_alert").hide();
	});
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$("body").css({'font-size':v_Width*0.03});
};
