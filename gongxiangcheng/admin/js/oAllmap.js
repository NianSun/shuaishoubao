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
			$('.sub_list').click(function(){								//点击地图列表
					for(var l=0;l<j;l++){									//其他标注 不在跳动
		     			mm[l].setAnimation(null);
		     		};	
					map.centerAndZoom(pp[$(this).index()], 16);				//地图焦点集中在 这一个坐标
					mm[$(this).index()].setAnimation(BMAP_ANIMATION_DROP);  //坠落
//					mm[$(this).index()].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
								var opts = {    
								    width : 250,     // 信息窗口宽度    
								    height: 100,     // 信息窗口高度    
								    title : "<b class='b_title'>设备信息</b>",  // 信息窗口标题  
								    color : '#ff0036'
								}    

								var shebei_address=$(this).find('span').eq('3').text();     //获取设备地址
								var style_address = '<b class="b_css">'+shebei_address+'<span class="glyphicon glyphicon-map-marker"></span><br /></b><b class="b_css">'+'设备号&nbsp;<icon class="glyphicon glyphicon-qrcode"></icon>&nbsp;'+ss[$(this).index()]+'</b>';
								var infoWindow = new BMap.InfoWindow(style_address, opts);  // 创建信息窗口对象 并添加设备地址    
								map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
			});



				$(".input_css").bind('input propertychange',function(){						//即时搜索
					$(".sub_menu").show();													//所有列表显示  否则影响搜索
					var input_val = $(".input_css").val();
					var input_length = $(".input_css").val().length;
					if(input_length == 0){
						$(".sub_list").show();												//输入框无文字，所有列表显示
					}else{
						$(".shebei_address").each(function(){
							var this_text = $(this).text();						
							if(this_text.indexOf(input_val) > 0){
								$(this).parent().parent().parent().parent().show();
							}else{				
								$(this).parent().parent().parent().parent().hide();
							}
						});
					}
				});

				var flag_list=true;
				$('.btn_list').click(function(){		//点击收起列表
					if(flag_list){
						// $('.list_map').hide(200);
						 $('.list_map').animate({'height':'0','min-height':'0'},300);
						 flag_list=false;
						 $('.btn_font').text('展开列表');
					}else{
						// $('.list_map').show(200);					
						 $('.list_map').animate({'height':'70%','min-height':'60%'},300);
						flag_list=true;
						$('.btn_font').text('收起列表');
					}
					
				});									
			//点击编辑按钮
			$(".edit_btn").click(function(){
				//获取设备号
				var oSbnumber=$(this).parent().find('span').eq(1).text();
				window.location.href="map.html?oSbnumber="+oSbnumber;
			});

			// map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);      
			// var local = new BMap.LocalSearch(map,   
			//               { renderOptions:{map: map}});      
			// local.searchInBounds("公园", map.getBounds());  

		}