$(function(){
	
		var v_Height=$(window).height();
		var v_Width=$(window).width();
		adaptation();	

		$(window).resize(function(){
		})
		
		$(".chakan_span").click(function(){
			var this_parent=$(this).parent().parent();
			var the_number=this_parent.find('td').eq(1).html();
//			alert(the_number);
			window.location.href='oJltj.html?addid='+the_number;
		})
		
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	var vm=v_Width;
//	
//	$(window).resize(function(){
//		if(v_Width<800){
//			vm=800;
//		}else{
//			vm=v_Width;
//		}
//		$(".main_div").css({'width':'vw'});	
//	})
	

}
//function zhuangtai(obj){
//	var this_parent=obj.parent();
//	var this_text=obj.text();
////	alert('1'+this_text+'1');
//	if(this_text=='是'){
//		this_parent.find('span').eq(0).hide();
//	}else{
//		this_parent.find('span').eq(1).hide();
//	}
//}
