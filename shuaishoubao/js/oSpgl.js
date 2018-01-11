$(function(){
		
	adaptation();

	//点击 全选按钮  出现  选项框
	$('#all_select').click(function(){	
		$('.input_select').show();
			$('.input_select_small').each(function(index,obj){		
				$(obj).prop('checked','true');
//				$(obj).checked=true;
			});	
	});
	//点击全不选 选项框隐藏
	
	$('#no_select').click(function(){	
			$('.input_select_small').each(function(index,obj){
				$(obj).attr('checked',false);
			});
		$('.input_select_small').hide();
	});
	//点击  删除按钮
	$('.menu_delete').click(function(){
		alert('你选择了'+$('input[name=input_select]:checked').length+"件商品删除"); 					//弹出被选中的个数			
		$('input[name=input_select]:checked').each(function(index,obj){
			$(obj).parent().hide();
		});
		$('.input_select_small').hide();
	});
	//点击编辑 按钮
	var select_index="";
	$('.menu_edit').click(function(){
		select_index=$(this).parent();
		$('#input_name').prop("value",$(this).parent().find('p').eq(0).text());  //获取商品名称和价格 放到 编辑的attr（）value里
		$('#input_price').prop("value",$(this).parent().find('span').eq(0).text());
//		$('body').css('overflow','hidden');
		$('.model_big').show();
	});
	//点击 保存 按钮
	$('.span_save').click(function(){	
		select_index.find('p').eq(0).text($('#input_name').val());
		select_index.find('span').eq(0).text($('#input_price').val());
		$('.model_big').hide();
//		$('body').css('overflow','scroll');
		
	});
	//点击 删除 按钮
	$('.span_delete').click(function(){	
		$('.model_big').hide();
		select_index.hide();
		$('body').css('overflow','scroll');
		
	});
	//点击添加商品按钮
	$('.menu_add').click(function(){
		$('.model_big_add').show();	
		$('body').css('overflow','hidden');
	});
	//点击确定添加按钮
	$('.span_add').click(function(){
		$('.model_big_add').hide();	
		$('body').css('overflow','scroll');
		
	});
//	var input_bottom=$('.div_table').css('bottom');
//	$("#input_name").focus(function(){
//		$('.div_table').css({'bottom':0});
//	});
//	$("#input_price").focus(function(){
//		$('.div_table').css({'bottom':0});
//	})
//	
//	$("#input_name").blur(function(){
//		$('.div_table').css({'bottom':input_bottom});
//	});
//	$("#input_price").blur(function(){
//		$('.div_table').css({'bottom':input_bottom});
//	})
});

function adaptation(){
	// // 获取设备大小自适应
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	
	$('.menu_div_css').css({'height':v_Height*0.15,'padding':v_Height*0.01,'font-size':v_Height*0.02});
	$('.div_img').css({'width':$('.div_img').height()});
	$('.menu_div_p').css({'height':v_Height*0.065,'line-height':v_Height*0.065+'px','margin-left':v_Height*0.02});
	$('.menu_edit').css({'font-size':v_Height*0.02});
	$('.menu_bottom').css({'height':v_Height*0.07,'padding':v_Height*0.01,'width':v_Width});
	$('.btn_menu').css({'font-size':v_Height*0.02});
	$('.input_select').css({'width':v_Height*0.03,'height':v_Height*0.03,'margin-to p':v_Height*0.045});
//	$('.menu_delete').css({'width':v_Height*0.14});
	$('#all_select').css({'margin-top':v_Height*0.003});
	$('.main_div_big').css({'margin-bottom':v_Height*0.07});
	$('.div_table').css({'font-size':v_Height*0.04,'border-radius':v_Height*0.03});
	$('.table_title').css({'margin-top':v_Height*0.05,'margin-bottom':v_Height*0.02});
	$('.input_name').css({'font-size':v_Height*0.024,'height':v_Height*0.06,'padding':v_Height*0.01,'border-radius':v_Height*0.06,'line-height':v_Height*0.04+'px','margin-bottom':v_Height*0.02});
	$('.input_price').css({'font-size':v_Height*0.024,'height':v_Height*0.06,'padding':v_Height*0.01,'border-radius':v_Height*0.06,'line-height':v_Height*0.04+'px'});
	$('.table_name').css({'font-size':v_Height*0.02,'margin':v_Height*0.01});
	$('.table_btn').css({'margin-top':v_Height*0.02});
	$('.span_delete').css({'font-size':v_Height*0.026});
	$('.span_save').css({'font-size':v_Height*0.026});
	$('.span_add').css({'font-size':v_Height*0.026});
}
