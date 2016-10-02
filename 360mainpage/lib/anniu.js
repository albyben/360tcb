define(["getnum","handler"],function(num,hand){
	return{

		//点击按钮实现分页
		changpage:function(data){
			var infArr=data.shop_data;
			var pageback=document.getElementsByClassName("pageback")[0];
			var pagego=document.getElementsByClassName("pagego")[0];
			var pagenumbtn=document.getElementsByClassName("pagenumbtn");//全部功能键
			//console.log(pagenumbtn);
			//console.log(pageback);
			
			//点击数字按钮实现更新数据
			for(var i=0;i<pagenumbtn.length;i++){
				(function(j){
					pagenumbtn[j].onclick=function(e){
						if(getComputedStyle(pagenumbtn[j]).color!="rgb(255, 255, 255)"){
							//var target=e.target||e.srcElement;
							var pageindex=num.getcheckednum();//可以直接使用innerHTML获取分页信息
							var pagecount=parseInt(pagenumbtn[j].innerHTML);
							pagenumbtn[j].style.background="#FC6621";
							pagenumbtn[j].style.color="white";
							//console.log(target.i);
							//console.log(pageindex);
							pagenumbtn[pageindex].style.background="white";
							pagenumbtn[pageindex].style.color="#888";
							var cont_title_inf=document.getElementsByClassName("cont_title_inf")[0];
							var content2_cont_left=document.getElementsByClassName("content2_cont_left")[0];
							content2_cont_left.removeChild(cont_title_inf);
							hand.createshopInf(data,(pagecount-1)*5);
							goshoptop();
							pagebtnshow(pagecount);	
						}
					}
				})(i)
			}
			//点击下一页功能按钮跳转页面
			var pagego=document.getElementsByClassName("pagego")[0];

			pagego.onclick=function(){
				// var pagenumbtn=document.getElementsByClassName("pagenumbtn");
				// var pageindex=getcheckednum();
				// var pagecount=parseInt(pagenumbtn[pageindex].innerHTML)+1;
				// pagenumbtn[pageindex].style.background="white";
				// pagenumbtn[pageindex].style.color="#888";
				// pagenumbtn[pageindex+1].style.background="#FC6621";
				// pagenumbtn[pagenumbtn+1].style.color="white";
				// var cont_title_inf=document.getElementsByClassName("cont_title_inf")[0];
				// var content2_cont_left=document.getElementsByClassName("content2_cont_left")[0];
				// content2_cont_left.removeChild(cont_title_inf);
				// createshopInf(data,(pagecount-1)*5);
				// goshoptop();
				backOrgo(data,"go");
			}
			//点击上一页功能按钮跳转页面
			var pageback=document.getElementsByClassName("pageback")[0];
			pageback.onclick=function(){
				backOrgo(data,"back");
			}

			//点击跳转下一页上一页按钮跳转页面
			function backOrgo(data,type){
				var type=arguments[1];
				var pagenumbtn=document.getElementsByClassName("pagenumbtn");
				var pageindex=num.getcheckednum();
				pagenumbtn[pageindex].style.background="white";
				pagenumbtn[pageindex].style.color="#888";
				var cont_title_inf=document.getElementsByClassName("cont_title_inf")[0];
				var content2_cont_left=document.getElementsByClassName("content2_cont_left")[0];
				if(type=="go"){
					var changetype=1;
				}else if(type=="back"){
					var changetype=-1;
				}
				var pagecount=parseInt(pagenumbtn[pageindex].innerHTML)+changetype;
				pagenumbtn[pageindex+changetype].style.background="#FC6621";
				pagenumbtn[pageindex+changetype].style.color="white";
				content2_cont_left.removeChild(cont_title_inf);
				hand.createshopInf(data,((pagecount-Math.abs(changetype))*5));
				goshoptop();
				pagebtnshow(pagecount);
			}
			//点击后按钮状态改变判断
			function pagebtnshow(){
				//功能键显示和隐藏;
				var pagecount=arguments[0];
				var pageback=document.getElementsByClassName("pageback")[0];
				var pagefirst=document.getElementsByClassName("pagefirst")[0];
				var pagelast=document.getElementsByClassName("pagelast")[0];
				var pagego=document.getElementsByClassName("pagego")[0];
				if(pagecount>1){
					pageback.style.display="inline-block";
				}else{
					pageback.style.display="none";
				}
				if(pagecount>5){
					pagefirst.style.display="inline-block";
				}else{
					pagefirst.style.display="none";
				}
				if(pagecount>10){
					pagelast.display="inline-block";
				}else{
					pagelast.display="none";
				}
				if(pagecount==20){
					pagego.style.display="none";
				}else{
					pagego.style.display="inline-block";
				}		
			}
			//点击按钮返回商家信息顶部
			function goshoptop(){
				var pagecheck=document.getElementsByClassName("pagecheck")[0];
				var pagebtn=pagecheck.getElementsByTagName("a");
				for(var i=0;i<pagebtn.length;i++){
					console.log(getComputedStyle(pagebtn[0]).color);
					if(getComputedStyle(pagebtn[i]).color!="rgb(255, 255, 255)"){
						var shoptopplace=document.getElementById("shoptopplace");
						//console.log(shoptopplace.offsetTop);
						document.body.scrollTop=shoptopplace.offsetTop;
					}
				}
			}

		}	

		

	}
})