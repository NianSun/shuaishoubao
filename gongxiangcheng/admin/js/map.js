/////////获取点击的坐标   
//		map.addEventListener("click", function(e){ 
//			var address;
//			address=prompt("请输入详细地址   例如：xx市xx区xx路xx号幸福小区5号楼2单元门口东南角");
//		    alert('你点击的地图坐标是'+e.point.lng + ", " + e.point.lat);  
//				if(address){
//					alert('你点击的地图坐标是'+e.point.lng + ", " + e.point.lat+'位置是：'+address);
//				}else{
//					alert('内容不能为空'); 
//				}
//		});	
// aa,bb分别为X轴Y轴 （经度，维度）


window.onload = function(){
			var map = new BMap.Map("container");//地图展示区域// 创建地图实例  \ 
			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			// 抽象基类	Control	所有控件均继承此类的方法、属性。通过此类您可实现自定义控件
			// 平移缩放控件	NavigationControl	PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方		
			// 版权	CopyrightControl	默认位于地图左下方		
			// map.addControl(new BMap.NavigationControl());    
			map.addControl(new BMap.ScaleControl());   		 // 比例尺	ScaleControl	默认位于地图左下方，显示地图的比例关系
	//		map.addControl(new BMap.OverviewMapControl());    // 缩略地图	OverviewMapControl	默认位于地图右下方，是一个可折叠的缩略地图
	//		map.addControl(new BMap.MapTypeControl());       // 地图类型	MapTypeControl	默认位于地图右上方
	//		map.addControl(new BMap.GeolocationControl());    // 定位	GeolocationControl	针对移动端开发，默认位于地图左下方
			
			map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用 
			var size = new BMap.Size(344, 20);
			map.addControl(new BMap.CityListControl({
			    anchor: BMAP_ANCHOR_TOP_LEFT,
			    offset: size,
			}));
			
			function mainfun(aa,bb,mm,pp,j,ss){
				 	var i=0;										//获取X轴 Y轴的坐标 设备号&nbsp;<icon class="glyphicon glyphicon-qrcode"></icon>
				 	$('.x_zuobiao').each(function(index,val){
				 		aa[index] = $(this).text();								
				 	});
				 	$('.y_zuobiao').each(function(index,val){
				 		bb[index] = $(this).text();
				 	});
				 	$('.shebei_number').each(function(index,val){
				 		ss[index] = $(this).text();
				 	});
				   	for(i;i<j;i++){									//批量生成标注	
				   		pp[i]='point'+i;
				   		mm[i]='marker'+i;
						var myIcon = new BMap.Icon("img/marker2.png", new BMap.Size(35,35));			
				   		pp[i] = new BMap.Point(aa[i], bb[i]);
				   		map.centerAndZoom(pp[i], 16);      
						mm[i] = new BMap.Marker(pp[i],{icon:myIcon});  // 创建标注
						map.addOverlay(mm[i]);                     // 将标注添加到地图中 
						var label = new BMap.Label('&nbsp;&nbsp;'+ss[i]+'&nbsp;&nbsp;',{offset:new BMap.Size(30,0)});		//添加文字标注
						mm[i].setLabel(label); 
						// $('.BMapLabel').css({'border':'1px solid #fe5d59','padding':'0 10px 0 10px','color':'#fe5d59','background':'#fff','border-radius':'10px'});
				   	}	
			
					
						
			}
			document.getElementById('container').style['position']='fixed';
			var j = $('.x_zuobiao').length;
			var aa = new Array(j);					//声明X坐标数组
			var bb = new Array(j);					//声明Y坐标数组	
			var pp = new Array(j);                     //坐标数组     
	   		var mm = new Array(j)						//标注坐标  
	   		var ss = new Array(j)						//设备号&nbsp;<icon class="glyphicon glyphicon-qrcode"></icon>	   		
			mainfun(aa,bb,mm,pp,j,ss);
			//点击事件的flag
			var onclick_flag=true;
			//点击 编辑按钮  弹出层出来
			$(".edit_btn").click(function(){
				var onclick_flag=true;
				$(".bianji").text("点击地图");
						map.addEventListener("click", function(e){ 
							var x_target=e.point.lng; 
							var y_target=e.point.lat; 
							
							if(onclick_flag){
								$(".model").show(200);
								onclick_flag=false;
								//点击确定按钮
								$(".sure_btn").click(function(){
									if($(".input_css").val()){
										//window.location.href="editmapyemian";
										alert('x'+x_target+'y'+y_target+'具体位置：'+$(".input_css").val());
									}else{
										$(".alert_tishi").show(300);
									}
									
								});
								
							}					
							
						});	
//				
			});
			$(".no_btn").click(function(){
				$(".model").hide(200);
				$(".alert_tishi").hide(200);
				$(".bianji").text("开启编辑");
			});

			$('.btn_list').click(function(){		//点击全部设备
				window.location.href='oAllmap.html';
			});									


			// map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);      
			// var local = new BMap.LocalSearch(map,   
			//               { renderOptions:{map: map}});      
			// local.searchInBounds("公园", map.getBounds());  

		}