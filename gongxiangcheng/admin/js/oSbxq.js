$(function(){
	$(".map_span").click(function(){
		var oSbnumber=$(this).attr('sbnumber');
		window.open("map.html?oSbnumber="+oSbnumber);
	})
})
