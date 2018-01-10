
//window.onload=function(){
//	$('#body').css('opacity',1)
//}
//       
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
  	
  	var flag=0;
  	$(".img_btn").click(function(){
  		if(flag=='0'){ 			
  			$(this).prop({'src':'img/after_btn.png'});
  			flag=1;
  			$(".sub_nav").animate({'height':v_Height*0.5});
  		}else{
  			$(this).prop({'src':'img/before_btn.png'});
  			$(".sub_nav").animate({'height':0});
  			flag=0;
  		}
  	});
	 
	$(".sub_nav_small_bottom").click(function(){
			$(".img_btn").prop({'src':'img/before_btn.png'});
  			$(".sub_nav").animate({'height':0});
  			flag=0;
	});
  
	apadtation();
	$(window).resize(function(){
		apadtation();	
	});
	
	var a=0;
	setInterval(function(){
		$(".goods_small_model").css
		
	},600);
	var scroll_flag=0;
	$(window).scroll(function() {
		$('.img_btn').prop({'src':'img/before_btn.png'});
  			$(".sub_nav").css({'height':0});
  			flag=0;
  			
  		//获取屏幕滚动的距离
		var scroll_top=$(window).scrollTop();
		//获取 弹出层的最大高度
		var buy_height=$(".buyonline").height()-v_Height*0.87;
		if(scroll_top>buy_height&&scroll_flag==1){
			$(window).scrollTop(buy_height);
		}
	});
	
$("#buy_online").click(function(){
//		scroll_flag=1;           		//开启开关									//在线购买
		$(window).scrollTop(0);
		$(".img_btn").prop({'src':'img/before_btn.png'});							//点击收回主菜单
  		$(".sub_nav").animate({'height':0},0);
  		flag=0;
		$(".buyonline").css({'z-index':6000,'opacity':1});
		$(".container-fluid").hide();
	})
	$(".close_btn").click(function(){
//		scroll_flag=0;           		//关闭开关
		$(window).scrollTop(0);
		$(".buyonline").css({'z-index':'-1','opacity':0});
		$(".container-fluid").show();
//		$(".buyonline").hide();
	})
	
	
	$("#lxwm").click(function(){													//点击联系我们
		$(".message").css({'z-index':'300000','opacity':0.8})
		$(".message").show();
		
		$(".img_btn").prop({'src':'img/before_btn.png'});							//点击收回主菜单
  		$(".sub_nav").animate({'height':0},0);
  		flag=0;
  		
  		$('body').css('overflow','hideen')
	});
	$(".btn_zdl").click(function(){
		$(".message").css({'z-index':'-300000','opacity':0})						//点击知道了
		$(".message").hide();
	})
	
	
	var oDiv=document.getElementById('load_div');
		setTimeout(function(){
			oDiv.style.display='none';
		},2000);

});

window.onload=function(){
//	var oDiv=document.getElementById('load_div');
//		setTimeout(function(){
//			oDiv.style.display='none';
//		},2000);

}
function apadtation(){
	var v_Width=$(window).width();
  	var v_Height=$(window).height();
  	$(".nav_css").css({'font-size':v_Width*0.03});
  	$(".footer").css({'font-size':v_Width*0.02});
  	$(".small_img_div").css({'height':$(".small_img_div").width(),'border-radius':$(".small_img_div").width()*20+'px','padding-top':v_Width*0.05});
  	$(".goods_small_model").css({'font-size':v_Width*0.025});
  	$(".small_img_div_big").css({'height':$(".small_img_div").width()});
  	$(".big_div").css({'margin-bottom':v_Width*0.2,'margin-top':v_Width*0.1});
  	$(".nav").css({'height':v_Height*0.08,'line-height':v_Height*0.08+'px','width':v_Width});
  	$(".swiper-container").css({'margin-top':v_Height*0.08});
  	$(".sub_nav_small").css({'font-size':v_Width*0.04,'line-height':v_Height*0.075+'px'});
  	$(".sub_nav_small_bottom").css({'font-size':v_Width*0.04,'line-height':v_Height*0.05+'px'});
  	$(".main_title").css({'font-size':v_Width*0.04});	
  	$(".message").css({'height':v_Height,'padding':v_Width*0.08,'padding-top':v_Height*0.1});
  	$(".sub_message").css({'font-size':v_Width*0.04});
  	$(".btn_zdl").css({'font-size':v_Width*0.04});
  	$('body').css({'font-size':v_Width*0.03})
  	
}
