$(function(){
	// // 获取设备大小自适应
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	adaptation();

//	$(".model_css").css({'height':$(document).height()})
	// 点击事件
	// 主页#我的跳转
	var flag=0;
	$('#nav_left').click(function(){				//主页
		$('#nav_left').css('color','#8accca');
		$('#nav_right').css('color','#fff');
		$('.zhuye').show();
		$('.wode').hide();
		flag=0;
	});
	$('#nav_right').click(function(){				//我的
		if (flag==0) {			
			$('#nav_right').css('color','#8accca');
			$('#nav_left').css('color','#fff');
			$('.zhuye').hide();
			$('.wode').show();
			flag=1;
		}
	});
//	$('.sub_wode_menu').click(function(){
//		alert($(this).children().text());
//	});
	//昨日收益
	$('.sub_theme_right').click(function(){           	//定点管理
		window.location.href="oDdgl.html";
	});
	$('.sub_theme_left').click(function(){				//设备管理
		window.location.href="oSbgl.html";
	});
	//主页菜单功能键
	$('#oTxgl').click(function(){						//提现管理
		window.location.href="oTxgl.html";
	});
	$('#oSbgl').click(function(){						//设备管理
		window.location.href="oSbgl.html";
	});
	$('#oCpmb').click(function(){						//产品模板
		window.location.href="oCpmb.html";
	});
	$('#oDdgl').click(function(){						//订单管理
		window.location.href="oDdgl.html";
	});
	$('#oSbtj').click(function(){						//设备统计
		window.location.href="oSbtj.html";
	});
	$('#oSpgl').click(function(){						//商品管理
		window.location.href="oSpgl.html";
	});
	//我的页面跳转
	$("#oCjwt").click(function(){
		window.location.href="oCjwt.html";				//常见问题
	});
	$("#oSzwd").click(function(){
		window.location.href="oSzwd.html";				//设置网点
	});
	$('#my_oTxgl').click(function(){
		window.location.href="oTxgl.html";				//余额
	});
	$('#my_oHzhb').click(function(){					//合作伙伴
		window.location.href="oHzhb.html";
	});
	$('#oBhy').click(function(){					//补货员
		window.location.href="oBhy.html";
	});
	$('#nicheng').click(function(){					//昵称
		$(".model_title").text('昵称');
		$("#user_name").val($(this).parent().find('span').eq(1).text());
		$('body').css('overflow','hidden');
		$(".model_big").show();
	});
	$(".btn-quxiao").click(function(){				//确定昵称
		$(".model_big").hide();
		$('body').css('overflow','scroll');
	});
	$('#kefu').click(function(){	
		$(".model_title").text('客服电话');//客服电话
		$("#user_name").val("");
		$('body').css('overflow','hidden');
		$(".model_big").show();
	});
	$(".btn-quxiao").click(function(){				//确定
		$(".model_big").hide();
		$('body').css('overflow','scroll');
	});
	
	$("#yjfk").click(function(){
		window.location.href="oYjfk.html";
	});
	
	$(window).resize(function(){
//		adaptation();
	})
	
});
function adaptation(){
		var v_Height=$(window).height();
		var v_Width=$(window).width();
	//	$('.index_main_css').css({'heigh t':v_Height});
	$('body').css({'font-size':v_Height*0.025});
	$('.theme_css').css({'height':v_Height*0.3});
	$('.sub_theme').css({'height':v_Height*0.1})
	$('.menu_css').css({'height':v_Height*0.5,'width':v_Width});
	$('.nav_css').css({'height':v_Height*0.1});
	$('.touxiang_css').css({'height':v_Height*0.2,'width':v_Height*0.2});
	$('.wode_menu_big').css({'height':v_Height*0.82,});
	$('.wode_menu').css({'height':v_Height*0.18,'width':'90%','margin-top':v_Height*0.01,'margin-bottom':v_Height*0.01,});
	$('.sub_wode_menu').css({'font-size':v_Height*0.02,'line-height':v_Height*0.06+'px','height':v_Height*0.06});
	$('.sign_out').css({'border-radius':v_Height*0.15})
	$('.sub_menu').css({'width':v_Width*0.333333,'height':v_Width*0.333333});
	$('.sub_menu img').css({'height':v_Width*0.3333,'width':v_Width*0.26});
	$('.sub_theme').css({'line-height':v_Height*0.05+'px'});
	$('.sub_theme p').css({'padding':0,'margin':0,'height':v_Height*0.04});
	$(".model_big").css({'width':v_Width,'height':v_Height});
	$(".model_table").css({'width':v_Width*0.8,'margin-left':v_Width*0.1,'top':v_Height*0.3,'border-radius':v_Height*0.02,'font-size':v_Height*0.024});
	$(".model_title").css({'margin-top':v_Height*0.01,'margin-bottom':v_Height*0.02});
//	$(".model_title").css({'margin-top':v_Height*0.01,'margin-bottom':v_Height*0.01});
	$("#user_name").css({'border-radius':v_Height*0.05,'width':v_Width*0.6,'height':v_Height*0.05,'margin-bottom':v_Height*0.02});
	$(".model_table span").css({'font-size':v_Height*0.02,'width':v_Width*0.2,'border-radius':v_Height*0.02,'padding':v_Height*0.01});
	$(".btn-sure").css({'margin-left':v_Width*0.2});
}
