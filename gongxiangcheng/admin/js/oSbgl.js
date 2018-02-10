$(function(){
		adaptation();	
	
		$("#add_shebei").click(function(){
//			alert('添加设备');
			$(".model").show();
			$(".add_div").show();
		})
//		$(".sub_address span").click(function(){
//			var oSbnumber=$(this).parent().parent().find('span').eq(0).text();
//			window.open("map.html?oSbnumber="+oSbnumber);
//		})
		
	
		$(".list_img_div").click(function(){
			var this_parent=$(this).parent();
			var the_number=this_parent.find('span').eq(0).html();
//			alert(the_number);
			window.location.href='oSbxq.html?number='+the_number;
		});
		
		//点击设置出现 按钮
//		
//		$(".edit_div").mouseover(function(){
//			var flag_edit=null;
//			flag_edit=$(this);
//			$(this).animate({'width':'148px'},200);
//			//鼠标离开母元素  按钮消失
//			
//			$(".sub_list").mouseleave(function(){
//				flag_edit.animate({'width':'30px'},200);
//			});
//		});
		
		
		//点击删除按钮
//		$(".delete_span").click(function(){
//			var this_parent=$(this).parent().parent();
//			var the_number=this_parent.find('span').eq(3).html();
//			if(confirm('要删除设备\n'+the_number+'吗')){
//				alert('数据传输到后台删除');
//			}else{
//				alert('已取消操作');
//			}
//		});
		//窗口大小改变
		$(window).resize(function(){
			adaptation();
		})
//		//取消添加
//		$(".quxiao_btn").click(function(){
//			$(".model").hide();
//			$(".add_div").hide();
//		})
		
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	var vw=v_Width;
	var vh=v_Height;
	
	$(".add_div").css({'left':(vw-400)/2,'top':(vh-200)/2});
	

}
