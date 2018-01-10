$(function(){
					
	adaptation();
	// // 获取设备大小自适应
});
function keypresson() //textarea输入长度处理   
{  
    var text1 = document.getElementById("myarea").value;  
    var len; //记录剩余字符串的长度   
    if (text1.length >= 200) //textarea控件不能用maxlength属性，就通过这样显示输入字符数了   
    {  
        document.getElementById("myarea").value = text1.substr(0, 200);  
        len = 0;  
        $(".tishi").css('display','block');
    } else {  
        len = 200 - text1.length;          
        $(".tishi").css('display','none');
    }
    var show = text1.length + "/200";  
    document.getElementById("yijian").innerText = show;  
};  

function adaptation(){
		var v_Height=$(window).height();
	var v_Width=$(window).width();
	
	$(".main_css").css({'height':v_Height,'width':v_Width,'padding-top':v_Height*0.06,'padding-left':v_Width*0.05,'padding-right':v_Width*0.05});
	$(".title_css").css({'font-size':v_Height*0.03,'margin-bottom':v_Height*0.03});
	$(".shuoming").css({'font-size':v_Height*0.02,'margin-bottom':v_Height*0.03});
	$("#myarea").css({'height':v_Height*0.3,'width':v_Width*0.9,'padding':v_Width*0.02,'font-size':v_Height*0.02});
	$("#yijian").css({'font-size':v_Height*0.02});
	$(".tishi").css({'font-size':v_Height*0.02});
	$(".btn-warning1").css({'width':v_Width*0.5,'font-size':v_Height*0.02,'left':v_Width*0.25,'border-radius':v_Height*0.02})
	};
