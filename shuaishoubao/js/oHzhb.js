$(function(){
		adaptation();

	//点击按钮事件
	//点击刷选按钮
	$('#friend_choice_span').click(function(){
		$("body").css('overflow','hidden');
		$('#model_big').show();
	});
	//点击选择按钮  全部  我加TA   TA加我
	$('.friend_p').click(function(){
//		alert($(this).text());
		$('#friend_choice_span').text($(this).text());
		$("body").css('overflow','scroll');
		$('#model_big').hide();
	});
	//点击 添加按钮
	$('.add_btn').click(function(){
		$('.add_friend_css').show();
		$("body").css('overflow','hidden');
	});
	$('.add_friend_btn').click(function(){
		$('.add_friend_css').hide();
		$("body").css('overflow','scroll');
	});
	
	
		//输入框输入事件
	
	$(".search_input").bind('input propertychange',function(){
		$(".sub_menu").show();
		var input_val=$(".search_input").val();
		var input_length=$(".search_input").val().length;
//		alert(input_val);
		if(input_length==0){
			$(".sub_menu").show();
		}else{
			$(".search_text").each(function(){
				var this_text=$(this).text();
				
				if(this_text.indexOf(input_val) > 0){
					$(this).parent().parent().show();
				}else{				
					$(this).parent().parent().hide();
				}
			});
		}
		
	});
	//店家合作伙伴查看详情
	$(".sub_menu").click(function(){
		window.location.href="oHzhbxq.html";
	});
	
});

function adaptation(){
		//页面大小自适应
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('.search_css').css({'height':v_Height*0.08,'line-height':v_Height*0.06+'px','padding-top':v_Height*0.01,'font-size':v_Height*0.02});
	$('.search_input').css({'height':v_Height*0.06,'font-size':v_Height*0.02});
	$('.bg_img').css({'margin-top':v_Height*0.08});
	$('.add_friend').css({'height':v_Height*0.06,'margin-top':v_Height*0.01})
	$('.search_span').css({'font-size':v_Height*0.02});
	$('.input-group').css({'height':v_Height*0.06,'border-radius':v_Height*0.02});
	$('.search_filter').css({'font-size':v_Height*0.02});
	$('.add_friend').css({});
	$('.add_btn').css({'border-radius':v_Height*0.03,'font-size':v_Height*0.02});
	$('.friend_p').css({'height':v_Height*0.06,'line-height':v_Height*0.06+'px','font-size':v_Height*0.02,'margin':0});
	$('.add_friend_table').css({'border-radius':v_Height*0.02,'height':v_Height*0.6});
	$('.add_friend_title').css({'font-size':v_Height*0.04,'padding-top':v_Height*0.05,'margin-bottom':v_Height*0.04});
	$('.add_div_input').css({'border-radius':v_Height*0.05,'height':v_Height*0.06,'margin-top':v_Height*0.03,'font-size':v_Height*0.02,'line-height':v_Height*0.06+'px'});
	$('.add_friend_btn').css({'margin-top':v_Height*0.04,'height':v_Height*0.06,'font-size':v_Height*0.024,'border-radius':v_Height*0.03})
}
