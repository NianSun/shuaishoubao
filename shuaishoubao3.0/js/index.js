
         
$(document).ready(function () {
	
	var v_Width=$(window).width();
  	var v_Height=$(window).height();
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 3000,//自动播放
    
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar',
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
	
//	$(".content").mouseleave(function(){
//		$(this).find('div').eq(1).animate({top:'-100%',opacity:0},500);
//	});
	
//	$(".content_img").mouseover(function(){
//		$(this).animate({width:'100%',height:'100%',top:'0%',left:'0%'},600);
//	});	
//	$(".content_img").mouseleave(function(){
//		$(this).animate({width:'50%',height:'50%',top:'25%',left:'25%'},100);
//	});
//	$(".content_span").mouseover(function(){
//		$(this).animate({'opacity':1});
//	});
//	$(".content_span").mouseleave(function(){
//		$(this).animate({'opacity':0.4});
//	});
//	
//	$(".content_span").click(function(){
//		$(this).parent().find('div').eq(1).animate({'top':'0',opacity:1},500);
//	});
	
	
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
		
		if(scrolltop>44){
			$("#nav").css({'position':'fixed','top':0});
			$(".msg_to_us").css({'top':44});
		}else{
			$("#nav").css({'position':'absolute','top':44});
			$(".msg_to_us").css({'top':88});
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
//	if(v_Height>v_Width){
//		window.location.href='m.index.html';
//	}
$(".nav_css_small_1").css({'color':'#aaa'});	
  	$('body').css('background-color','#f1f1f1');
	$(".tab_big").css({'height':v_Width*0.06});
	$('.swiper-container').css({'height':v_Width*0.25});
	$("#goods_small").css({'top':0.3*v_Width+40});
	$("#goods_small>div").css({'height':$("#goods_small div").width(),'border-radius':$("#goods_small div").width(),'line-height':$("#goods_small div").width()+'px'});
	$(".goods_small_model").css({'border-radius':('0 0 '+$("#goods_small div").width()+'px'+' '+$("#goods_small div").width()+'px'),'line-height':$(".goods_small_model").width()*0.5+'px','font-size':v_Width*0.01});
	$(".msg_to_us").css({'height':v_Width*0.2});
	$(".msg_shouji").css({'height':v_Width*0.0333333,'line-height':v_Width*0.0333333333+'px'});
	var goods_top=$("#goods_small").css('top');
	$(".xiangqing").css({'top':(parseInt(goods_top)+$("#goods_small").height())+60,'height':v_Width*1.2});
	$('.swiper-container').css({'width':'100%'});
	
//	$(".content_font").css({'font-size':v_Width*0.01});
	///数据流定位 转化为绝对定位     position的默认方式是static.
//	$(".content").css('position','static');			//改变定位
//	var ctop=new Array();
//	var cleft=new Array();  
//	$(".content").each(function(key,value){				//获取高度和left	
//		ctop[key]=$(this).offset().top;
//		cleft[key]=$(this).offset().left;
//	});	
//	$(".content").css('position','absolute');			//改变定位
//	$(".content").each(function(key,value){				//重新定位数组
//		$(this).css({'top':ctop[key]-$(".xiangqing").offset().top,'left':cleft[key]});
//	});
	$(".footer").css({'top':$(".xiangqing").offset().top+$(".xiangqing").height()});
	$("#scroll_top").css({'font-size':v_Width*0.01});
	$(".content_span").css({'font-size':v_Width*0.008})
	$(".modle_buy").css({'height':v_Height,'width':v_Width});
//	$(".buy_good img").css({'height':$(".buy_good img").width()*1.4});
}
