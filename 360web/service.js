var express=require("express");
var fs=require("fs");

var app=express();

var datas=[];
fs.readFile("data/1.json",function(err,data){
	datas.push(data);
})

fs.readFile("data/2.json",function(err,data){
	datas.push(data);
})

fs.readFile("data/3.json",function(err,data){
	datas.push(data);

	app.listen(3000);
	console.log("服务已经启动。。。。")
})


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/tcb/shops/pagecount/:count",function(req,res){
	var count= req.params.count-1;
	res.set("Content-type","application/json");
	res.send(datas[count]);
})

