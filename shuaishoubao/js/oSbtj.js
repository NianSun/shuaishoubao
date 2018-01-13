$(function(){
	var v_Width = $(window).width();
	var v_Height = $(window).height();
	adaptation();
	week_chart();
	
	//点击 近一月
	$(".title_month").click(function(){
		$(this).css('border-bottom','8px solid #b5e1e4');
		$('.title_week').css('border-bottom','0px solid #b5e1e4');
		$(".week_charts").hide();
		$(".month_charts").show();
		month_chart();
	});
	//点击 近一周
	$(".title_week").click(function(){
		$(this).css('border-bottom','8px solid #b5e1e4');
		$('.title_month').css('border-bottom','0px solid #b5e1e4');
		$(".month_charts").hide();
		$(".week_charts").show();
		week_chart();
	});
	
	
});

//函数自适应函数
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	$('body').css({'font-size':v_Width*0.03});
	$("#main_week").css('height',v_Width*0.8);
	$("#main_month").css('height',v_Width*0.8);
	
}
 //折线图生成函数
function week_chart(){ 
	    var myChart = echarts.init(document.getElementById('main_week'));
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
                data: [1, 2, 3, 34, 15, 20],
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
//折线图生成函数
function month_chart(){ 
	    var myChart = echarts.init(document.getElementById('main_month'));
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
                data: ["12.05","12.06","12.07","12.08","12.09","12.10","12.11","12.12","12.13","12.14","12.15","12.16","12.17","12.18","12.19","12.20","12.21","12.22","12.23","12.24","12.25","12.26","12.27","12.28","12.29","12.30","12.31","01.01","01.02","01.03","01.04","01.05"],
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
                data: [1, 2, 3, 4, 15, 20,1, 2, 3, 23, 15, 20,1, 2, 3, 23, 15, 20,1, 2, 3, 24, 15, 20,1, 2, 3, 34, 15, 20,20,10],
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
