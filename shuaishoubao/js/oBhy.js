$(function(){
	// // 获取设备大小自适应
	adaptation();
	
	//检查bottom的宽度
	//点击问题按钮
	$(".wenti").click(function(){
		$(".wenti_alert1").show(300);
	});
	//点点击关闭按钮
	$(".close_alert").click(function(){
		$(".wenti_alert1").hide(300);
	});
	//输入框输入事件
//	
//	$(".input_css").bind('input propertychange',function(){
//		var length=$(".input_css").val().length;
//		if(length>4){
//			$(".input_css").val($(".input_css").val().substr(0,5));
//		}
// 	  	document.title=$(".input_css").val().length;
//	});
	//点击添加按钮
	$(".add_btn").click(function(){
		$(".add_alert").show(0);
	});
	
	//点击取消按钮
	$(".close_add").click(function(){
		$(".add_alert").hide(0);
	});
	
	//点击确定按钮
	$(".sure_add").click(function(){
		alert('数据传输到后台');
		$(".add_alert").hide(0);
	});
	
	$(".sub_menu").click(function(){
		var userNumber=$(this).find('div').eq(2).html();
//		alert($(this).find('div').eq(2).html());
		window.location.href='oBhyxq.html?uerNumber='+userNumber;
	});
	
	
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	
	$("body").css({'font-size':v_Width*0.03});
	var vw=$('.wenti').width();
	$('.wenti').css({'height':vw,'border-radius':vw,'width':vw,'line-height':vw+'px'})
};
