define(['getnum'],function(num){
	return {
		createshopInf:function(data,index){
			infArr = data.shop_data;
			// var infArr=myshopinf(data);
			//console.log(infArr=myshopinf);
			var shopInfdiv=document.createElement("div");
			shopInfdiv.className="cont_title_inf";//创建防止商家信息的div，并设置类名

			var content2_cont_left=document.getElementsByClassName("content2_cont_left")[0];
			var	cont_title_page=document.getElementsByClassName("cont_title_page")[0];
			content2_cont_left.insertBefore(shopInfdiv,cont_title_page);//将div插入到中间层;

			var ul=document.createElement("ul");
			shopInfdiv.appendChild(ul);

			for(var i=0;i<5;i++){
				//console.log("hello");
				var li=document.createElement("li");
				ul.appendChild(li);
				//创建左边图片部分
				var a=document.createElement("a");
				var img=document.createElement("img");
				a.href="###";//需设置路径
				li.appendChild(a);
				a.appendChild(img);

				//创建中间信息部分
				var li_div=document.createElement("div");
				li_div.className="cont_title_infleft";
				li.appendChild(li_div);

				var li_h3=document.createElement("h3");
				var li_a=document.createElement("a");
				var li_h3_div=document.createElement("div");
				var li_i=document.createElement("i");
				li_i.innerHTML="店铺等级:";
				var li_h3_div_a=document.createElement("a");
				a.href="###";
				for(var j=0;j<5;j++){
					var h3_div_span=document.createElement("span");
					li_h3_div_a.appendChild(h3_div_span);
				}
				var li_div_p1=document.createElement("p");
				var li_div_p1_span=document.createElement("span");
				var li_div_p1_i=document.createElement("i");
				li_div_p1.appendChild(li_div_p1_i);
				li_div_p1.appendChild(li_div_p1_span);
				li_div_p1_i.innerHTML="主营 : ";
				var li_div_p2=document.createElement("p");
				var li_div_p2_i=document.createElement("i");
				var li_div_p2_span=document.createElement("span");
				li_div_p2.appendChild(li_div_p2_i);
				li_div_p2.appendChild(li_div_p2_span);
				li_div_p2_i.innerHTML="地址 : ";

				li_h3_div.appendChild(li_i);
				li_h3_div.appendChild(li_h3_div_a);
				li_h3.appendChild(li_a);
				li_h3.appendChild(li_h3_div);
				li_div.appendChild(li_h3);
				li_div.appendChild(li_div_p1);
				li_div.appendChild(li_div_p2);

				//创建右边认证信息
				var li_divright=document.createElement("div");
				li_divright.className="cont_title_infright";
				li.appendChild(li_divright);

				var li_right_div_p1=document.createElement("p");
				var li_right_div_p2=document.createElement("p");
				var li_right_div_p3=document.createElement("p");
				li_divright.appendChild(li_right_div_p1);
				li_divright.appendChild(li_right_div_p2);
				li_divright.appendChild(li_right_div_p3);

				var li_right_p1_span=document.createElement("span");
				var li_right_p1_i=document.createElement("i");
				li_right_p1_i.innerHTML="先行赔付";
				li_right_div_p1.appendChild(li_right_p1_span);
				li_right_div_p1.appendChild(li_right_p1_i);

				var li_right_p2_span=document.createElement("span");
				var li_right_p2_i=document.createElement("i");
				li_right_p2_i.innerHTML="同城帮认证";
				li_right_div_p2.appendChild(li_right_p2_span);
				li_right_div_p2.appendChild(li_right_p2_i);

				var li_right_p3_i1=document.createElement("i");
				li_right_p3_i1.innerHTML="人气："
				var li_right_p3_span=document.createElement("span");
				var li_right_p3_i2=document.createElement("i");
				li_right_p3_i2.innerHTML="次浏览";
				li_right_div_p3.appendChild(li_right_p3_i1);
				li_right_div_p3.appendChild(li_right_p3_span);
				li_right_div_p3.appendChild(li_right_p3_i2);

				//创建进入店铺标识
				var li_aa=document.createElement("a");
				li_aa.href="360Otherpage/DP_xq.html";
				li_aa.className="cont_title_infbtn";
				li_aa.innerHTML="进入店铺";
				li.appendChild(li_aa);

				//添加店铺信息
				img.src=infArr[index].shop_ico;
				li_a.innerHTML=infArr[index].shop_name;
				if(infArr[index].main.length>22){
					infArr[index].main=infArr[index].main.substring(0,23)+"...";
				}
				if(infArr[index].addr.length>22){
					infArr[index].addr=infArr[index].addr.substring(0,23)+"...";
				}
				li_div_p1_span.innerHTML=infArr[index].main;
				li_div_p2_span.innerHTML=infArr[index].addr;
				li_right_p3_span.innerHTML=infArr[index].shop_visit;
				index++;
			}
		}
	}
})