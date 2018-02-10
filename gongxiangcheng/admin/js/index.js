$(function(){
		adaptation();	
		e_chart();
	
	
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

function e_chart(){ 
	    var myChart = echarts.init(document.getElementById('main'));
		var font_size=$(window).width()*0.01;
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '订单总数'  
            },
            textStyle:{
		        fontSize:font_size,
		        color: '#ff0036'
		    },
            tooltip: {},
            legend: {
                data:['订单数']
            },
            xAxis: {										//X轴的设置
                data: ["12.05","12.06","12.07","12.08","12.09","12.10"],
                name:'日期（天）',
                axisLabel: {
                    show: true,
                    textStyle: {							//设置字体
                    	color: '#000',
                    	fontSize:font_size
                    }
                }
            },
            yAxis: {										//Y轴的设置
            	name:'数量（台）',
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
                data: [1, 2, 3, 2, 15, 20],
                label: {normal: {
              		 show: true									//折线图没个点显示数值
          		 }},
            }],
            itemStyle: {
			    normal: {
			        // 设置扇形的颜色
			        color: '#ff0036',
			        fontSize:font_size
			    }
			},
		             
   			 
          
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}