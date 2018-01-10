$(function(){
	
		adaptation();
	// // 获取设备大小自适应
	
	// //js按钮点击效果+默认事件

	//


		$('.ul_li_a_1').click(function(){
			//样式改变
			$('.drop_menu_1 span').css('display','none')
			$(this).children().get(0).style.display='block';
			$('.drop_menu_1 li a').css({'color':'black'});			
			$(this).css({'color':'#8accca'});
			$('.main_p_1').text($(this).text());
			//发送请求
		});
		$('.ul_li_a_2').click(function(){
			//样式改变
			$('.drop_menu_2 span').css('display','none')
			$(this).children().get(0).style.display='block';
			$('.drop_menu_2 li a').css({'color':'black'});			
			$(this).css({'color':'#8accca'});
			$('.main_p_2').text($(this).text());
			//发送请求
		});
		$('.ul_li_a_3').click(function(){
			//样式改变
			$('.drop_menu_3 span').css('display','none')
			$(this).children().get(0).style.display='block';
			$('.drop_menu_3 li a').css({'color':'black'});			
			$(this).css({'color':'#8accca'});
			var oText=$(this).text().length;	
			//判断是否需要截取字符串。防止文字溢出		
			if(oText>=20){
				var oTexrString=$(this).text(); 
				var oTexrString1=oTexrString.substring(0,4)+'···';//0到6
				$('.main_p_3').text(oTexrString1);	
			}else{
				$('.main_p_3').text($(this).text());
			}
			//发送请求
		});
		//返回顶部
		$('.Return_Top').click(function(){
			$(window).scrollTop(0);
		});
		//点击 挑战到设备详情页 post发送设备的产品编号
		$('.main_menu_small').click(function(){
			var oSbNumber=$(this).find('p').eq(0).text();//获取点击的设备编号
			var n=$(this).find('img').eq(0).attr('src');
			switch(n)
			{
			case 'images/shj.png':
			  		window.location.href="oSbxq.html?oSbNumber="+oSbNumber;
			  break;
			case "images/rtc.png":
			  		window.location.href="oRtc.html?oSbNumber="+oSbNumber;
			  break;
			default:
			  		alert('设备离线');
			}
			
		});
		//点击改变下拉菜单的“z-index”  阻止事件冒泡
		$('.btn_menu').click(function(){
			$('.btn_group_big').css('z-index',5);
		});
		$('.drop_menu').click(function(){
			$('.btn_group_big').css('z-index',3);
		});
		//////////////////////判断是否是人体秤
		
		
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();

	$('body').css({'width':v_Width});
	// $('.btn-group').css({'width':v_Width,'height':v_Height});
	$('.btn_group_big').css({'width':v_Width,'height':v_Height*0.1});
	$('.btn_group_small').css({'height':v_Height*0.06,'font-size':v_Height*0.02});
	$('.caret_css').css({'font-size':v_Height*0.02})
	$('.drop_menu').css({'width':v_Width,'height':v_Height*0.57,'font-size':v_Height*0.02});
	$('.drop_menu_1').css({'left':0});
	$('.drop_menu_2').css({'left':-v_Width*0.33333});
	$('.drop_menu_3').css({'left':-v_Width*0.666667});
	$('.btn_group_small').css({'width':'100%'});
	$('.ul_li_a').css({'margin-top':v_Height*0.02});
	$('.main_menu_css').css({'width':v_Width,'top':v_Height*0.06,'font-size':v_Height*0.02});
	$('.main_menu_small').css({'width':v_Width*0.33,'height':v_Height*0.3,'padding-top':v_Height*0.03});
	$('.menu_p_css').css({'margin-top':v_Height*0.02})
	$('.Return_Top').css({'width':v_Width*0.14,'height':v_Width*0.14,'right':v_Width*0.1,'bottom':v_Height*0.05,'padding-top':v_Width*0.02+'px','font-size':v_Height*0.02,'border-radius':v_Height*0.14});
	// alert($('.btn_menu').height())
}
