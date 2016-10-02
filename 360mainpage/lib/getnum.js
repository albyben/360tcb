define(function(){
	return{
		//定义函数保存被选中的是第几页的商家信息
		getcheckednum:function(){
			var pagenumbtn=document.getElementsByClassName("pagenumbtn");
			var num=0;
			//console.log(pagenumbtn[0].currentStyle.color)
			//console.log(getComputedStyle(pagenumbtn[0]).color);//因为属性放置于css内，访问不到
															//选中元素数据，除非是内联样式
			for(var i=0;i<pagenumbtn.length;i++){
				if(getComputedStyle(pagenumbtn[i]).color=="rgb(255, 255, 255)"){
					num = i;
				}
			}
			return num;
		}
	}
})