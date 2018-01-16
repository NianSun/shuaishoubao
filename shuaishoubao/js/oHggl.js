$(function(){
		adaptation();	
	var iNow=null;
	
	$(".span_group").click(function(){											//点击存货框
//		alert('123');
		iNow=$(this);
		//获取当前的货柜ID
		var now_id=$(this).parent().find('span').eq(0).text();
		//获取当前的存货量
		var now_number=$(this).find('span').eq(0).text();
		//获取最大的存货量
		var max_number=$(this).find('span').eq(2).text();
			$(".hg_id").text(now_id);
			$(".input_max").val(max_number);									//获取要传递的值
			$(".input_now").val(now_number);
		
		$(".model_big").show();
	});
	
	//取消编辑
	$(".model_del").click(function(){
		$(".model_big").hide();
	});
	//保存编辑
	
	$(".model_save").click(function(){
		iNow.find('span').eq(0).text($(".input_now").val());
		iNow.find('span').eq(2).text($(".input_max").val());
		$(".model_big").hide();
	});
	
	
	var flag=1;
	$('#btn_eait').click(function(){
		if(flag==1){		
				$(this).text("取消一键上货");
				$('.checkbox_css').show();	                       						//远程出货按钮隐藏
				$('.ycch').hide();														//一键上货按钮出现	
				$('.one_btn').show();
				flag=0;
		}else{
			$('.checkbox_css').hide();	
			flag=1;
			$(this).text("选择一键上货");
			$('.ycch').hide();	
//			$('.one_btn').hide();
			$('input[name=edit]:checked').attr("checked",false);						//改变checkbox的状态false
		}
	});
	//一键上货按钮点击事件
	$('#one_btn').click(function(){
			$('input[name=edit]:checked').each(function(index,obj){
				//获取每个最大的存货量
				var max_cun=$(obj).parent().find('span').eq(6).text();
				$(obj).parent().find('span').eq(4).text(max_cun);						//js前台页面显示上货
    		});
		$('.checkbox_css').hide();														//选择框隐藏
		$('.ycch').hide();																//远程出货按钮隐藏
		$('#btn_eait').text("选择一键上货");
		flag=1;
		$('input[name=edit]:checked').attr("checked",false);						//改变checkbox的状态false
		

	});
	
	//远程出货按钮点击
	$('.btn_ycch').click(function(){		      								//远程出货按钮显示
		$('.ycch').show();
		$('.checkbox_css').hide();												//一键上货选项框隐藏
//		$('.one_btn').hide();
		$('input[name=edit]:checked').attr("checked",false);						//改变checkbox的状态false
		flag=1;
		$('.btn_edit').text("选择一键上货");
		
	
		$('.one_btn').show();
	});
	
	$('.ycch').click(function(){
		var number=parseInt($(this).parent().find('span').eq(4).text());		//取出要减的数字
		number--;
//		alert($(this).parent().find('span').eq(4).text());
		if(number<=0){	
			//判断是否要减得数比0小
			number=0;
			alert('暂无存货！请先上货')
		}
		
		$(this).parent().find('span').eq(4).text(number);
	});
	
	//点击解绑补货员
	
	$(".jiebang").click(function(){
		alert('数据库删除绑定信息');
	});
	//点击更换补货员
	
	$(".genghuan").click(function(){
		window.location.href="oBhy.html?传递参数=改变按钮状态-改变状态按钮-";
	});
	
	
	
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('body').css({'font-size':v_Width*0.02});
	//屏幕自适应
	$('.main_div_css').css({'width':v_Width,'padding':v_Width*0.016,'margin-bottom':v_Height*0.06});
	$('.menu_css').css({'width':v_Width*0.3,'border-radius':v_Height*0.005,'font-size':v_Height*0.02,'margin':v_Width*0.011});
	$('.span_group').css({'border-radius':v_Height*0.01,'font-size':v_Height*0.02,'line-height':v_Height*0.04+'px','width':v_Width*0.2,'height':v_Height*0.04});
	$('.span_number').css({'height':v_Height*0.04});
	$('.menu_css input').css({'width':v_Height*0.03,'height':v_Height*0.03,'border-radius':v_Height*0.03});
	$('.btn_bottom').css({'height':v_Height*0.06,'width':v_Width});
	$('.btn_bottom button').css({'font-size':v_Width*0.03});
	$('.ycch').css({'font-size':v_Height*0.014});
	$(".id_class").css({'top':-0.5*$(".id_class").height(),'left':-0.5*$(".id_class").height(),'width':$(".id_class").height(),'border-radius':-$(".id_class").height()+'px','height':$(".id_class").height(),'line-height':$(".id_class").height()+'px'});
	$('.menu_css img').css({'top':-$(".id_class").height()});
	$(".Bhy_css").css({'height':v_Width*0.12})
	//设置图片大小一样
	var img_height=$(".menu_css img").eq(0).height();
	var img_width=$(".menu_css img").eq(0).width();
	
	$(".menu_css img").css({'width':img_width,'height':img_width});
}
