define(["getnum"],function(){return{createshopInf:function(e,n){infArr=e.shop_data;var t=document.createElement("div");t.className="cont_title_inf";var a=document.getElementsByClassName("content2_cont_left")[0],r=document.getElementsByClassName("cont_title_page")[0];a.insertBefore(t,r);var d=document.createElement("ul");t.appendChild(d);for(var i=0;5>i;i++){var l=document.createElement("li");d.appendChild(l);var c=document.createElement("a"),m=document.createElement("img");c.href="###",l.appendChild(c),c.appendChild(m);var p=document.createElement("div");p.className="cont_title_infleft",l.appendChild(p);var o=document.createElement("h3"),h=document.createElement("a"),u=document.createElement("div"),s=document.createElement("i");s.innerHTML="店铺等级:";var E=document.createElement("a");c.href="###";for(var C=0;5>C;C++){var f=document.createElement("span");E.appendChild(f)}var v=document.createElement("p"),_=document.createElement("span"),A=document.createElement("i");v.appendChild(A),v.appendChild(_),A.innerHTML="主营 : ";var H=document.createElement("p"),L=document.createElement("i"),M=document.createElement("span");H.appendChild(L),H.appendChild(M),L.innerHTML="地址 : ",u.appendChild(s),u.appendChild(E),o.appendChild(h),o.appendChild(u),p.appendChild(o),p.appendChild(v),p.appendChild(H);var T=document.createElement("div");T.className="cont_title_infright",l.appendChild(T);var g=document.createElement("p"),N=document.createElement("p"),b=document.createElement("p");T.appendChild(g),T.appendChild(N),T.appendChild(b);var B=document.createElement("span"),y=document.createElement("i");y.innerHTML="先行赔付",g.appendChild(B),g.appendChild(y);var q=document.createElement("span"),x=document.createElement("i");x.innerHTML="同城帮认证",N.appendChild(q),N.appendChild(x);var D=document.createElement("i");D.innerHTML="人气：";var I=document.createElement("span"),O=document.createElement("i");O.innerHTML="次浏览",b.appendChild(D),b.appendChild(I),b.appendChild(O);var P=document.createElement("a");P.href="360Otherpage/DP_xq.html",P.className="cont_title_infbtn",P.innerHTML="进入店铺",l.appendChild(P),m.src=infArr[n].shop_ico,h.innerHTML=infArr[n].shop_name,infArr[n].main.length>22&&(infArr[n].main=infArr[n].main.substring(0,23)+"..."),infArr[n].addr.length>22&&(infArr[n].addr=infArr[n].addr.substring(0,23)+"..."),_.innerHTML=infArr[n].main,M.innerHTML=infArr[n].addr,I.innerHTML=infArr[n].shop_visit,n++}}}});