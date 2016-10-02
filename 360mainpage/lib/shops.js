define(["jquery","./getnum","./handler","./anniu","amap"],function($,num,hand,anniu,amap){
	//console.log(hand);
	//console.log(num.getcheckednum());
	var menu_left_show=document.getElementsByClassName("menu_left_show")[0];
	var menu_left_li=menu_left_show.getElementsByTagName("li");
	var menu_left_content=document.getElementsByClassName("menu_left_content");

	return {
		listshop:function(){
			var result=null;
			$.ajax({
				type:"get",
				url:"http://localhost:3000/tcb/shops/pagecount/1",
				success:function(data){
					amap.addmap(data);
					hand.createshopInf(data,0);
					anniu.changpage(data);
				}
			});
		},

		//轮播图
		imgturn:function(){
			var mainpage_menu_img=document.getElementsByClassName("mainpage_menu_img")[0];
			var menu_img_div=document.getElementsByClassName("menu_img_div")[0];
			var imgchangebtn=document.getElementsByClassName("imgchangebtn");
			//轮播第一种形式(后面必须放置一张第一张图片)
			setInterval(showimg,4000);
			function showimg(){
				var timer=setInterval(function(){
					menu_img_div.style.left=menu_img_div.offsetLeft-300+"px";
					//console.log(menu_img_div.offsetLeft);
					if(menu_img_div.offsetLeft==(-6000)){
						//console.log("jhah")
						menu_img_div.style.left="0px";

					}
					if(menu_img_div.offsetLeft%1200==0){
						imgchangebtn[Math.abs(menu_img_div.offsetLeft/1200)].style.background="#383838";
						if(Math.abs(menu_img_div.offsetLeft/1200)==0){
							imgchangebtn[4].style.background="#ddd";
						}else{
							imgchangebtn[Math.abs(menu_img_div.offsetLeft/1200)-1].style.background="#ddd";
						}
						clearInterval(timer);
					}
				},100)
			}
			//轮播第二种形式(只需要五张图片)
			// var timer=setInterval(function(){
			// 	menu_img_div.style.left=menu_img_div.offsetLeft-1200+"px";
			// 	// if(menu_img_div.offsetLeft%1200==0){
			// 	// 	clearInterval(timer);
			// 	// }
			// 	if(menu_img_div.offsetLeft==-6000){
			// 		menu_img_div.style.left="0px";
			// 	}
			// },2000)

			//点击按钮实现页面跳转

		},

		//二级菜单部分

		secondmenu:function(){
			for(var i=0;i<menu_left_li.length;i++){
				(function(j){
					var arrdiv=["mainpage_menu_sj","mainpage_menu_dn","mainpage_menu_msj","mainpage_menu_esj"];
					menu_left_li[j].onmouseover=function(){
						var showdiv=document.getElementsByClassName(arrdiv[j])[0];
						//console.log(showdiv);
						showdiv.style.display="block";
						menu_left_li[j].style.background="#185";
					}
					menu_left_li[j].onmouseout=function(){
						var showdiv=document.getElementsByClassName(arrdiv[j])[0];
						showdiv.style.display="none";
						menu_left_li[j].style.background="url(images/head/head_li.png)no-repeat";
					}
					var showdiv=document.getElementsByClassName(arrdiv[j])[0];
					showdiv.onmouseover=function(){
						showdiv.style.display="block";
					}
					showdiv.onmouseout=function(){
						showdiv.style.display="none";
					}
				})(i)	
			}
		},
		//返回顶部部分
		gohead:function(){
			function to_top_fn(){
				document.body.scrollTop=0;
			}
			var go_to_top=document.getElementsByClassName("go_to_top")[0];
			go_to_top.onclick=function(){
				to_top_fn();
			}
			onscroll=function(){
				var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
				if(scrollTop>100){
					go_to_top.style.display="block"
				}else{
					go_to_top.style.display="none";
				}
			}
		},

		//输入框搜索部分
		newsearch:function(){
			
			var searchshop=document.getElementById("searchshop");
			//console.log(searchshop.placeholder);
			var searchdiv=document.getElementById("searchdiv");
			//输入框获取焦点事件
			function searchfocus(){
				searchshop.placeholder="";
				searchdiv.style.display="block";
				searchdiv.innerHTML="&nbsp&nbsp可以搜索您所在的小区,写字楼，或标志性建筑";

			}	
			searchshop.onfocus=function(){
				if(searchshop.value==""){
					searchfocus();
				}else{
					inputkeyup();
				}
				//inputkeyup();
			}
			//输入框失去焦点事件
			function searchblur(){
				searchdiv.style.display="none";
				searchshop.placeholder="输入您的位置查找附近的商家";
			}
			searchshop.onblur=function(){
				setTimeout(function(){
					if(searchshop.value==""){
						searchblur();
					}else{
						inputkeyup();
					}
				},250)	
			}
			//键盘事件 获取输入框内容显示相应信息
			// var inputscript=document.createElement("script");
			// document.body.appendChild(inputscript);
			function inputkeyup(){
				var inputText=searchshop.value;
				var inpursrc="http://suggest.bang.360.cn/suggest?word="+inputText+
				"&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852";
				//inputscript.src=inpursrc;
				function addScriptTag(src){
					var script=document.createElement("script");
					script.src=src;
					document.body.appendChild(script);
				}
				addScriptTag(inpursrc);
				searchdiv.innerHTML="";
				//console.log(searchdiv.childNodes[0]);
				for(var i=0;i<6;i++){
					if(searchdiv.childNodes[0]){
						searchdiv.removeChild(searchdiv.childNodes[0]);
					}else{
						break;
					}
				}
				if(inputText==''){
					searchfocus();
				}else{
					window.suggest=function(data){
						//console.log(inpursrc);	
						//console.log(data);
						var inputinf=data.result;
						var inputinfnum;
						if(inputinf.length>=6){
							inputinfnum=6;
						}else if(inputinf.length<6){
							inputinfnum=inputinf;
						}
						for(var i=0;i<inputinfnum;i++){
							var inputinfp=document.createElement("p");
							inputinfp.style.heigth="30px";
							//inputinfp.className="inputinfp";
							inputinfp.innerHTML=inputinf[i].word;
							inputinfp.style.paddingLeft="5px";
							searchdiv.appendChild(inputinfp);
							inputinfp.onmouseover=function(e){
								e.target.style.background="#ddd";
							}
							inputinfp.onmouseout=function(e){
								e.target.style.background="white";
							}
							inputinfp.onclick=function(e){
								searchdiv.style.display="none";
								searchshop.value=e.target.innerHTML;
							}
						}
					}
				}	
			} 
			document.onkeyup=function(){
				inputkeyup();
			}

		}	


	}
})