"use strict";function addmodel(){this.main=$(".content_box"),this.sec1=$(".sec1"),this.sec2=$(".sec2"),this.sec3=$(".sec3"),this.sec4=$(".sec4"),this.sec5=$(".sec5"),this.sec6=$(".sec6"),this.sec7=$(".sec7"),this.sec8=$(".sec8")}function swiper(){this.abtn=$(".swiperbtn"),this.swiper=$(".swiper-container")}$.extend(addmodel.prototype,{init:function(){this.addata()},addata:function(){$.ajax({type:"post",url:"http://localhost/work/yigu/src/php/select.php",data:{},dataType:"json",success:$.proxy(this.datas,this)})},datas:function(m){var t,s,i="",a="",n="",e="",c="",d="";t='\n\t\t\t<a href="##" class="img_t"   data-id="'+m[0].did+'" ><img src="'+m[0].img+"?"+m[0].did+'" class="img" alt=""></a>\n\t\t\t<a href="##" class="shmove"  data-id="'+m[1].did+'">\n\t\t\t\t<img src="'+m[1].img+"?"+m[1].did+'" class="img" alt="">\n\t\t\t\t<div class="pro_text">\n\t\t\t\t\t<h3 class="img">'+m[1].title+'</h3>\n\t\t\t\t\t<p><span class="fl">￥'+m[1].mprice+'</span><span class="fr">￥'+m[1].price+'</span></p>\n\t\t\t\t</div>\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t<a href="##" class="shmove"  data-id="'+m[2].did+'">\n\t\t\t\t<img src="'+m[2].img+"?"+m[2].did+'" class="img" alt="">\n\t\t\t\t<div class="pro_text">\n\t\t\t\t\t<h3 class="img">'+m[2].title+'</h3>\n\t\t\t\t\t<p><span class="fl">￥'+m[2].mprice+'</span><span class="fr">￥'+m[2].price+'</span></p>\n\t\t\t\t</div>\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t',this.sec1.html(t),s='\n\t\t\t<a href="##" class="shmove"  data-id="'+m[3].did+'">\n\t\t\t\t<img src="'+m[3].img+"?"+m[3].did+'" class="img" alt="">\n\t\t\t\t<div class="pro_text">\n\t\t\t\t\t<h3 class="img">'+m[3].title+'</h3>\n\t\t\t\t\t<p><span class="fl">￥'+m[3].mprice+'</span><span class="fr">￥'+m[3].price+'</span></p>\n\t\t\t\t</div>\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t<a href="##" class="shmove"  data-id="'+m[4].did+'">\n\t\t\t\t<img src="'+m[4].img+"?"+m[4].did+'" class="img" alt="">\n\t\t\t\t<div class="pro_text">\n\t\t\t\t\t<h3 class="img">'+m[4].title+'</h3>\n\t\t\t\t\t<p><span class="fl">￥'+m[4].mprice+'</span><span class="fr">￥'+m[4].price+'</span></p>\n\t\t\t\t</div>\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t<a href="##" class="img_t"   data-id="'+m[5].did+'" ><img src="'+m[5].img+"?"+m[5].did+'" class="img" alt=""></a>\n\t\t',this.sec2.html(s);for(var l=6;l<9;l++)i+='\n\t\t\t<a href="##" class="shmove iw1"  data-id="'+m[l].did+'">\n\t\t\t\t<img src="'+m[l].img+"?"+m[l].did+'" class="img" alt="">\n\t\t\t\t<div class="pro_text">\n\t\t\t\t\t<h3 class="img">'+m[l].title+'</h3>\n\t\t\t\t\t<p><span class="fl">￥'+m[l].mprice+'</span><span class="fr">￥'+m[l].price+'</span></p>\n\t\t\t\t</div>\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t';this.sec3.html(i);for(l=9;l<12;l++)a+='\n\t\t\t<a href="##" class="shmove iw1"  data-id="'+m[l].did+'">\n\t\t\t\t<img src="'+m[l].img+"?"+m[l].did+'" class="img" alt="">\n\t\t\t\t<div class="pro_text">\n\t\t\t\t\t<h3 class="img">'+m[l].title+'</h3>\n\t\t\t\t\t<p><span class="fl">￥'+m[l].mprice+'</span><span class="fr">￥'+m[l].price+'</span></p>\n\t\t\t\t</div>\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t';this.sec4.html(a);for(l=12;l<15;l++)n+='\n\t\t\t<a href="##" class="shmove iw2 ih2 prelative"   data-id="'+m[l].did+'">\n\t\t\t\t<img src="'+m[l].img+"?"+m[l].did+'" class="img" alt="">\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t';this.sec5.html(n);for(l=15;l<18;l++)e+='\n\t\t\t<a href="##" class="shmove iw1"  data-id="'+m[l].did+'">\n\t\t\t\t<img src="'+m[l].img+"?"+m[l].did+'" class="img" alt="">\n\t\t\t\t<div class="pro_text">\n\t\t\t\t\t<h3 class="img">'+m[l].title+'</h3>\n\t\t\t\t\t<p><span class="fl">￥'+m[l].mprice+'</span><span class="fr">￥'+m[l].price+'</span></p>\n\t\t\t\t</div>\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t';this.sec6.html(e);for(l=18;l<21;l++)c+='\n\t\t\t<a href="##" class="shmove iw1"  data-id="'+m[l].did+'">\n\t\t\t\t<img src="'+m[l].img+"?"+m[l].did+'" class="img" alt="">\n\t\t\t\t<div class="pro_text">\n\t\t\t\t\t<h3 class="img">'+m[l].title+'</h3>\n\t\t\t\t\t<p><span class="fl">￥'+m[l].mprice+'</span><span class="fr">￥'+m[l].price+'</span></p>\n\t\t\t\t</div>\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t';this.sec7.html(c);for(l=21;l<24;l++)d+='\n\t\t\t<a href="##" class="shmove iw2 ih2 prelative"   data-id="'+m[l].did+'" >\n\t\t\t\t<img src="'+m[l].img+"?"+m[l].did+'" class="img" alt="">\n\t\t\t\t<span id = "addshop"><em class="img">加入购物车</em></span>\n\t\t\t</a>\n\t\t\t';this.sec8.html(d);var r={},o={};this.main.click(function(t){var s=(t=t||event).target||t.srcElement;if("IMG"==s.tagName&&"img"==s.className)for(var i=s.src.split("?")[1].split("=")[1],a=0;a<m.length;a++)if(i==m[a].id){var n=$(s).parent().attr("data-id"),e=o[n];e||(e=1,o[n]=e);var c=JSON.stringify(o);localStorage.setItem("buy_data",c),location.href="html/details.html";break}if(console.log(s),"SPAN"==s.tagName&&"addshop"==s.id||"EM"==s.tagName){var d=$(s).parent().parent().attr("data-id");console.log(d);var l=r[d];l?l++:l=1,r[d]=l;var p=JSON.stringify(r);localStorage.setItem("buy_list",p)}})}}),(new addmodel).init(),$.extend(swiper.prototype,{init:function(){this.enter()},enter:function(){this.swiper.on("mouseenter",$.proxy(this.abtnshow,this)),this.swiper.on("mouseleave",$.proxy(this.abtnhide,this))},abtnshow:function(){this.abtn.css("display","block")},abtnhide:function(){this.abtn.css("display","none")}}),(new swiper).init(),window.onload=function(){function t(){this.lis=$(".img")}function s(){this.content=$("#glass"),this.box=$("#box"),this.smalls=$(".small"),this.boxImg=$("#box img")}$.extend(t.prototype,{init:function(){this.lis.mouseover($.proxy(this.over)),this.lis.mouseover($.proxy(this.out))},over:function(){$(this).animate({left:10},300)},out:function(){$(this).animate({left:0},300)}}),(new t).init(),$.extend(s.prototype,{init:function(){this.over()},over:function(){var s=this;this.smalls.mouseover(function(){var t=$(this).attr("data-url");s.boxImg.attr("src",t)})}}),(new s).init()};