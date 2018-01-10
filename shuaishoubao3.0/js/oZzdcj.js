
         
$(document).ready(function () {
	
	var v_Width=$(window).width();
  	var v_Height=$(window).height();
//	var mySwiper = new Swiper ('.swiper-container', {
//  direction: 'horizontal',
//  loop: true,
//  autoplay : 3000,//自动播放
//  
//  
//  // 如果需要分页器
//  pagination: '.swiper-pagination',
//  
//  // 如果需要前进后退按钮
//  nextButton: '.swiper-button-next',
//  prevButton: '.swiper-button-prev',
//  
//  // 如果需要滚动条
////  scrollbar: '.swiper-scrollbar',
//});
//	
	 
  
	apadtation();

	$(".nav_css_small").mouseover(function(){			//鼠标移入导航栏事件
		$(".nav_css_small").css({'color':'#fff'});
		$(this).css({'color':'#aaa'});
	});	
//	;
	$("#nav").mouseleave(function(){					//鼠标移出导航栏
		$(".nav_css_small").css({'color':'#fff'});
		$(".nav_css_small_1").css({'color':'#aaa'});		
	});
	$("#goods_small img").mouseover(function(){			//鼠标移入小图标
		$(this).animate({width:'85%'},200);
	});
	$("#goods_small img").mouseleave(function(){			//鼠标移出小图标
		$(this).animate({width:'60%'},1000);
	});
	$(".goods_small_model").mouseover(function(){
		$(this).animate({opacity:0.8},100);
	});
	$(".goods_small_model").mouseleave(function(){
		$(this).animate({opacity:0},1000);
	});
	$(".nav_msg_to_us").mouseover(function(){                      //鼠标点击联系我们
//		$(window).scrollTop(0);
		$(".msg_to_us").show(300);
	});
	$(".nav_msg_to_us").mouseleave(function(){                      //鼠标滑过联系我们
		$(".msg_to_us").hide(0);
	});

	$(window).resize(function(){								//当窗口大小改变
		apadtation();
		v_Width=$(window).width();
	  	v_Height=$(window).height();
	  	nav_left=$("#nav").offset().left; 
	});
	$(".content").click(function(){
	});	
	var flagscroll=0;																//屏幕滚动控制器
	//窗口滚动事件
	$(window).scroll(function(){													//窗口滚动出现菜单栏
		var windowScrollTop= $(window).scrollTop();
		if(windowScrollTop>parseInt($('.xiangqing').css('top'))){
			$(".sider_nav").show();
		}else{
			$(".sider_nav").hide(300);
		}
		var scrolltop=parseInt($(window).scrollTop());								//判断滚动的距离  是否超出所弹出层的大小
		var goods_top=parseInt($('.buy_goods').css('height'))-v_Height+100;
		if(scrolltop>goods_top&&flagscroll==1){
			$(window).scrollTop(goods_top);
		}
		if(scrolltop>44){
			$("#nav").css({'position':'fixed','top':0});
			$(".msg_to_us").css({'top':44});
		}else{
			$("#nav").css({'position':'absolute','top':44});
			$(".msg_to_us").css({'top':88});
		}
	
//		$("#top").css({'top':scrolltop});
		
	});
	$(".buy_span").click(function(){
		$(".buyonline").css({'opacity':1,'z-index':6666});								//鼠标点击在线购买
		flagscroll=1;																	//开启无法滚动按钮
		$(".buyonline").show();
		$(window).scrollTop(0);
	});
	
	$("#close_buy").click(function(){
//		$(".buyonline").css({'opacity':0,'z-index':-1});								//鼠标点击在线购买
		$(".buyonline").hide();
		flagscroll=0;																	//关闭无法滚动按钮
	})
	
	$(".buy_btn").mouseover(function(){													//鼠标滑过立即购买
		$(".buy_btn").css({'border':'1px solid #F0CAB6'})
		$(this).css({'border':'1px solid #E5511D'})
	});
	
	$("#sider_menu div").click(function(){
		var oTarget=$(this).index();															//获取元素在父元素中的位置
		$(".buy_div").each(function(){
			if($(this).index()==oTarget){
				var this_top=parseInt($(this).position().top)+$(".title_css").height()*2;
				$(window).scrollTop(this_top);
			}
		});
	});
	
	$("#icon_home").click(function(){
		window.location.href='index.html';
	});
	
});

function apadtation(){
	var v_Width=$(window).width();
  	var v_Height=$(window).height();
  	$('body').css('background-color','#f1f1f1');
	$(".tab_big").css({'height':v_Width*0.06});
	$('.swiper-container').css({'height':v_Width*0.25});
	$("#goods_small>div").css({'height':$("#goods_small div").width(),'border-radius':$("#goods_small div").width(),'line-height':$("#goods_small div").width()+'px'});
	$(".goods_small_model").css({'border-radius':('0 0 '+$("#goods_small div").width()+'px'+' '+$("#goods_small div").width()+'px'),'line-height':$(".goods_small_model").width()*0.5+'px','font-size':v_Width*0.01});
	$(".msg_to_us").css({'height':v_Width*0.2});
	$(".msg_shouji").css({'height':v_Width*0.0333333,'line-height':v_Width*0.0333333333+'px'});
	var goods_top=$("#goods_small").css('top');
	$(".xiangqing").css({'margin-top':$("#goods_small div").width()+88});
	$("#scroll_top").css({'font-size':v_Width*0.01});
	$(".sider_nav").css({'height':v_Height*0.06,'font-size':v_Width*0.01,'line-height':v_Height*0.06+'px'});
	$(".modle_buy").css({'height':v_Height,'width':v_Width});
//	$(".buy_good img").css({'height':$(".buy_good img").width()*1.4});
}
