$(function(){
		adaptation();	
		
		$(".user_span").click(function(){
			var userID=$(this).parent().find('span').eq(0).text();
			window.location.href='oDlsglmore.html?userID='+userID;
			alert('获取userID post 或则 get到 代理商管理详细界')
		});
		$(".shebeishu").click(function(){
			var userID=$(this).parent().find('span').eq(0).text();
			window.location.href='oSbgl.html?userID='+userID;
			alert("获取userID post 或则 get到 设备管理界面");
		});
		$(".gongzhonghaoshu").click(function(){
			var userID=$(this).parent().find('span').eq(0).text();
			window.location.href='oGzhgl.html?userID='+userID;
			alert("获取userID post 或则 get到 公众号管理界面");
		});
		
		$("window").scroll(function(){
			if($("window").scrollTop>0){
				$(".main_list").css({'top':'calc( 2% + 80px )'});			
			}
		});
	
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	var vm=v_Width;
//	$("body").css({'font-size':v_Width*0.008})

}

