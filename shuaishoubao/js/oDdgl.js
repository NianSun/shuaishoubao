$(function(){
	var v_Width = $(window).width();
	var v_Height = $(window).height();
	adaptation();
	e_chart();
	
	
	$(".date_list").click(function(){											//点击选择时间段
//		alert($(this).index());
		$(".date_list").css({'border-bottom':'0','color':'#000'});	
		$(this).css({'border-bottom':'1px solid #00ffff','color':'#00ffff'});
		var iNow=$(this).index();
		$(".show_list").hide();
		$(".show_list").eq(iNow).show();
		
	});
	
	
	$("input.mh_date").manhuaDate({												//日历插件	       
		Event : "click",//可选				       
		Left : 0,//弹出时间停靠的左边位置
		Top : -16,//弹出时间停靠的顶部边位置
		fuhao : "-",//日期连接符默认为-
		isTime : false,//是否开启时间值默认为false
		beginY : 2016,//年份的开始默认为1949
		endY :2019//年份的结束默认为2049
	});
	
	$("input.mh_date2").manhuaDate({												//日历插件	       
		Event : "click",//可选				       
		Left : 0,//弹出时间停靠的左边位置
		Top : -16,//弹出时间停靠的顶部边位置
		fuhao : "-",//日期连接符默认为-
		isTime : false,//是否开启时间值默认为false
		beginY : 2016,//年份的开始默认为1949
		endY :2019//年份的结束默认为2049
	});
	
	$(window).resize(function(){
//		adaptation();
	});
	
});

//函数自适应函数
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('body').css({'font-size':v_Width*0.03});
	$('.div_head').css({'font-size':v_Width*0.04});
	$("#main").css({height:v_Width*0.6});
	$(".list_title").css({'height':v_Width*0.1,'line-height':v_Width*0.1+'px'});
	$(".list").css({'border-radius':v_Width*0.02});
	$(".mh_date").css({'width':'80%','height':v_Width*0.1});
	$(".mh_date2").css({'width':'80%','height':v_Width*0.1});
	$(".calender").css({'width':'100%','height':v_Width*0.6});
	$(".getyear").css({'height':v_Width*0.06,'line-height':v_Width*0.06+'px','color':'red'});
	$(".font_span").css({'height':v_Width*0.1,'line-height':v_Width*0.1+'px'});
	
}
 //折线图生成函数
function e_chart(){ 
	    var myChart = echarts.init(document.getElementById('main'));
		var font_size=$(window).width()*0.03;
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '订单总数'  
            },
            textStyle:{
		        fontSize:font_size,
		        color: '#00ffff'
		    },
            tooltip: {},
            legend: {
                data:['订单数']
            },
            xAxis: {										//X轴的设置
                data: ["12.05","12.06","12.07","12.08","12.09","12.10"],
                axisLabel: {
                    show: true,
                    textStyle: {							//设置字体
                    	color: '#000',
                    	fontSize:font_size
                    }
                }
            },
            yAxis: {										//Y轴的设置
            	axisLabel: {
                    show: true,
                    textStyle: {
                    	color: '#000',						//设置字体
                    	fontSize:font_size
                    }
                }
            },
            series: [{
                name: '订单数',
                type: 'line',                                  //折线图
//              type: 'bar',                                   //柱状图
                data: [1, 2, 3, 234, 15, 20],
                label: {normal: {
              		 show: true									//折线图没个点显示数值
          		 }},
            }],
            itemStyle: {
			    normal: {
			        // 设置扇形的颜色
			        color: '#00ffff',
			        fontSize:font_size
			    }
			},
		             
   			 
          
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}
