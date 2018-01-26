$(function(){
	
		var v_Height=$(window).height();
		var v_Width=$(window).width();
		
		var shuju=$("#shuju").val();
		
		$("#queding").click(function(){
			var shuju=$("#shuju").val().split(",");
			var mingcheng=$("#mingcheng").val().split(",");
//			alert(shuju);
			var datearr=mingcheng;
			var nubmerarr=shuju;
			e_chart(datearr,nubmerarr);
		})
		
		var datearr=new Array("Saab","Volvo","BMW","BMW","BMW","BMW");
		var nubmerarr=new Array("22","33","22","24","60","10");
		
		adaptation();	
		e_chart(datearr,nubmerarr);
		
		
//		
//			$(".date_list").click(function(){											//点击选择时间段
//	//		alert($(this).index());
//			$(".date_list").css({'border-bottom':'0','color':'#000'});	
//			$(this).css({'border-bottom':'1px solid #F05F70','color':'#F05F70'});
//			var iNow=$(this).index();
//			$(".show_list").hide();
//			$(".show_list").eq(iNow).show();
//				
//			});
		
		
		
			$(".mh_date").manhuaDate({												//日历插件	       
				Event : "click",//可选				       
				Left : 0,//弹出时间停靠的左边位置
				Top : -16,//弹出时间停靠的顶部边位置
				fuhao : "-",//日期连接符默认为-
				isTime : false,//是否开启时间值默认为false
				beginY : 2016,//年份的开始默认为1949
				endY :2019//年份的结束默认为2049
			});
	
			$(".mh_date2").manhuaDate({												//日历插件	       
				Event : "click",//可选				       
				Left : 0,//弹出时间停靠的左边位置
				Top : -16,//弹出时间停靠的顶部边位置
				fuhao : "-",//日期连接符默认为-
				isTime : false,//是否开启时间值默认为false
				beginY : 2016,//年份的开始默认为1949
				endY :2019//年份的结束默认为2049
			});
			
		
});
function adaptation(){
	var v_Height=$(window).height();
	var v_Width=$(window).width();
	

}


function e_chart(datearr,nubmerarr){
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
//              data: ["12.05","12.06","12.07","12.08","12.09","12.10"],
				name:'ddd',
                data: datearr,
                axisLabel: {
                    show: true,
                    textStyle: {							//设置字体
                    	color: '#000',
                    	fontSize:font_size
                    }
                }
            },
            yAxis: {										//Y轴的设置
            	name:'ddd',
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
//              data: [1, 2, 3, 2, 15, 20],
                data: nubmerarr,
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