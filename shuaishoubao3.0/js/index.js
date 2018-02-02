$(function () {
	
	var v_Width=$(window).width();
  	var v_Height=$(window).height();
  	
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides :-1,
    autoplay : 6000,//自动播放
//  effect : 'fade',
    
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationType : 'bullets',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable :true,
    
//  // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar',
//  scrollbarHide : false,
//	scrollbarDraggable : true ,
});
	 
  
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
		$(this).animate({width:'100%'},200);
	});
	$("#goods_small img").mouseleave(function(){			//鼠标移出小图标
		$(this).animate({width:'90%'},1000);
	});
	$(".goods_small_model").mouseover(function(){
		$(this).animate({opacity:1},100);
	});
	$(".goods_small_model").mouseleave(function(){
		$(this).animate({opacity:0},1000);
	});
	$(".nav_msg_to_us").mouseover(function(){                      //鼠标点击联系我们
		$(".msg_to_us").show(300);
	});
	
	$(".nav_css_small_dcj").click(function(){					//鼠标点击点餐机跳转
		window.location.href='oZzdcj.html';
	});
	
	$(".nav_msg_to_us").mouseleave(function(){                      //鼠标滑过联系我们
		$(".msg_to_us").hide(0);
	});

	$(window).resize(function(){
		apadtation();
		v_Width=$(window).width();
	  	v_Height=$(window).height();
	  	nav_left=$("#nav").offset().left; 
	});
                           //声明数组
	$(".content").click(function(){
						//content的描述区
	});
	
	
	$(".buy_span").click(function(){
		$(".buyonline").css({'opacity':1,'z-index':6666});								//鼠标点击在线购买
		flagscroll=1;		//开启无法滚动按钮
		$(".buyonline").show();
		$(window).scrollTop(0);
	});
	
	$("#close_buy").click(function(){
		$(".buyonline").css({'opacity':0,'z-index':-1});								//鼠标点击在线购买
		$(".buyonline").hide();
		flagscroll=0;																	//关闭无法滚动按钮
	})
	
	$(".buy_btn").mouseover(function(){													//鼠标滑过立即购买
		$(".buy_btn").css({'border':'1px solid #F0CAB6'})
		$(this).css({'border':'1px solid #E5511D'})
	});
	
	var flagscroll=0;																//屏幕滚动控制器
	//窗口滚动事件
	$(window).scroll(function(){													//窗口滚动出现菜单栏
		var scrolltop=parseInt($(window).scrollTop());								//判断滚动的距离  是否超出所弹出层的大小
		var goods_top=parseInt($('.buy_goods').css('height'))-v_Height+100;
		if(scrolltop>goods_top&&flagscroll==1){
			$(window).scrollTop(goods_top);
		}	
		
		if(scrolltop>100){
			$("#nav").css({'position':'fixed','top':0});
			$(".msg_to_us").css({'top':44});
		}else{
			$("#nav").css({'position':'absolute','top':100});
			$(".msg_to_us").css({'top':144});
		}
	
	});
	
	$("#sider_menu div").click(function(){
		var oTarget=$(this).index();															//获取元素在父元素中的位置
		$(".buy_div").each(function(){
			if($(this).index()==oTarget){
				var this_top=parseInt($(this).position().top)+$(".title_css").height()*2;
				$(window).scrollTop(this_top);
			}
		});
	})
	
});

function apadtation(){
	var v_Width=$(window).width();
  	var v_Height=$(window).height();
	$(".nav_css_small_1").css({'color':'#aaa'});	
	$(".tab_big").css({'height':v_Width*0.06});
//	$('.swiper-container').css({'height':v_Width*0.25});
	$("#goods_small").css({'top':0.3*v_Width+100});
	$("#goods_small>div").css({'height':$("#goods_small div").width(),'border-radius':$("#goods_small div").width(),'line-height':$("#goods_small div").width()+'px'});
	$(".goods_small_model").css({'border-radius':('0 0 '+$("#goods_small div").width()+'px'+' '+$("#goods_small div").width()+'px'),'line-height':$(".goods_small_model").width()*0.5+'px','font-size':v_Width*0.01});
	$(".msg_to_us").css({'height':v_Width*0.2});
	$(".msg_shouji").css({'height':v_Width*0.0333333,'line-height':v_Width*0.0333333333+'px'});
	var goods_top=$("#goods_small").css('top');
	$(".xiangqing").css({'top':(parseInt(goods_top)+$("#goods_small").height())+80,'height':v_Width*1.2});
//	$('.swiper-container img').css({'width':v_Width});
	$(".footer").css({'top':$(".xiangqing").offset().top+$(".xiangqing").height()});
	$("#scroll_top").css({'font-size':v_Width*0.01});
	$(".content_span").css({'font-size':v_Width*0.008})
	$(".modle_buy").css({'height':v_Height,'width':v_Width});
}
