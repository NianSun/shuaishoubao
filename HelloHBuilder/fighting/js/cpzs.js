$(function () {
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('.bg_img_css').css({'width':v_Width,'height':v_Height});

    	var x=0;
    $(document).mousedown(function(e){

    	x=e.clientX;
    	$(document).mousemove(function(){
    		return false;
   		});
   		return false;
    });

    $(document).mouseup(function(eup){
    	// $(document).unbind( "mousedown" );
    	// alert('抬起');
    	var xup=eup.clientX;
    	var Top_=$(document).scrollTop();
    	var Top_1=$(document).scrollTop();
    	if(xup>x){
    		$('.test_').text('上移了');
	    		// $(document).scrollTop((Top_+v_Height));
	    			i=1;
	    			timer1=setInterval(function(){
	    				i=i+1;
		    			Top_=Top_+i;    			
		    			$(document).scrollTop((Top_));
		    			if(i>v_Height){
		    				clearInterval(timer1);
		    				$(document).scrollTop(Top_1+v_Height);
		    				alert('抬起');
	    				}
	    			},100);

    	}else{

    		$('.test_').text('下移了');

    		$(document).scrollTop((Top_-v_Height)) ; 
    	}

    	// $('.test_').text($(document).scrollTop());
    })
});