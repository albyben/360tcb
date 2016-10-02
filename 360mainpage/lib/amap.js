define(["getnum"],function(num){
	return{
		//地图信息部分
		//点击地图显示模态化弹出窗口
		addmap:function(data){
				var mapbtn=document.getElementsByClassName("mapbtn")[0];
				var mainpage_div=document.getElementsByClassName("mainpage_div")[0];
				//console.log(mainpage_div);
				// mainpage_div
				var mainpage_div_map=document.getElementsByClassName("mainpage_div_map")[0];
				//console.log(mainpage_div_map);
				var closaMap=document.getElementsByClassName("closeMap")[0];
				mapbtn.onclick=function(){
					mainpage_div.style.display="block";
					mainpage_div_map.style.display="block";
					init(data);
				}
				closaMap.onclick=function(){
					mainpage_div.style.display="none";
					mainpage_div_map.style.display="none";
				}
			//添加地图信息
			function init(data){
				var infArr=data.shop_data; 
				var index=num.getcheckednum()*5;
				console.log(index);
				//console.log(infArr[index]["map_longitude"]);
				var map_content=document.getElementById("map_content");
			    var map = new AMap.Map('map_content', {
			        center: [infArr[index]["map_longitude"], infArr[index]["map_latitude"]],
			        zoom: 10,
			        mapStyle:"normal"
			    });
			    map.plugin(["AMap.ToolBar"], function() {
			        map.addControl(new AMap.ToolBar());
			    });

			    for(var i=0;i<5;i++){
			    	(function(j){
				    	var marker="marker"+index;
				    	//console.log(marker);
				    	var marker=new AMap.Marker({
				    		position:[infArr[index]["map_longitude"], infArr[index]["map_latitude"]],
				    		map:map
				    	})
				    	var infowin="infowindow"+index;
				    	var infowin=new AMap.InfoWindow({
				    		//isCustom: true,
				    		content:'<h3>深圳联想笔记本售后</h3>'+'<div class="zhu">'+"主营:"+infArr[index].main+'</div><div class="addr">'+"地址:"+infArr[index].addr+'</div>'+'<a href="###">进入店铺>></a>',
				    		offset: new AMap.Pixel(0, -30),
				     		size:new AMap.Size(350,0)
				    	})
				    	// // var zhu=document.getElementsByClassName("zhu")[0];
				    	// // zhu.innerHTML="主营:"+infArr[index].main;
				    	// if(zhu.innerHTML.length>20){
				    	// 	zhu.innerHTML=zhu.innerHTML.substring(0,21)+"***";
				    	// }
				    	// var addr=document.getElementsByClassName("addr")[0];
				    	// addr.innerHTML="地址:"+infArr[index].addr;
				    	// if(zhu.innerHTML.length>22){
				    	// 	zhu.innerHTML=zhu.innerHTML.substring(0,24)+"***";
				    	// }
				    	// var markerClick="markerClick"+index;
				    	AMap.event.addListener(marker,"click",function(){
				    		infowin.open(map,marker.getPosition());
				    	})
				    	index++;
				    })(i)
			    }
			}
		}
	}
})